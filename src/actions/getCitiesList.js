import $ from 'jquery';


export const getCitiesList = () => dispatch => { 
	var allCities=[];		

	var localCities = JSON.parse(localStorage.getItem('cities'));
        if(localCities){
                allCities = localCities.slice();
        }

        dispatch({
								   type: 'GET_CITIES_SUCCESS',
								   payload: allCities
								});	
}  