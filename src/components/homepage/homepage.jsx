//@Sajad
import React, {Component, Fragment} from 'react';
import './homepage.css'
import {Route, Switch} from "react-router-dom";
import search_bg from '../../assets/img/homepage-bg.jpg'

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
                        {/*<div className="section">*/}
                        {/*    <button onClick={this.onMarkerLocationChange}>Change Marker Location</button>*/}
                        {/*    <HereMap appId="LbwAgVjJPDIQzSYL5Rmq" appCode="Yav49HRqdAt3t9Kq5dKuVX05R4bnGUET8jmHn-tOVFQ" useHTTPS center={this.state.center}>*/}
                        {/*      <Marker lat={this.state.position.lat} lng={this.state.position.lng}>*/}
                        {/*        <div className="custom-marker">Sample marker</div>*/}
                        {/*      </Marker>*/}
                        {/*    </HereMap>*/}
                        {/*  </div>*/}
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
