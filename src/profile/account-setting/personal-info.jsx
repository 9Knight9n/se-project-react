import React, { Component } from 'react';
import { BsPeopleCircle } from "react-icons/bs";
import { IconContext } from "react-icons";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './personal-info.css';
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@material-ui/core/TextField';
import {Form, Modal, Spinner, ToastHeader} from "react-bootstrap";
import { isPossiblePhoneNumber } from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import {validateEmail} from '../../utill/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
            invalidPhoneNum: false,
            toast: false,
        };
        this.baseState = this.state  

    }



    handleSubmit = (event) =>{
        event.preventDefault();
        if ( (isPossiblePhoneNumber(this.state.phoneNum)  && isValidPhoneNumber(this.state.phoneNum)) || this.state.phoneNum.length === 0) {
            this.setState({
                invalidPhoneNum: true,
            })
        }
        else{
            this.setState({
                invalidPhoneNum: false,
            })
        }
        if (validateEmail(this.state.email) || this.state.email.length === 0) {
            this.setState({emailValidationError: true});
        }
        else{
            this.setState({emailValidationError: false});
        }

        if (this.state.firstName.length === 0) {
            this.setState({firstNameValidationError: true});
        }
        else{
            this.setState({firstNameValidationError: false});
        }

        if (this.state.lastName.length === 0) {
            this.setState({lastNameValidationError: true});
        }
        else{
            this.setState({lastNameValidationError: false});
        }
    }

    handleReset = () =>{
        this.setState(this.baseState)
    }

    handleChange = (e) => { 
        console.log("jijijijiji")
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
                {this.state.toast? <ToastContainer />: ""}
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
                        <div className="firstName row">
                                <label className="form-label col-2" for="personalInfo-firstName">First Name :</label>
                                <div className="form-group col-10">
                                    <div className="input-group">
                                        <Form.Control
                                            onChange={this.handleChange}
                                            id="personalInfo-firstName"
                                            className="form-control shadow-none"
                                            type="text"
                                            name="firstName"
                                            value={this.state.firstName}
                                            isInvalid={this.state.firstNameValidationError}
                                            />
                                            <Form.Control.Feedback type="invalid" className={"ml-1"}>
                                            You must enter your first name!
                                            </Form.Control.Feedback>
                                    </div>
                                </div>
                                {/* <input className="form-control" name="firstName" value={this.state.firstName} onChange={this.handleChange} id="personalInfo-firstName" required/> */}


                        </div>

                        <hr className="personalInfo-line"/>

                        <div className="personalInfo-lastName row">
                                <label className="form-label col-md-2 col-sm-1" for="personalInfo-lastName">Last Name :</label>
                                <div className="form-group col-md-10 col-sm-11">
                                    <div className="input-group">
                                        <Form.Control
                                            onChange={this.handleChange}
                                            id="personalInfo-lastName"
                                            className="form-control shadow-none"
                                            type="text"
                                            name="lastName"
                                            value={this.state.lastName}
                                            isInvalid={this.state.lastNameValidationError}
                                            />
                                            <Form.Control.Feedback type="invalid" className={"ml-1"}>
                                                You must enter your last name!
                                            </Form.Control.Feedback>
                                    </div>
                                </div>
                        </div>

                        <hr className="personalInfo-line "/>

                        <div className="personalInfo-nationalId row">
                            <label className="form-label col-md-2 col-sm-1" for="personalInfo-nationalId">National Code :</label>
                                <div className="form-group col-md-10 col-sm-11">
                                    <div className="input-group">
                                        <Form.Control
                                            onChange={this.handleChange}
                                            id="personalInfo-nationalId"
                                            className="form-control shadow-none"
                                            type="text"
                                            name="nationalId"
                                            value={this.state.nationalId}
                                            isInvalid={false}
                                            />
                                            <Form.Control.Feedback type="invalid" className={"ml-1"}>
                                                national id is invalid!
                                            </Form.Control.Feedback>
                                    </div>
                                </div>
                        </div>

                        <hr className="personalInfo-line"/>

                        <div className="personalInfo-Gender ">
                            <label className="form-label" for="personalInfo-Gender">Gender :</label>
                            <select className="form-select" name="gender" value={this.state.gender} onChange={this.handleChange} id="personalInfo-Gender" required>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <hr className="personalInfo-line"/>

                        <div className="personalInfo-dateOfBirth row">
                            <label className="form-label col-2" for="date">Date Of Birth :</label>
                            <form className="col-10" noValidate>
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

                        <div className="personalInfo-phoneNum  row">
                            <label for="personalInfo-phoneNum" className="form-label col-md-2 col-sm-1">Phone Number :</label>
                            <div className="form-group col-md-10 col-sm-11">
                                <div className="input-group">
                                    <div className="input-group-prepend" style={{width:"inherit"}}>
                                        <span className={"input-group-btn".concat(this.state.invalidPhoneNum?" flag-warn":"")}>
                                            <PhoneInput
                                                onChange={this.handleChange}
                                                country="us"
                                                // country={'ir'}
                                                // enableSearch={true}
                                                // disableSearchIcon={true}
                                                name="phoneNum"
                                                value={this.state.phoneNum}
                                                inputProps={
                                                    {
                                                        id:"phonenumber-input",
                                                        type:"phone-number",
                                                        className:("form-control shadow-none".concat(this.state.invalidPhoneNum?" not-valid":"")),
                                                        style:{width:"inherit"},
                                                    }
                                                }
                                            />
                                        </span>
                                    </div>
                                    {this.state.invalidPhoneNum?
                                    <div >
                                        <small id="passwordHelp" className="text-danger">
                                            Phone number is invalid!
                                        </small>
                                    </div>:""}
                                </div>
                            </div>
                        </div>
                        <hr className="personalInfo-line"/>

                        <div className="personalInfo-emailId row ">
                            <label for="personalInfo-emailId" className="form-label col-md-2 col-sm-1">Email :</label>
                                <div className="form-group col-md-10 col-sm-11">
                                    <div className="input-group">
                                        <Form.Control
                                            onChange={this.handleChange}
                                            id="personalInfo-emailId"
                                            className="form-control shadow-none"
                                            type="text"
                                            name="email"
                                            value={this.state.email}
                                            isInvalid={this.state.emailValidationError}
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
                        <div className="personalInfo-btn mb-2 mt-5 row">
                            <div className="submitBtn mb-2 col">
                                <button onClick={this.handleSubmit}>Submit</button>
                            </div>
                            <div className="resetBtn col">
                                <button onClick={this.handleReset}>Reset</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default PersonalInfo;