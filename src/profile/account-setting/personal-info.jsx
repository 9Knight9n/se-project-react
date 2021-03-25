import React, { Component } from 'react';
import { BsPeopleCircle } from "react-icons/bs";
import { IconContext } from "react-icons";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './personal-info.css';
import * as EmailValidator from 'email-validator';
import "react-datepicker/dist/react-datepicker.css";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Form, Modal, Spinner} from "react-bootstrap";
import { isPossiblePhoneNumber } from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input';
class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageCount: 0,
            charsPerPage: 1,
            bio: "",
            firstName: "",
            lastName:"",
            nationalId: "",
            gender: "",
            dateOfBirth: "",
            phoneNum: "",
            email: "",
            emailValidationError: false,
            firstNameValidationError: false,
            lastNameValidationError: false,
            phoneValidationError: false,
            invalidPhoneNum: false,
        }; 

    }



    handleSubmit = () =>{
        if (isPossiblePhoneNumber(this.state.phoneNum) === true  && isValidPhoneNumber(this.state.phoneNum)) {

        }
        if (this.state.email.length === 0 || !this.emailValidation()) {

            this.setState({emailValidationError: true});
            return(this.state.emailValidationError)
        }
        if (this.state.firstName.length === 0) {
            this.setState({firstNameValidationError: true});
            return(this.state.firstNameValidationError)
        }
        if (this.state.lastName.length === 0) {
            this.setState({lastNameValidationError: true});
            return(this.state.lastNameValidationError)
        }
        if (this.state.phoneNum.length === 0) {
            this.setState({phoneValidationError: true});
            return(this.state.phoneValidationError)
        }
    }

    emailValidation = () =>{
        var validator = require("email-validator");
        // true
       return (validator.validate(this.state.emailSignUp));
    }

    handleChange = (e) => { 
        let target=e.target;
        let name = target.name;
        let value = target.value
        this.setState({
         [name]: value
        });
        if (name === "bio"){
         let currentText = e.target.value;
         //Now we need to recalculate the number of characters that have been typed in so far
         let characterCount = currentText.length;
         let charsPerPageCount = this.state.charsPerPage;
         let unitCount = Math.round(characterCount/charsPerPageCount);
         this.setState({pageCount: unitCount});
        }
   }

    render() { 
        return ( 
            <div className="personalInfo-main">
                <div className="personalInfo-avatar ml-4 mt-4">
                    <IconContext.Provider value={{ color: "black", size:100,  }}>
                        <div>
                            <BsPeopleCircle />
                        </div>
                    </IconContext.Provider>
                    
                </div>

                {/* <Form>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="text-primary input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                         fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                        <path
                                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                                    </svg>
                                </span>
                            </div>
                            <Form.Control
                                id={"email-input"}
                                className="form-control shadow-none"
                                type="email"
                                required
                                isInvalid={true}
                                placeholder="Email"/>
                                <Form.Control.Feedback type="invalid" className={"ml-1"}>
                                    Email is invalid!
                                </Form.Control.Feedback>
                        </div>
                    </div>
                </Form> */}

                <hr className="personalInfo-line"/>
                <form className="row g-3 needs-validation" novalidate>
                    <div className="personalInfo-form w-100 ml-4 mt-4">
                        <div className="firstName mb-2 row">
                                <label className="form-label col-2" for="personalInfo-firstName">First Name :</label>
                                <div className="form-group col-10">
                                    <div className="input-group">
                                        <Form.Control
                                            onChange={this.handleChange}
                                            id="personalInfo-firstName"
                                            className="form-control shadow-none"
                                            type="text"
                                            required
                                            name="firstName"
                                            value={this.state.firstName}
                                            isInvalid={true}
                                            />
                                            <Form.Control.Feedback type="invalid" className={"ml-1"}>
                                                Email is invalid!
                                            </Form.Control.Feedback>
                                    </div>
                                </div>
                                {/* <input className="form-control" name="firstName" value={this.state.firstName} onChange={this.handleChange} id="personalInfo-firstName" required/> */}


                        </div>

                        <hr className="personalInfo-line"/>

                        <div className="personalInfo-lastName mb-2 row">
                                <label className="form-label col-md-2 col-sm-1" for="personalInfo-lastName">Last Name :</label>
                                <div className="form-group col-md-10 col-sm-11">
                                    <div className="input-group">
                                        <Form.Control
                                            onChange={this.handleChange}
                                            id="personalInfo-lastName"
                                            className="form-control shadow-none"
                                            type="text"
                                            required
                                            name="lastName"
                                            value={this.state.lastName}
                                            isInvalid={true}
                                            />
                                            <Form.Control.Feedback type="invalid" className={"ml-1"}>
                                                Email is invalid!
                                            </Form.Control.Feedback>
                                    </div>
                                </div>
                        </div>

                        <hr className="personalInfo-line mb-2"/>

                        <div className="personalInfo-nationalId row">
                            <label className="form-label col-md-2 col-sm-1" for="personalInfo-nationalId">National Code :</label>
                                <div className="form-group col-md-10 col-sm-11">
                                    <div className="input-group">
                                        <Form.Control
                                            onChange={this.handleChange}
                                            id="personalInfo-nationalId"
                                            className="form-control shadow-none"
                                            type="text"
                                            required
                                            name="nationalId"
                                            value={this.state.nationalId}
                                            isInvalid={false}
                                            />
                                            <Form.Control.Feedback type="invalid" className={"ml-1"}>
                                                Email is invalid!
                                            </Form.Control.Feedback>
                                    </div>
                                </div>
                        </div>

                        <hr className="personalInfo-line"/>

                        <div className="personalInfo-Gender mb-2">
                            <label className="form-label" for="personalInfo-Gender">Gender :</label>
                            <select className="form-select" name="gender" value={this.state.gender} onChange={this.handleChange} id="personalInfo-Gender" required>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <hr className="personalInfo-line"/>

                        <div className="personalInfo-dateOfBirth mb-2">
                            <label className="form-label" for="date">Date Of Birth :</label>
                            <form noValidate>
                                <TextField
                                    id="date"
                                    type="date"
                                    defaultValue="2021-03-24"
                                    className="dateOfBirth-field"
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                            </form>
                            {/* <input name="dateOfBirth" value={this.state.dateOfBirth} onChange={this.handleChange} id="birth"/> */}
                        </div>

                        <hr className="personalInfo-line"/>

                        <div className="personalInfo-phoneNum mb-2 row">
                            <label for="personalInfo-phoneNum" className="form-label col-md-2 col-sm-1">Phone Number :</label>
                            <div className="form-group col-md-10 col-sm-11">
                                <div className="input-group">
                                    <div className="input-group-prepend" style={{width:"inherit"}}>
                                        <span className="input-group-btn">
                                            <PhoneInput
                                                onChange={this.handleChange}
                                                country="us"
                                                // country={'ir'}
                                                // enableSearch={true}
                                                // disableSearchIcon={true}
                                                value={this.state.phoneNum}
                                                inputProps={
                                                    {
                                                        id:"phonenumber-input",
                                                        required:true,
                                                        type:"phone-number",
                                                        className:("form-control shadow-none".concat(this.state.isInvalid3?" not-valid":"")),
                                                        style:{width:"inherit",borderRadius:"5px 0 0 5px"},
                                                        name:"phoneNum",
                                                    }
                                                }
                                            />
                                        </span>
                                    </div>
                                    {this.state.invalidPhoneNum?
                                    <div >
                                        <small id="passwordHelp" className="text-danger">
                                            Must be 11 digit long.
                                        </small>
                                    </div>:""}
                                </div>
                            </div>
                        </div>
                        <hr className="personalInfo-line"/>

                        <div className="personalInfo-emailId row mb-2">
                            <label for="personalInfo-emailId" className="form-label col-md-2 col-sm-1">Email :</label>
                                <div className="form-group col-md-10 col-sm-11">
                                    <div className="input-group">
                                        <Form.Control
                                            onChange={this.handleChange}
                                            id="personalInfo-emailId"
                                            className="form-control shadow-none"
                                            type="text"
                                            required
                                            name="email"
                                            value={this.state.email}
                                            isInvalid={true}
                                            />
                                            <Form.Control.Feedback type="invalid" className={"ml-1"}>
                                                Email is invalid!
                                            </Form.Control.Feedback>
                                    </div>
                                </div>


                            {/* <div>
                                {this.state.emailValidationError? <div>{this.state.emailValidationMsg}</div> : ''}
                            </div> */}
                        </div>

                        <hr className="personalInfo-line"/>

                        <div className="personalInfo-bioField">
                            <label className="form-lable" for="bio">Bio :</label>
                            <textarea id="ptextArea" name="bio" className="bio form-control" value={this.state.bio} onChange={this.handleChange} maxlength="175">
                                    
                            </textarea>
                            <div className="personalInfo-textAreaCounter">
                                {this.state.pageCount} of 175
                            </div>
                        </div>
                        <div className="personalInfo-btn mb-2 mt-2 row">
                            <div className="submitBtn mb-2 col">
                                <button onClick={this.handleSubmit}>Submit</button>
                            </div>
                            <div className="cancelBtn col">
                                <button>Cancel</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default PersonalInfo;