import React from 'react';
import {Bar} from 'react-chartjs-2';
import { Col } from 'react-bootstrap';

import * as timeFunc from '../api/func-time.js';
import * as numberFunc from '../api/func-number.js';

 Chart.defaults.global.defaultFontColor = '#FFF';
 Chart.defaults.global.defaultFontSize = 12;

export default class ChartWeather extends React.Component{

  render() {

    let allWeather = this.props.forecast;

    let time, precipitation, maxPrecipitation , stepPrecipitation, temp, maxTemp, minTemp, tempStep;
         
    if(allWeather){   

      time = allWeather.slice(0,8).map(function(item) {          
                  return timeFunc.formatTimeChart(item.dt);     
            });

      precipitation = allWeather.slice(0,8).map(function(item) {    
                  let snow  = (item.snow && item.snow['3h'])? item.snow['3h'] : 0;
                  let rain  = (item.rain && item.rain['3h'])? item.rain['3h'] : 0;
                  if(snow > rain) return snow.toFixed(2);
                    return rain.toFixed(2);;
            });

      maxPrecipitation = numberFunc.roundPlus((Math.max.apply(null, precipitation)),1);        

      if(maxPrecipitation <= 0.1){
           maxPrecipitation = 0.1; 
          stepPrecipitation = 0.02; 
      }
      else if(maxPrecipitation > 0.1 && maxPrecipitation < 1){
          maxPrecipitation = 1; 
          stepPrecipitation = 0.25; 
      }
      else if( maxPrecipitation >= 1 && maxPrecipitation <= 2){
          maxPrecipitation = 2; 
          stepPrecipitation = 0.5;   
      }
      else if( maxPrecipitation > 2 && maxPrecipitation <= 5){
           maxPrecipitation = 5 
          stepPrecipitation = 1;   
      }
      else{
          maxPrecipitation = 20  
          stepPrecipitation = 4;  
      }
       
       temp = allWeather.slice(0,8).map(function(item) {          
            return (item.main.temp - 273.15).toFixed(2);    
       });

       maxTemp = numberFunc.roundPlus((Math.max.apply(null,temp)),0);

       if(maxTemp <= 0) {
          maxTemp = 0;
       }
       else if(maxTemp >0 && maxTemp <10 ){
          maxTemp = 10;
       }
        else if(maxTemp >=10 && maxTemp <20 ){
          maxTemp = 20;
       }
        else if(maxTemp >=20 && maxTemp <30 ){
          maxTemp = 30;
       }
       else {
          maxTemp = 50;
       }
       
       minTemp = Math.min.apply(null,temp);


       if(minTemp > -50 && minTemp < -30 ){
          minTemp = -50;
       }
        else if(minTemp >= -30 && minTemp < -20 ){
          minTemp = -30;
       }
        else if(minTemp >= -20 && minTemp < -10 ){
          minTemp = -20;
       }
        else if(minTemp >= -10 && minTemp < 0 ){
          minTemp = -10;
       }
       else {
          minTemp = 0;
       }


    }

  let options = {
      responsive: true,
      easing:'easeInOutQuart',
      tooltips: {
        mode: 'label',    
      },
      elements: {
        line: {
          fill: false
        }
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: false
            },
            labels: {
              show: true
            }
          }
        ],
        yAxes: [
          {
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-1',
            gridLines: {
              display: false
            },
            labels: {
              show: true
            },
            ticks: {
                      max: maxTemp,
                      min: minTemp ,
                      callback: function(label, index, labels) {
                         return label + '°';
                       },
                      stepSize: 4
                    },  
            },

          {
            type: 'linear',
            display: true,
            position: 'right',
            id: 'y-axis-2',
            gridLines: {
              display: true
            },
            labels: {
              show: true
            },
            ticks: {
                      max: maxPrecipitation,
                      min: 0.00,
                      callback: function(label, index, labels) {
                         return label + 'mm';
                       },
                      stepSize: stepPrecipitation
                    }
          }
        ]
      }
  };




let data = {
  responsive:'true', 
  xLabels: time,
  datasets: [{
      label: ' Temperature',
      type:'line',
      data: temp,
      fill: false,
      borderColor: '#0e76ff',
      backgroundColor: '#0e76ff',
      spanGaps: true,
      pointBorderColor: '#fff',
      pointBorderWidth:3,
      pointBackgroundColor: '#0e76ff',
      pointHoverBackgroundColor: '#0e76ff',
      pointHoverBorderColor: '#0e76ff',
      pointHoverBorderWidth:5,
      yAxisID: 'y-axis-1', 
    },{
      type: 'bar',
      label: ' Precipitation',
      data: precipitation,
      fill: false,
      backgroundColor: 'rgba(255, 204, 0, 0.6)',
      hoverBackgroundColor: 'rgba(255, 204, 0, 1)',
      hoverBorderColor: 'rgba(255, 204, 0, 1)',
      yAxisID: 'y-axis-2'
    }],

};



    return (
      <Col xs={12} sm={12} md={9} lg={7} className="pad0">
        <div className="wrap-chart">
          <Bar
            data={data}
            options={options}
            height={52}
            width={50}

          />
        </div>
      </Col>
    );
  }
};
     
