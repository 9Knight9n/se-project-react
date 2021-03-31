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
import {validateEmail} from '../../util';
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
        let phonenumber = document.getElementById("personalInfo-phoneNum").value;
        let firstName = document.getElementById("personalInfo-firstName").value;
        let lastName = document.getElementById("personalInfo-lastName").value;
        let nationalId = document.getElementById("personalInfo-nationalId").value;
        let dateOfBirth = document.getElementById("personalInfo-dateOfBirth").value;
        let emailId = document.getElementById("personalInfo-emailId").value;
        let ptextArea = document.getElementById("ptextArea").value;
        if ( !isPossiblePhoneNumber(phonenumber)  || !isValidPhoneNumber(phonenumber) || phonenumber.length === 0) {
            this.setState({
                invalidPhoneNum: true,
            })
        }
        else{
            this.setState({
                invalidPhoneNum: false,
            })
        }
        if (!validateEmail(emailId) || emailId.length === 0) {
            this.setState({emailValidationError: true});
        }
        else{
            this.setState({emailValidationError: false});
        }

        if (firstName.length === 0) {
            this.setState({firstNameValidationError: true});
        }
        else{
            this.setState({firstNameValidationError: false});
        }

        if (lastName.length === 0) {
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
        console.log("entered handle change")
        console.log("eeeee : " + e)
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
        console.log("value : " + value)
   }

    render() { 
        return ( 
            <div className="personalInfo-main">
                {this.state.toast? <ToastContainer />: ""}
                <div className="personalInfo-avatar mt-4 mb-4">
                    <IconContext.Provider value={{ color: "black", size:100,  }}>
                        <div>
                            <BsPeopleCircle />
                        </div>
                    </IconContext.Provider>
                
                </div>

                <form className="row">
                    <div className="personalInfo-form w-100 ml-5 mt-4">
                        <div className="firstName row">
                                <label className="form-label col-lg-2 col-md-1 col-sm-1" for="personalInfo-firstName">First Name :</label>
                                <div className="form-group col-lg-10 col-md-11 col-sm-11">
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

                        <hr className="personalInfo-line p-2"/>

                        <div className="personalInfo-lastName row">
                                <label className="form-label col-lg-2 col-md-1 col-sm-1" for="personalInfo-lastName">Last Name :</label>
                                <div className="form-group col-lg-10 col-md-11 col-sm-11">
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

                        <hr className="personalInfo-line p-2 "/>

                        <div className="personalInfo-nationalId row">
                            <label className="form-label col-lg-2 col-md-1 col-sm-1" for="personalInfo-nationalId">National Code :</label>
                                <div className="form-group col-lg-10 col-md-11 col-sm-11">
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

                        <hr className="personalInfo-line p-2"/>

                        <div className="personalInfo-Gender ">
                            <div className="row">
                                <label className="form-label col-lg-2 col-md-1 col-sm-1" for="personalInfo-Gender">Gender :</label>
                                <div className="form-select form-group col-lg-10 col-md-11 col-sm-11">
                                    <select className="" name="gender" value={this.state.gender} onChange={this.handleChange} id="personalInfo-Gender" required>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <hr className="personalInfo-line p-2"/>

                        <div className="personalInfo-dateOfBirth row">
                            <label className="form-label col-lg-2 col-md-1 col-sm-1" for="personalInfo-dateOfBirth">Date Of Birth :</label>
                            <div className="form-group col-lg-10 col-md-11 col-sm-11">
                                <TextField
                                    id="personalInfo-dateOfBirth"
                                    type="date"
                                    defaultValue="2021-03-24"
                                    className="dateOfBirth-field"
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                            </div>
                        </div>

                        <hr className="personalInfo-line p-2"/>

                        <div className="personalInfo-phoneNum row">
                            <label for="personalInfo-phoneNum" className="form-label col-lg-2 col-md-1 col-sm-1">Phone Number :</label>
                            <div className="form-group col-lg-10 col-md-11 col-sm-11">
                                <div className="input-group">
                                    <div className="input-group-prepend" style={{width:"inherit"}}>
                                        <span className={"input-group-btn".concat(this.state.invalidPhoneNum?" flag-warn":"")}>
                                            <PhoneInput
                                                country="us"
                                                // country={'ir'}
                                                // enableSearch={true}
                                                // disableSearchIcon={true}
                                                value={this.state.phoneNum}
                                                inputProps={
                                                    {
                                                        id:"personalInfo-phoneNum",
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

                        <hr className="personalInfo-line p-2"/>

                        <div className="personalInfo-emailId row ">
                            <label for="personalInfo-emailId" className="form-label col-lg-2 col-md-1 col-sm-1">Email :</label>
                                <div className="form-group col-lg-10 col-md-11 col-sm-11">
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

                        <hr className="personalInfo-line p-2"/>

                        <div className="personalInfo-bioField row">
                            <label className="form-lable col-lg-2 col-md-1 col-sm-1" for="bio">Bio :</label>
                            <div className="form-group col-lg-10 col-md-11 col-sm-11">
                                <textarea id="ptextArea" name="bio" className="bio form-control" value={this.state.bio} onChange={this.handleChange} maxlength="200">
                                            
                                </textarea>
                            </div>
                            <div className="personalInfo-textAreaCounter">
                                {this.state.pageCount} of 200
                            </div>
                        </div>
                        <div className="personalInfo-btn mb-2 mt-5 row">
                            <div className="submitBtn mb-2 col-6">
                                <button onClick={this.handleSubmit}>Submit</button>
                            </div>
                            <div className="resetBtn mb-2 col-6">
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