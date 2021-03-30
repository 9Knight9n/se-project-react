import React, { Component } from 'react';
import Card from '../../cardBox';
import travelImg from '../img/travel.png';
import hostingImg from '../img/villa.png';
import cookingImg from '../img/cooking.png';
import paymentImg from '../img/debit-card.png';
import problemImg from '../img/problem.png';
import connectionImg from '../img/social-media.png';
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
                    <div className="col mt-4">
                        <Card text="Learn how to pay to your host and what tips are best to follow." title="payemnt tips" img={paymentImg} />
                    </div>
                    <div className="col mt-4">
                        <Card text="Learn how to report your problems about your host or passenger." title="report a problem" img={problemImg} />
                    </div>
                    <div className="col mt-4">
                        <Card text="Learn how to make connections and find your friends on airbnb." title="connect with people" img={connectionImg} />
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default Help;