import $ from 'jquery';
import { API_KEY } from '../constants/ApiContants.js';
import * as commonFunc from '../api/func-api.js';

export const getLocalWeather = () => dispatch => {

			let localCity=[];
			

			let localStorageLocal = JSON.parse(localStorage.getItem('local'));

			if(localStorageLocal){
	       	 	localCity = localStorageLocal.slice();

	       	 	dispatch({
								 type: 'LOCAL_WEATHER_LOCAL_SUCCESS',
								 payload: localCity[0]
						 });	
	    }

      else {
	          $.getJSON('https://ipinfo.io', function(localInfo){
	          		     	
								return localInfo;
						})
						.then(function(localInfo) {

								$.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+localInfo.city+'&APPID='+API_KEY+'', function(toDay){
												return toDay;
				       				})
								.then(function(toDay) {

		       						$.getJSON('http://api.openweathermap.org/data/2.5/forecast?q='+localInfo.city+'&APPID='+API_KEY+'', function(days5){

		       								let localCity = [];   
						       		    localCity.push({ 'toDay':toDay, 'days5':days5 });

									        let local = JSON.stringify(localCity);

									        localStorage.setItem('local', local);
									        
		       									dispatch({
												                type: 'LOCAL_WEATHER_NEW_SUCCESS',
												                payload: { 'toDay':toDay, 'days5':days5 }
							              				});	
		       						});
				       	});
						});
			}		
}  