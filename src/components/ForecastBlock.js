import React from 'react';

import ForecastShow from './ForecastShow.js';

import * as timeFunc from '../api/func-time.js';
import * as numberFunc from '../api/func-number.js';

import { Button, Glyphicon, Table, Accordion, Panel } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import ScrollArea  from 'react-scrollbar';



const ForecastBlock= React.createClass({

    render() {

        var panelHeader = (
            <h4 role="presentation">
                 Weather forecast 5 days
                <Glyphicon glyph="chevron-up" className="panel-arrow "/>  
            </h4>
        );

        return (
            <Col xs={12} className="pad0 table-box-today">
                <Accordion>
                   <Panel header={panelHeader}  eventKey="1" bsClass="custom-panel-tab forecast-panel"> 
                     <ScrollArea className="forecast-area" > 
                       {
                          this.props.forecast.map(city =>
                                <ForecastShow  
                                    key={city.dt}
                                    time ={ timeFunc.formatTimeHourly(city.dt) }
                                    temp = { (city.main.temp - 273.15).toFixed(1) }
                                    icon = {city.weather[0].icon}
                                    description = {city.weather[0].description}
                                    wind = {city.wind.speed.toFixed(2)}
                                    humidity = {city.main.humidity}
                                    pressure = {city.main.pressure}
                                   

                                />
                            )
                       }
                       </ScrollArea>
                  </Panel>
                </Accordion> 
                  
            </Col>
        );
    }
});

export default ForecastBlock;



