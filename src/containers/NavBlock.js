import React from 'react';
import store from '../store/store.js';
import { connect } from 'react-redux';
import $ from 'jquery';

import { getNewCity } from '../actions/getNewCity.js';
import { addNewCity } from '../actions/AddNewCity.js';
import { getCitiesList } from '../actions/getCitiesList.js';
import { deleteCity } from '../actions/deleteCity.js';
import { getCityWeather } from '../actions/getCityWeather.js';
import { deleteNewCity } from '../actions/deleteNewCity.js';

import FavoriteCities from '../components/FavoriteCities.js';
import PreviewCity from '../components/PreviewCity.js';
import SearchBlock from '../components/SearchBlock.js';

import { Col, Glyphicon, Accordion, Panel} from 'react-bootstrap';
import ScrollArea  from 'react-scrollbar';

const Navblock = React.createClass({
     handleChange(e) {
        this.setState({ value: e.target.value });
    },
    componentWillMount() {
        this.props.getFavoriteCities();
    },
    handleCityAdd: function() {
        if(this.props.cities.newCity){    
            this.props.addCity(this.props.cities.newCity);
        }
    },
    getCityWeather: function(e) {
        e.preventDefault();
    },
    handleClickDel :function (cityId) {
        this.props.deleteFavoriteCity(cityId);
    },
    handleClickWeather(city, localCity) {
        this.props.getWeather(city, localCity);
    },
    handledelPreview() {
        this.props.delNewCity();
    },

	findCity:function(el) {
        if(el.value){
            this.props.findNewCity(el.value);
            el.value ='';
        }
	},

    render() {

        let newcity  = this.props.cities.newCity.toDay;
        let localCityName;
        if(this.props.local.data.toDay){
            localCityName = this.props.local.data.toDay.name
        }
        else{
            localCityName = 'Loading...'
        }

        var panelHeader = (
            <h4 role="presentation">
                Your list of cities
                <Glyphicon glyph="chevron-up" className="panel-arrow "/>  
            </h4>
        );

        return (
             <Col xs={12} sm={5} md={4}>
                <div className='nav-block'>

            		<SearchBlock findCityTo={this.findCity}/>
                    <p className="get-city-fail"> {this.props.cities.errorAdd}</p>
        			   <div className="all-city">
            			 {
                            (newcity) ? 
                              <PreviewCity
                                    name={newcity.name}
                                    country={newcity.sys.country}
                                    onClickAdd={this.handleCityAdd}
                                    showPreviewWeather={this.handleClickWeather.bind(this,newcity.name,'')}
                                    localCity = {this.props.cities.localCity}
                                    addCity = {this.props.cities.addCity}
                                    delPreview = {this.handledelPreview}
                              />
                              : ''                 
                         }
                          
                          <div onClick={this.handleClickWeather.bind(this, localCityName,'localCity')} className="local-city">
                             {localCityName}
                             <Glyphicon glyph="chevron-right" className="href-arrow"/>  
                          </div>

                          <Accordion>
                              <Panel header={panelHeader}  collapsible defaultExpanded bsClass="custom-panel-tab"> 
                                  { 
                                    (this.props.cities.allCities.length > 0) ? 

                                      <ScrollArea className="custom-area">  
                                          <ul className="favorite-cities">

                                             {
                                                this.props.cities.allCities.map(city =>
                                                    <FavoriteCities
                                                       key={city.toDay.id}
                                                       href={city.toDay.name} 
                                                       title={city.toDay.name}
                                                       handleClickDel={this.handleClickDel.bind(this, city.toDay.id)}
                                                       getWeatherCityIn={this.handleClickWeather.bind(this,city.toDay.name, '')}
                                                    />
                                                )
                                             }
                                          </ul>
                                      </ScrollArea>

                                      : 'No saved city'
                                   }
                               </Panel>
                           </Accordion>    
        			</div>	
                </div>
            </Col>
        );
    }
});

export default Navblock;


function mapStateToProps (state) {
  return {
    cities: state.cities,
    local: state.local, 
    curentWeather: state.curentWeather
  }
}

function mapDispatchToProps(dispatch) {
  return {
        findNewCity: (city) => {
            dispatch(getNewCity(city));
        },
        addCity: (newcity) => {
            dispatch(addNewCity(newcity));
        },
        getFavoriteCities: () => {
            dispatch(getCitiesList());
        },
        deleteFavoriteCity: (cityId) => {
            dispatch(deleteCity(cityId));
        },

        getWeather: (city, localCity) => {
            dispatch(getCityWeather(city, localCity));
        },
        delNewCity: () => {
            dispatch(deleteNewCity());
        }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navblock)