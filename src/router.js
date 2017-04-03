import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import store from './store/store.js';
import App from './App.js';
import WeatherInfo from './components/WeatherInfo.js';
import { syncHistoryWithStore } from 'react-router-redux';
const history = syncHistoryWithStore(browserHistory,store);

export default (
        <Router history={history}>
            <Route path='/' component={App}>
            		<Route path='/' component={WeatherInfo} >
                 	<Route path='/:cityName' component={WeatherInfo} />
                 </Route>	
            </Route>
        </Router>
);
