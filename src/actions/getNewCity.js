import $ from 'jquery';
import { API_KEY } from '../constants/ApiContants.js';
import * as commonFunc from '../api/func-api.js';

export const getNewCity = (city) => dispatch => {
						
			let checkCity = commonFunc.checkCity(city);


          if(checkCity.length){
      				dispatch({
    						  type: 'NEW_CITY_LOCAL',
    						  payload: checkCity[0]
    		      			});	
          }
     	  else {
   
	     			$.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID='+API_KEY+'', function(toDay){
								return toDay;
	     			})
	     			.fail(function(error){     							 
							  let jsonResponse = JSON.parse(error.responseText);
						    dispatch({
							          type: 'NEW_CITY_FAIL',
							          payload: jsonResponse.message
		              		        });	
	     			})
	     			.done(function(toDay) {

								$.getJSON('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&APPID='+API_KEY+'', function(days5){
											return days5;
								})
								.fail(function(error){     							 
									  let jsonResponse = JSON.parse(error.responseText);
								    dispatch({
									          type: 'NEW_CITY_FAIL',
									          payload: jsonResponse.message
				              		        });	
			     			})
								.done(function(days5){
												dispatch({
							                   type: 'NEW_CITY_SUCCESS',
							                   payload: { 'toDay':toDay, 'days5':days5 }
			          				        });	
								})
	     			});



        }
						
}  

