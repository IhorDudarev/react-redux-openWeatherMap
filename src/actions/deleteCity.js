import $ from 'jquery';


export const deleteCity = (cityId) => dispatch => { 
				var allCities=[];		

				var localCities = JSON.parse(localStorage.getItem('cities'));
        if(localCities){
        	  allCities = localCities.slice();
        }

	  		allCities = allCities.filter(function(city) {
	            return city.toDay.id !== cityId;
	      });
	
        var cities = JSON.stringify(allCities);
        localStorage.setItem('cities', cities);

        dispatch({
		                type: 'DELETE_CITY_SUCCESS',
		                payload: allCities
		              });	
       	

}  