import React from 'react';
import { Button, Glyphicon ,ControlLabel , FormControl, InputGroup , FormGroup, } from 'react-bootstrap';

export default class SearchBlock extends React.Component{
    findCityIn(){
        this.props.findCityTo(this.input);
    }
    render() {
        return (
            <div className="search-block">                       
                <form>
                <FormGroup>
                  <ControlLabel>Find city</ControlLabel>
                  <InputGroup>
                    <FormControl 
                            type="text"
                            name="search" 
                            placeholder="Write your city name"
                            inputRef={(ref) => {this.input = ref}}
                            className="search-field" 
                    />
                    <InputGroup.Button>
                      <Button type="button"  bsClass="btn custom-btn" onClick={this.findCityIn.bind(this)}>
                        <Glyphicon glyph="search" />
                      </Button>
                    </InputGroup.Button>        
                  </InputGroup>
                </FormGroup> 
                </form> 
            </div>
        );
    }
};



