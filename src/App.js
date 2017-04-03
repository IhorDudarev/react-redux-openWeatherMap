import React from 'react';
import store from './store/store.js';

import { connect } from 'react-redux';
import $ from 'jquery';
import Navblock from './containers/NavBlock.js';
import WeatherInfo from './containers/WeatherInfo.js';
import Header from './components/Header.js';

import { Row , Grid} from 'react-bootstrap';

const App = React.createClass({
	
    render() {
        return (
            <div className='app'>
            		<Header />
                    <Grid bsClass='container-fluid'>
                    <Row className="show-grid wraper">
                	    <Navblock />
                        <WeatherInfo />
                    </Row>
                    </Grid>
                    <footer>OpenWeatherMap</footer>   

            </div>
        );
    }
});

export default App;





