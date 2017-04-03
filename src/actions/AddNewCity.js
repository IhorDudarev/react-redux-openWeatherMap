import $ from 'jquery';
import * as CommonFunc from '../api/func-api.js';
import * as commonFunc from '../api/func-api.js';

export const addNewCity = (city) => dispatch => { 

				let checkCity = commonFunc.checkCity(city);

        if(checkCity.length){
          			dispatch({
      	                   type: 'ADD_CITY_FAIL',
      	                   payload: 'This city is allready in favorites'
      	                });	
       				}
       	else{
              let allCities = [];   
              let localCities = JSON.parse(localStorage.getItem('cities'));
              if(localCities){
                  allCities = localCities.slice();
              }
       		    allCities.unshift(city);
			        let cities = JSON.stringify(allCities);
			        localStorage.setItem('cities', cities);
			        dispatch({
					                type: 'ADD_CITY_SUCCESS',
					                payload: allCities
					             });	
       	}

}  