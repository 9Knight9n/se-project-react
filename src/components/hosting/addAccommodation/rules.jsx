import React, { Component } from 'react';
import './rules.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal} from "react-bootstrap";
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import {Form} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';

class rules extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rule1state: false,
            rule2state: false,
            rule3state: false,
            rule4state: false,
            rule5state: false,
            rule6state: false,
            rule7state: false,
            rule8state: false,
            rule9state: false,
        };

    }

    componentDidMount (){
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let dataIsValid = true;

    }

    handleChange = (e) => {

        if (e.target.name === "rule1"){
            this.setState({rule1state : e.target.checked})
            console.log("rule 1 : " + e.target.checked)
        }
        if (e.target.name === "rule2"){
            this.setState({rule2state : e.target.checked})
            console.log("rule 2 : " + e.target.checked)
        }
        if (e.target.name === "rule3"){
            this.setState({rule3state : e.target.checked})
            console.log("rule 3 : " + e.target.checked)
        }
        if (e.target.name === "rule4"){
            this.setState({rule4state : e.target.checked})
            console.log("rule 4 : " + e.target.checked)
        }
        if (e.target.name === "rule5"){
            this.setState({rule5state : e.target.checked})
            console.log("rule 5 : " + e.target.checked)
        }
        if (e.target.name === "rule6"){
            this.setState({rule6state : e.target.checked})
            console.log("rule 6 : " + e.target.checked)
        }
        if (e.target.name === "rule7"){
            this.setState({rule7state : e.target.checked})
            console.log("rule 7 : " + e.target.checked)
        }
        if (e.target.name === "rule8"){
            this.setState({rule8state : e.target.checked})
            console.log("rule 8 : " + e.target.checked)
        }
        if (e.target.name === "rule9"){
            this.setState({rule9state : e.target.checked})
            console.log("rule 9 : " + e.target.checked)
        }

    }
    render() { 
        return ( 
            <React.Fragment>
                <Modal.Header closeButton={true}>
                    <h4>Place rules</h4>
                </Modal.Header>
                <Modal.Body>
                    <div className="rules-main">
                        <b>Check the rules which need to be followed.</b>
                        <div className="rules-form mt-2">
                                <Form>
                                    <div className="rules-smoke">
                                        <div className="form-group">
                                            <div className="input-group">
                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check checked={this.state.rule1state} name="rule1" onChange={this.handleChange} type="checkbox" label="Smoking is not allowed in this place" />
                                            </Form.Group>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rules-pet">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check checked={this.state.rule2state} name="rule2" onChange={this.handleChange} type="checkbox" label="Pets are not allowed in this villa" />
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </div>

                                        <div className="rules-capacity">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <Form.Group controlId="formBasicCheckbox">
                                                        <Form.Check checked={this.state.rule3state} name="rule3" onChange={this.handleChange} type="checkbox" label="You can not invite more people than the maximum capacity" />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rules-lost">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <Form.Group controlId="formBasicCheckbox">
                                                        <Form.Check checked={this.state.rule4state} name="rule4" onChange={this.handleChange} type="checkbox" label="We have no responsibility for lost property" />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rules-family">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <Form.Group controlId="formBasicCheckbox">
                                                        <Form.Check checked={this.state.rule5state} name="rule5" onChange={this.handleChange} type="checkbox" label="This place is rented only to the family" />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rules-damage">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <Form.Group controlId="formBasicCheckbox">
                                                        <Form.Check checked={this.state.rule6state} name="rule6" onChange={this.handleChange} type="checkbox" label="In case of damage to the place, you will be compensated" />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rules-parking">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <Form.Group controlId="formBasicCheckbox">
                                                        <Form.Check checked={this.state.rule7state} name="rule7" onChange={this.handleChange} type="checkbox" label="You are only allowed to park a car in the parking lot" />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rules-garbage">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <Form.Group controlId="formBasicCheckbox">
                                                        <Form.Check checked={this.state.rule8state} name="rule8" onChange={this.handleChange} type="checkbox" label="You are not allowed to put garbage in the yard or in the alley and it should be put in the trash." />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rules-cleaning">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <Form.Group controlId="formBasicCheckbox">
                                                        <Form.Check checked={this.state.rule9state}  name="rule9" onChange={this.handleChange} type="checkbox" label="The responsibility of cleaning the place is with you and no one is intended for this action" />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </div>
                                </Form>
                        </div>
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                        <Link to={'/hosting/addaccommodation/details/'} >
                            <button className={'ml-auto btn btn-outline-secondary'}>Back</button>
                        </Link>
                        <button onClick={this.handleSubmit} className={'ml-auto btn btn-outline-primary'}>Next</button>
                        <Link id="goToAmentities" className="display-none" to={'/hosting/addaccommodation/amentities/'}>

                        </Link>
                </Modal.Footer>
            </React.Fragment>
         );
    }
}
 
export default rules;