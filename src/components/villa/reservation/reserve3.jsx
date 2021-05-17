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
            disableBtn: true,
            noteRead: false,
        }
    }

    componentDidMount = () =>{
        document.addEventListener(STORAGE_KEY+'screen-size-changed', (event) => this.setState({size: event.detail}));
    }

    handleSubmit = () =>{
        let dataIsValid = false;
        document.getElementById("goToReserve4").click();
        if (this.state.noteRead){
            dataIsValid = true;
        }
    }

    handleChange = (e) =>{
        if (e.target.name === "noteRead"){
            console.log(e.target.checked)
            this.setState({noteRead : e.target.checked})
            if (e.target.checked){
                this.setState({disableBtn: false})
            }
            if (!e.target.checked){
                this.setState({disableBtn: true})
            }
        }
    }
    exit()
    {
        document.getElementById('redirect-to-villa-profile').click()
    }

    render() { 
        return ( 
            <React.Fragment>
                <div>
                    <Link className={'display-none'} to="/villa/villaProfile"  id={'redirect-to-villa-profile'}/>
                    <Modal.Header closeButton={true}>
                        <div>
                            <h4>
                                Important note
                            </h4>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <div className="reserve-note">
                                {/* <div className="reserve-note-label">
                                    <label>Read this : </label>
                                </div> */}
                                <p>
                                    By booking a place, we provide your information to the landlord which contains : 
                                    <br />
                                    <b className="reserve-note-b"> First name </b>, 
                                    <b className="reserve-note-b"> Last name </b>,
                                    <b className="reserve-note-b"> national code </b>,
                                    <b className="reserve-note-b"> Phone number </b>,
                                    <br />
                                    Also, we provide landlord information to you which contains : 
                                    <br />
                                    <b className="reserve-note-b"> First name </b>, 
                                    <b className="reserve-note-b"> Last name </b>,
                                    <b className="reserve-note-b"> Phone number </b>,
                                    <br />
                                    So you can verify each other's identities and make minor adjustments. 
                                    <br />
                                    <br />
                                    <p className="reserve-important-note">
                                        <label>*Note 1: </label>
                                        <b> National card is required when entering the place</b>
                                        <br />
                                        <br />
                                        <label>*Note 2: </label>
                                        <b> By booking this place you are accepting SweetHome and landlord rules.</b>
                                        <br />
                                        <br />
                                        <label>*Note 3: </label>
                                        <b> The consequences of not following the rules are your responsibility.</b>
                                    </p>
                                </p>
                                <div className="form-group mt-auto">
                                    <div className="input-group">
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check checked={this.state.noteRead} name="noteRead" onChange={this.handleChange} type="checkbox" label="I have read and understood the note." />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Modal.Body>
                </div>
                <Modal.Footer>
                        <Link to={'/villa/villaProfile/reserve/2/'} >
                            <button className={'ml-auto btn btn-outline-secondary'}>Back</button>
                        </Link>
                        <button disabled={this.state.disableBtn} onClick={this.handleSubmit} className={'ml-auto btn btn-outline-primary'}>Book</button>
                        <Link id="goToReserve4" className="display-none" to={'/villa/villaProfile/reserve/4/'}>

                        </Link>
                </Modal.Footer>
            </React.Fragment>

         );
    }
}
 
export default Reserve2;