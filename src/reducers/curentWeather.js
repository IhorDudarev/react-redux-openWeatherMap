const initialState = {
	curentWeather:[],
	loaded:true,
	localIn: true,
};

export default function curentWeather (state = initialState, action) {
	if(action.type === 'GET_CITY_WEATHER_SUCCESS') {
			return  {curentWeather:action.payload, loaded:false, localIn: false};
	}
	else if(action.type === 'GET_CITY_WEATHER_LOCAL') {
			return  {curentWeather:action.payload, loaded:false, localIn:false};
	}
	else if(action.type === 'GET_LOCAL_CITY_WEATHER_LOCAL') {
			return  {curentWeather:action.payload, loaded:false, localIn:true};
	}
	else if(action.type === 'UPDATE_CITY_WEATHER_SUCCESS'){
			return {curentWeather:action.payload, loaded:false, localIn:false}
	}
	

	return state;
}

