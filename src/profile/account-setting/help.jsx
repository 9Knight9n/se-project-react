import React, { Component } from 'react';
import Card from '../cardBox';
import travelImg from '../img/travel.png';
import hostingImg from '../img/villa.png';
import cookingImg from '../img/cooking.png';
import './help.css'
class Help extends Component {
    constructor(props) {
        super(props);
        this.state = {}; 

    }
    render() { 
        return ( 
            <div className="help-main">
                <h3>Hi, How can we help you ?</h3>
                <div className="help-card mt-4 row">
                    <div className="col mt-4">
                        <Card text="Learn how to book and rent a palce for your travel." title="Booking and traveling" img={travelImg} />
                    </div>
                    <div className="col mt-4">
                        <Card text="Learn how to use Airbnb for having income from your useless space." title="Hosting stays" img={hostingImg} />
                    </div>
                    <div className="col mt-4">
                        <Card text="Learn how to host an exprience with your friends." title="Hosting experiences" img={cookingImg} />
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default Help;