import React from 'react';
import store from '../store/store.js';
import { connect } from 'react-redux';

import ChartWeather from '../components/ChartWeather.js';
import TodayWeather from '../components/TodayWeather.js';
import ForecastBlock from '../components/ForecastBlock.js';

import { updateCityWeather } from '../actions/updateCityWeather.js';

import * as timeFunc from '../api/func-time.js';

import { Col, Tabs, Tab, Button } from 'react-bootstrap';

import ScrollArea  from 'react-scrollbar';

const WeatherInfo = React.createClass({
	handleUpdateWeather(city , localIn) {
		this.props.updateWeather(city, localIn);
	},

    render() {
    	let data ={};
    	let country, sky, src, temp, wind, nameCity, humidity, today, sunrise, sunset , seaLevel, pressure, forecast;

        let curent = this.props.curentWeather;
        let local = this.props.local;

		if(curent.curentWeather.toDay || local.loaded === false){
			
			if( curent.localIn === true ){
				data = local.data.toDay;
				data.localIn  = true;
				forecast = local.data.days5.list;
			} 
			else if( curent.localIn === false ){
				data = curent.curentWeather.toDay;
				data.localIn  = false;
				forecast = curent.curentWeather.days5.list;		
			}

			nameCity = data.name;
			country = data.sys.country;
			src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            temp = (data.main.temp - 273.15).toFixed(1);
            sky = data.weather[0].description;
            humidity = data.main.humidity;
            wind = data.wind.speed;
            seaLevel = data.main.sea_level;
            pressure = data.main.pressure;
			today = timeFunc.formatDate(data.dt);
			sunrise = timeFunc.formatTime(data.sys.sunrise);
            sunset = timeFunc.formatTime(data.sys.sunset );
               
        }	

        return (
        	<Col xs={12} sm={7} md={8} >
                <div className='weather-block text-center'>

                   <div className="wrap-today-weather"> 
                       <p className="top-today">Weather in {nameCity} / {country} today</p>
                       <p className="get-at">
                       	 <Button 
                            type="button"
                            bsClass="btn custom-btn"
                            onClick={this.handleUpdateWeather.bind(this,data, data.localIn)}
                            bsSize="small"
                            >
                            Update
                         </Button>
                       	 <span className="get-at-info">{today}</span>
                       </p>   
                    	<Tabs defaultActiveKey={1} animation={false} id="wether-tab" className="custom-pane">
    					    <Tab eventKey={1} title="Table Weather">
    				    		<TodayWeather 
         					   		loaded={this.props.loaded}
         					   		temp ={temp}
         					   		sky={sky}
                                    wind={wind}
         					   		src={src}
         					   		sunrise={sunrise}
         					   		sunset={sunset}
         					   		humidity={humidity}
         					   		seaLevel={seaLevel}
         					   		pressure={pressure}
         					   /> 
    					    </Tab>
    					    <Tab eventKey={2} title="Chart Weather">
    					    	<ChartWeather forecast={forecast}/>	
    					    </Tab>			        				        	
    			        </Tabs>
                    </div>

                    <div className="wrap-forecast">
                        {
                           (forecast) ? 
                                <ForecastBlock forecast={forecast} />
                            : ''    
                        }
                    </div>

                </div>
           </Col> 
        );
    }
});

export default WeatherInfo;

function mapStateToProps (state) {
  return {
    curentWeather: state.curentWeather, 
    local: state.local 
  }
}



function mapDispatchToProps(dispatch) {
  return {
        updateWeather: (city, localIn) => {
            dispatch(updateCityWeather(city, localIn));
        },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo)