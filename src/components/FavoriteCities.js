import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

export default class FavoriteCities extends React.Component{

    render() {
        return (
            <div className="city-block-href">
                <span 
                    className="delete_city"
                    onClick={this.props.handleClickDel}
                    title="Delete this city"    
                >
                <Glyphicon glyph="remove" className="glif-del"/>            
                </span> 
                <span className='city-href'
                   onClick={this.props.getWeatherCityIn} 
                >
                    {this.props.title}
                    <Glyphicon glyph="chevron-right" className="href-arrow"/>    	  
                </span>     
            </div>
        );
    }
};



