import React, { Component } from 'react';
import './reserve.css';
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import { Modal, ModalFooter, ModalHeader} from "react-bootstrap";
import {STORAGE_KEY} from "../../constants";
import Reserve1 from './reserve1';
import Reserve2 from './reserve2';
import Reserve3 from './reserve3';
class Reserve extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passangers: 1,
            checkIn: new Date().toLocaleString(),
            checkOut: new Date().toLocaleString(),
            currentDate:null,
            price: this.props.PlacePrice,
            total: this.props.PlacePrice+" $",
            stayingDays:1,
            size:null,
        }
    }

    componentDidMount = () =>{
        document.addEventListener(STORAGE_KEY+'screen-size-changed', (event) => this.setState({size: event.detail}));
        console.log(this.props.PlacePrice + " s " + this.props.placeMaxCapacity)
    }

    exit()
    {
        document.getElementById('redirect-to-villa-profile').click()
    }

    render() { 
        return ( 
            <Modal                       
            centered
            size={'md'}
            animation
            height={600}
            show={true}
            onHide={this.exit}>
                <Switch>
                    <Route path="/villa/villaProfile/reserve/1/">
                        <Reserve1 placeMaxCapacity={this.props.placeMaxCapacity} PlacePrice={this.props.PlacePrice}/>
                    </Route>

                    <Route path="/villa/villaProfile/reserve/2/">
                        <Reserve2/>
                    </Route>

                    <Route path="/villa/villaProfile/reserve/3/">
                        <Reserve3 />
                    </Route>

                </Switch>
                
            </Modal>
         );
    }
}
 
export default Reserve;