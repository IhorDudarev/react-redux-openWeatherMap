import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

export default class PreviewCity extends React.Component{

    render() {

        let flag = (this.props.country).toLowerCase();
        let src = `http://openweathermap.org/images/flags/${flag}.png`;

        return (
            <div className='preview-block'>

            	<p className="preview-city-name">
                    {this.props.name} / <span>{this.props.country}</span>
                    <img src= {src}/>
                </p>
                <Button 
                    type="button"
                    bsClass="btn custom-btn"
                    onClick={this.props.showPreviewWeather}
                    bsSize="small"
                    >
                    Show Weather
                </Button>

                {
                    (this.props.localCity === false && this.props.addCity === false)?
                
                        <Button 
                            type="button" 
                            bsClass="btn custom-btn"
                            onClick={this.props.onClickAdd}
                            bsSize="small"
                            title="add to favorite"
                        >
                           <Glyphicon glyph="plus" />
                        </Button>
                    : ''        
                }        
                <span 
                    className="delete_preview"
                    onClick={this.props.delPreview}
                    title="Delete this city"    
                >
                    <Glyphicon glyph="remove" className="glif-del"/>            
                </span>  

            </div>
        );
    }
};



