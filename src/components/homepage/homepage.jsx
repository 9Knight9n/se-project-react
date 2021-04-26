//@Sajad
import React, {Component, Fragment} from 'react';
import './homepage.css'
import {Route, Switch} from "react-router-dom";
import search_bg from '../../assets/img/homepage-bg.jpg'
import { fromLonLat } from "ol/proj";
import "ol/ol.css";

import { RMap, ROSM } from "rlayers";

const center = fromLonLat([2.364, 48.82]);



class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        numberOfPages:3,
        position: {
            lat: 52,
            lng: 48,
        },
        center: {
            lat: 52,
            lng: 48,
        },

    }

    onMarkerLocationChange = () => {
        this.setState({
        position: {
        lat: 52,
        lng: 30,
        },
        center: {
        lat: 52,
        lng: 30,
        },
        });
    };

    render() {
        return (
            <div id='homepage' className="d-flex flex-column">
                <div className={'w-100'} style={{height:this.state.numberOfPages+"00vh"}} >
                    <div className={'homepage-div-bg'} style={{background:'url('+search_bg+')'}}>
                        <div>

                        </div>
                    </div>
                    <div className={'homepage-div-bg'} style={{backgroundColor:'white'}}>
                        <RMap width={"100%"} height={"60vh"} initial={{ center: center, zoom: 11 }}>
                            <ROSM />
                        </RMap>
                    </div>
                    <div className={'homepage-div-bg'} style={{backgroundColor:'black'}}>
                        <div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Homepage;
