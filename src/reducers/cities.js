const initialState = {
	allCities:[],
	newCity:{},
	errorAdd:'',
	localCity:false,
	addCity:false
};

export default function cities (state = initialState, action) {
	if(action.type === 'NEW_CITY_SUCCESS') {
			return  {...state,newCity:action.payload, errorAdd:'', localCity:false, addCity:false};
	}
	else if(action.type === 'NEW_CITY_LOCAL') {
			return {...state, newCity:action.payload, errorAdd:'', localCity:true, addCity:false};
	}				
	else if(action.type === 'NEW_CITY_FAIL') {
			return {...state, errorAdd:action.payload};
	}
	else if(action.type === 'DELETE_NEW_CITY_SUCCESS'){
			return {...state, newCity:action.payload, errorAdd:'', localCity:false, addCity:false};
	}		
	else if(action.type === 'ADD_CITY_SUCCESS') {
			return {...state, allCities:action.payload, errorAdd:'', addCity:true };
	}
	else if(action.type === 'ADD_CITY_FAIL') {
			return {...state, errorAdd:action.payload};
	}

	else if(action.type === 'GET_CITIES_SUCCESS') {
			return {...state, allCities:action.payload, errorAdd:''};
	}
	else if(action.type === 'DELETE_CITY_SUCCESS'){
			return {...state, allCities:action.payload, errorAdd:''}
	}		
	





	return state;
}
