import React from 'react';
import { Button, Glyphicon, Table } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const TodayWeather = React.createClass({

    render() {
        return (
            <Col xs={12} sm={12} md={9} lg={7} lgOffset={0} className="pad0 table-box-today">
                <div className="icon">
                    {(this.props.loaded)? 'Loading...' : <img src={this.props.src} alt='icon' /> } 
                </div>
                <Table responsive className="today-table-info">
                    <tbody>
                        <tr>
                            <td>Temperature:</td>
                            <td>{this.props.temp}&#176;</td>
                        </tr>
                        <tr>
                            <td>Cloudiness:</td>
                            <td>{this.props.sky}</td>
                        </tr>
                        <tr>
                            <td>Wind:</td>
                            <td>{this.props.wind} m/s</td>
                        </tr>
                        <tr>
                            <td>Sunrise:</td>
                            <td>{this.props.sunrise}</td>
                        </tr>
                        <tr>
                            <td>Sunset:</td>
                            <td>{this.props.sunset}</td>
                        </tr>
                        <tr>
                            <td>Humidity:</td>
                            <td>{this.props.humidity}%</td>
                        </tr>
                        <tr>
                            <td>Pressure:</td>
                            <td>{this.props.pressure} hpa</td>
                        </tr>
                        <tr>
                            <td>Sea level:</td>
                            <td>{this.props.seaLevel}</td>
                        </tr>
                    </tbody>
                </Table>
                  
            </Col>
        );
    }
});

export default TodayWeather;


