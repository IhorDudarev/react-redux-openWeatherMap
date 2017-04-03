import $ from 'jquery';
import { API_KEY } from '../constants/ApiContants.js';
import * as commonFunc from '../api/func-api.js';

export const getCityWeather = (city, localCity) => dispatch => {
						if(localCity){
								let localCity=[];		
								let localStorageLocal = JSON.parse(localStorage.getItem('local'));
					      localCity = localStorageLocal.slice();
					       	 dispatch({
												 type: 'GET_LOCAL_CITY_WEATHER_LOCAL',
												 payload: localCity[0]
									 });	
						}
						else {
								let checkCity = commonFunc.checkCity(city);

				        if(checkCity.length){
		        				dispatch({
							        type: 'GET_CITY_WEATHER_LOCAL',
							        payload: checkCity[0]
							      });	
				       	}
								else {
						       			$.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID='+API_KEY+'', function(result){
														return result;
						       				}).then(function(toDay) {
						       						$.getJSON('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&APPID='+API_KEY+'', function(days5){
						       									dispatch({
											                type: 'GET_CITY_WEATHER_SUCCESS',
											                payload: { 'toDay':toDay, 'days5':days5 }
											              });	
						       						});
						       				});
						    }
		     }
}  