import React from 'react';
import { Button, Glyphicon, Table} from 'react-bootstrap';

export default class ForecastShow extends React.Component{

    render() {

        return (
            
            <Table className="forecast-hourly-block">
                <thead>
                    <tr>
                        <th colSpan="2" className="forecast-h-date">
                            <p>{this.props.time}</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td width="90" className="icon-td">
                            <img src= {`http://openweathermap.org/img/w/${this.props.icon}.png`} width="50" height="50" alt="icon" />
                        </td>
                        <td>
                            <span className="forecast-h-temp">{this.props.temp}&#176;</span>
                            <span className="forecast-h-desc">{this.props.description}</span>
                            <div className="forecast-h-sec-info">
                                <span className="forecast-h-wind">wind: {this.props.wind}m/s, </span>
                                <span className="forecast-h-humidity">humidity: {this.props.humidity}%, </span>
                                <span className="forecast-h-pressure">pressure: {this.props.pressure}hpa</span>
                            </div> 
                        </td>
                    </tr>
                </tbody>
            </Table>

        );
    }
};



