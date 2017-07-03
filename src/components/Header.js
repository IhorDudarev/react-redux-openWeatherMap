import React from 'react';
import store from '../store/store.js';
import { connect } from 'react-redux';

import { getLocalWeather } from '../actions/getLocalWeather.js';

export default class Header extends React.Component{
    componentWillMount() {
        this.props.onInLoad();
    }

    render() {
        let localProps, src, temp, name, country, flag;
        if(this.props.local.loaded === false){

            localProps =this.props.local.data.toDay;
            src = `http://openweathermap.org/img/w/${localProps.weather[0].icon}.png`;
            temp = (localProps.main.temp - 273.15).toFixed(1);
            name = localProps.name;
            country = localProps.sys.country;

            let srcCountry = country.toLowerCase();
            flag = `http://openweathermap.org/images/flags/${srcCountry}.png`;
        }    
        

        return (
            <header>
                {            		
                 (this.props.local.loaded)? 'Loading...' :
                            <div className="wrap-in-header">
                                <div className="location-info">
                                    <span>Your location: {name} / <span>{country} <img src={flag} /> </span> 
                                    </span>
                                    
                                </div>
                                <div className="head-weather-info">
                                    <img src={src} alt='icon' width="50" height="50" />
                                    <span className="head-temp">{temp}&#176;</span>
                                </div>
                            </div>
                }                  
            </header>
        );
    }
};


export default connect(
    state => ({ local: state.local}),
    dispatch =>({
      onInLoad: () => {
        dispatch(getLocalWeather());
      },
    })
  )(Header);

 
                         