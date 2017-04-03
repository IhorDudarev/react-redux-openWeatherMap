const initialState = {
	data:[],
	loaded:true,
};

export default function local (state = initialState, action) {
	if(action.type === 'LOCAL_WEATHER_NEW_SUCCESS') {
			return  {data:action.payload, loaded:false};
	}
	else if(action.type === 'LOCAL_WEATHER_LOCAL_SUCCESS') {
			return  {data:action.payload, loaded:false};
	}					
	else if(action.type === 'LOCAL_WEATHER_FAIL') {
			return {data:action.payload};
	}		
	if(action.type === 'UPDATE_LOCAL_WEATHER_SUCCESS') {
			return  {data:action.payload, loaded:false};
	}

	return state;
}
