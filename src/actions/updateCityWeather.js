import $ from 'jquery';
import { API_KEY } from '../constants/ApiContants.js';

export const updateCityWeather = (city, localIn) => dispatch => {

					$.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+city.name+'&APPID='+API_KEY+'', function(result){
												return result;
				      })
				  .then(function(toDay) {

				       		$.getJSON('http://api.openweathermap.org/data/2.5/forecast?q='+city.name+'&APPID='+API_KEY+'', function(days5){

						       		let cityLocation;	

											if(localIn){
													cityLocation = 'local';
											}
											else{
													cityLocation = 'cities';
											}

											let localCities = JSON.parse(localStorage.getItem(cityLocation));

											if(localCities){

													for(var i=0;i<localCities.length;i++){
														if (localCities[i].toDay.name === city.name){																	
																localCities[i] = { 'toDay':toDay, 'days5':days5 }
																break;
														}
													};

													let cities = JSON.stringify(localCities);
									        localStorage.setItem(cityLocation, cities);
							        }	

									    if(cityLocation == 'cities'){

									        dispatch({
															        type: 'UPDATE_CITY_WEATHER_SUCCESS',
															         payload: { 'toDay':toDay, 'days5':days5 }
															    });
											} else {
												
													dispatch({
															        type: 'UPDATE_LOCAL_WEATHER_SUCCESS',
															         payload: { 'toDay':toDay, 'days5':days5 }
															    });
											}     																

				   				});
				  });     			


						
}  


