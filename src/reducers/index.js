import { combineReducers } from 'redux';
import local from './local.js';
import cities from './cities.js';
import curentWeather from './curentWeather.js';

var reducers = combineReducers({
	local,
	cities,
	curentWeather
});
export default reducers;