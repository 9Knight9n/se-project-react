//@Sajad
import React, {Component, Fragment} from 'react';
import './homepage.css'
import {Route, Switch} from "react-router-dom";
import search_bg from '../../assets/img/homepage-bg.jpg'
import search_1_bg from '../../assets/img/homepage-bg-2.jpg'
// import map_bg from '../../assets/img/homepage-bg.jpg'
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
                    <div className={'homepage-div-bg'}
                         style={{background:'url('+search_1_bg+')',borderRadius:'1.5rem'}}>
                        <div>

                        </div>
                    </div>
                    <div className={'homepage-div-bg'} style={{backgroundColor:"white"}}>
                        <div className={'row w-100 d-flex h-100'} >
                            <div className={'col-md-8 col-lg-8 col-xl-8 col-sm-12 col-12 mt-auto mb-auto'}>
                                <div className={'mr-5 ml-5'}>
                                    <RMap  width={"100%"} height={"60vh"} initial={{ center: center, zoom: 11 }}>
                                        <ROSM />
                                    </RMap>
                                </div>
                            </div>
                            <div className={'w-100 h-100 col-md-4 col-lg-4 col-xl-4 col-sm-12 col-12 mt-auto mb-auto'}>
                                <h1 className={'mr-auto ml-auto'} style={{backgroundColor:'white'}}>Villa card here!</h1>
                            </div>
                        </div>
                    </div>
                    <div className={'homepage-div-bg'} style={{background:'url('+search_bg+')',borderRadius:'1.5rem'}}>
                        <div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Homepage;
