import React, { Component } from 'react';
import './reserve.css';
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import { Modal, ModalFooter, ModalHeader} from "react-bootstrap";
import {Form} from "react-bootstrap";
import { DatePicker, Space } from 'antd';
import {STORAGE_KEY} from "../../constants";
import { ToastContainer, toast } from 'react-toastify';

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
        }
    }

    componentDidMount = () =>{
        document.addEventListener(STORAGE_KEY+'screen-size-changed', (event) => this.setState({size: event.detail}));
    }

    handleSubmit = () =>{
        toast.success("you have reserved your villa, we wish you a good trip")
        this.props.exit();

    }

    render() { 
        return ( 
            <React.Fragment>
                <div>
                    <ToastContainer/>
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
                                <label style={{color: "red"}} className="form-label" htmlFor="reserve-nationalCode">Keep this information </label>
                            </div>
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
                        <Link to={'/villa/villaProfile/reserve/3/'} >
                            <button className={'ml-auto btn btn-outline-secondary'}>Back</button>
                        </Link>
                        <button onClick={this.handleSubmit} className={'ml-auto btn btn-outline-primary'}>I am keeping this information</button>
                        <Link id="goToReserve3" className="display-none" to={'/villa/villaProfile/reserve/final/'}>

                        </Link>
                </Modal.Footer>
            </React.Fragment>

         );
    }
}
 
export default Reserve2;