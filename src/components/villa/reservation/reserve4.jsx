import React, { Component } from 'react';
import './reserve.css';
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import { Modal, ModalFooter, ModalHeader} from "react-bootstrap";
import {Form} from "react-bootstrap";
import { DatePicker, Space } from 'antd';
import {STORAGE_KEY} from "../../constants";


const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const { size } = 20;
const now = new Date();

class Reserve2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            invalidNationalCode: false,
            nationalCode:null,
            disableBtn: true
        }
    }

    componentDidMount = () =>{
        document.addEventListener(STORAGE_KEY+'screen-size-changed', (event) => this.setState({size: event.detail}));
    }

    handleSubmit = () =>{
        document.getElementById("goToReserve3").click();
        let dataIsValid = false;
        let nationalCode = document.getElementById("reserve-nationalCode").value;
        if (!nationalCode){
            this.setState({invalidNationalCode: true});
        }else if(nationalCode){
            this.setState({invalidNationalCode: false});
            dataIsValid = true;
        }
    }
    exit()
    {
        document.getElementById('redirect-to-villa-profile').click()
    }

    handleChange = (e) =>{
        console.log("hi")
        if (e.target.name === "nationalCode" && (e.target.value.length === 10)){
            this.setState({nationalCode: e.target.value, invalidNationalCode: false, disableBtn: false})
        }
        else if(e.target.name === "nationalCode" && (e.target.value.length > 10 || e.target.value.length < 10)){
            this.setState({nationalCode: e.target.value, invalidNationalCode: true, disableBtn: true})
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div>
                    <Link className={'display-none'} to="/villa/villaProfile"  id={'redirect-to-villa-profile'}/>
                    <Modal.Header closeButton={true}>
                        <div>
                            <h4>
                                Landlord information
                            </h4>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <div className="reserve-nationalCode">
                                <div>
                                    <div>
                                        <label>First name : </label>
                                        <b> {this.props.placeOwner}</b>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label>Phone number : </label>
                                        <b> {this.props.ownerPhoneNumber}</b>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label>Place full address : </label>
                                        <b> {this.props.fullAddress}</b>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Modal.Body>
                </div>
                <Modal.Footer>
                        <Link to={'/villa/villaProfile/reserve/1/'} >
                            <button className={'ml-auto btn btn-outline-secondary'}>Back</button>
                        </Link>
                        <button disabled={this.state.disableBtn} onClick={this.handleSubmit} className={'ml-auto btn btn-outline-primary'}>Next</button>
                        <Link id="goToReserve3" className="display-none" to={'/villa/villaProfile/reserve/3/'}>

                        </Link>
                </Modal.Footer>
            </React.Fragment>

         );
    }
}
 
export default Reserve2;