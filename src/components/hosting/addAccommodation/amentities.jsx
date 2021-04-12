import React, { Component } from 'react';
import './amenities.css';
import { Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
import plusImg from '../../../assets/img/plus.png';
import minusImg from '../../../assets/img/minus.png';
import { ToastContainer, toast } from 'react-toastify';

class Amentities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            normalCapcityCounter: 1,
            maximumCapacity: 1,
            bedrooms: 0,
            doubleBeds: 0,
            singleBeds: 0,
            bathrooms: 1,
            showers: 1,


        };
    }

    handleCounter = (select, operator) =>{
        if (select === 1 && operator === "+"){
            this.setState({
                normalCapcityCounter: this.state.normalCapcityCounter + 1
            })
            return;
        }
        if (select === 1 && operator === "-" && this.state.normalCapcityCounter > 1){
            this.setState({
                normalCapcityCounter: this.state.normalCapcityCounter - 1
            })
            return;
        }
        else if (select === 1 && this.state.normalCapcityCounter <= 1)
        {
            toast.dark("Your place must have the capacity at least for one person!");
            return;
        }

        if (select === 2 && operator === "+"){
            this.setState({
                maximumCapacity: this.state.maximumCapacity + 1
            })
            return;
        }
        if (select === 2 && operator === "-" && this.state.maximumCapacity > 1){
            this.setState({
                maximumCapacity: this.state.maximumCapacity - 1
            })
            return;
        }
        else if (select === 2 && this.state.maximumCapacity <= 1)
        {
            toast.dark("Your place must have the capacity at least for one person!");
            return;
        }


        if (select === 3 && operator === "+"){
            this.setState({
                bedrooms: this.state.bedrooms + 1
            })
            return;
        }
        if (select === 3 && operator === "-" && this.state.bedrooms > 0){
            this.setState({
                bedrooms: this.state.bedrooms - 1
            })
            return;
        }
        else if (select === 3 && this.state.bedrooms <= 0)
        {
            toast.dark("This is not a possible amount!")
            return;
        }

        if (select === 4 && operator === "+"){
            this.setState({
                doubleBeds: this.state.doubleBeds + 1
            })
            return;
        }
        if (select === 4 && operator === "-" && this.state.doubleBeds > 0){
            this.setState({
                doubleBeds: this.state.doubleBeds - 1
            })
            return;
        }
        else if (select === 4 && this.state.singleBeds <= 0)
        {
            toast.dark("This is not a possible amount!");
            return;
        }


        if (select === 5 && operator === "+"){
            this.setState({
                singleBeds: this.state.singleBeds + 1
            })
            return;
        }
        if (select === 5 && operator === "-" && this.state.singleBeds > 0){
            this.setState({
                singleBeds: this.state.singleBeds - 1
            })
            return;
        }
        else if (select === 5 || this.state.singleBeds <= 0)
        {
            toast.dark("This is not a possible amount!");
            return;
        }

        if (select === 6 && operator === "+"){
            this.setState({
                bathrooms: this.state.bathrooms + 1
            })
            return;
        }
        if (select === 6 && operator === "-" && this.state.bathrooms > 1){
            this.setState({
                bathrooms: this.state.bathrooms - 1
            })
            return;
        }
        else if (select === 6 && this.state.bathrooms <= 1)
        {
            toast.dark("Your place must contains at least one bathroom!");
            return;
        }


        if (select === 7 && operator === "+"){
            this.setState({
                showers: this.state.showers + 1
            })
            return;
        }
        if (select === 7 && operator === "-" && this.state.showers > 1){
            this.setState({
                showers: this.state.showers - 1
            })
            return;
        }
        else if (select === 7 && this.state.showers <= 1)
        {
            toast.dark("Your place must contains at least one shower!");
            return;
        }

    }
    render() { 
        return ( 
            <React.Fragment>
                <Modal.Header closeButton={true}>
                    <h4>Facilities</h4>
                </Modal.Header>
                <Modal.Body>
                    <div className="amentities-main">
                        <ToastContainer />
                        <div className="amentities-options">
                            <div className="amentities-option mb-4 row">
                                <b className="col">Normal capacity</b>
                                <div className="col d-flex flex-row amentities-counter justify-content-xl-around">
                                    <img name="normalCapacity" onClick={(select, operator)=>this.handleCounter(1,"-")} className="" alt="minus icon" src={minusImg} />
                                    <div className="amentities-counter-number pl-4 pr-4">{this.state.normalCapcityCounter}</div>
                                    <img name="normalCapacity" onClick={(select, operator)=>this.handleCounter(1,"+")} className="" alt="plus icon" src={plusImg} />
                                </div>
                            </div>

                            <div className="amentities-option mb-4 row">
                                <b className="col">Maximum capacity</b>
                                <div className="col d-flex flex-row amentities-counter justify-content-xl-around">
                                    <img name="normalCapacity" onClick={(select, operator)=>this.handleCounter(2,"-")} className="" alt="minus icon" src={minusImg} />
                                    <div className="amentities-counter-number pl-4 pr-4">{this.state.maximumCapacity}</div>
                                    <img name="normalCapacity" onClick={(select, operator)=>this.handleCounter(2,"+")} className="" alt="plus icon" src={plusImg} />
                                </div>
                            </div> 

                            <div className="amentities-option mb-4 row">
                                <b className="col">Number of bedrooms</b>
                                <div className="col d-flex flex-row amentities-counter justify-content-xl-around">
                                    <img name="normalCapacity" onClick={(select, operator)=>this.handleCounter(3,"-")} className="" alt="minus icon" src={minusImg} />
                                    <div className="amentities-counter-number pl-4 pr-4">{this.state.bedrooms}</div>
                                    <img name="normalCapacity" onClick={(select, operator)=>this.handleCounter(3,"+")} className="" alt="plus icon" src={plusImg} />
                                </div>
                            </div> 

                            <div className="amentities-option mb-4 row">
                                <b className="col">Number of double beds</b>
                                <div className="col d-flex flex-row amentities-counter justify-content-xl-around">
                                    <img name="normalCapacity" onClick={(select, operator)=>this.handleCounter(4,"-")} className="" alt="minus icon" src={minusImg} />
                                    <div className="amentities-counter-number pl-4 pr-4">{this.state.doubleBeds}</div>
                                    <img name="normalCapacity" onClick={(select, operator)=>this.handleCounter(4,"+")} className="" alt="plus icon" src={plusImg} />
                                </div>
                            </div> 

                            <div className="amentities-option mb-4 row">
                                <b className="col">Number of single beds</b>
                                <div className="col d-flex flex-row amentities-counter justify-content-xl-around">
                                    <img name="normalCapacity" onClick={(select, operator)=>this.handleCounter(5,"-")} className="" alt="minus icon" src={minusImg} />
                                    <div className="amentities-counter-number pl-4 pr-4">{this.state.singleBeds}</div>
                                    <img name="normalCapacity" onClick={(select, operator)=>this.handleCounter(5,"+")} className="" alt="plus icon" src={plusImg} />
                                </div>
                            </div>

                            
                            <div className="amentities-option mb-4 row">
                                <b className="col">Number of bathrooms</b>
                                <div className="col d-flex flex-row amentities-counter justify-content-xl-around">
                                    <img name="normalCapacity" onClick={(select, operator)=>this.handleCounter(6,"-")} className="" alt="minus icon" src={minusImg} />
                                    <div className="amentities-counter-number pl-4 pr-4">{this.state.bathrooms}</div>
                                    <img name="normalCapacity" onClick={(select, operator)=>this.handleCounter(6,"+")} className="" alt="plus icon" src={plusImg} />
                                </div>
                            </div>   

                            <div className="amentities-option mb-4 row">
                                <b className="col">Numebr of showers</b>
                                <div className="col d-flex flex-row amentities-counter justify-content-xl-around">
                                    <img name="normalCapacity" onClick={(select, operator)=>this.handleCounter(7,"-")} className="" alt="minus icon" src={minusImg} />
                                    <div className="amentities-counter-number pl-4 pr-4">{this.state.showers}</div>
                                    <img name="normalCapacity" onClick={(select, operator)=>this.handleCounter(7,"+")} className="" alt="plus icon" src={plusImg} />
                                </div>
                            </div> 

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Link to={'/hosting/addaccommodation/details/'}>
                        <button className={'btn btn-outline-secondary'}>back</button>
                    </Link>
                    <Link to={'/hosting/addaccommodation/facilities/'}>
                        <button className={'ml-auto btn btn-outline-primary'}>next</button>
                    </Link>
                </Modal.Footer>
            </React.Fragment>
         );
    }
}
 
export default Amentities;