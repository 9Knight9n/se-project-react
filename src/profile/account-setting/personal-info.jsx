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
        }; 

    }



    handleSubmit = () =>{
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

                <hr className="personalInfo-line"/>
                <form className="row g-3 needs-validation" novalidate>
                    <div className="personalInfo-form w-100 ml-4 mt-4">
                        <div className="firstName mb-2">
                                <label className="form-label" for="personalInfo-firstName">First Name :</label>
                                <input className="form-control" name="firstName" value={this.state.firstName} onChange={this.handleChange} id="personalInfo-firstName" required/>
                                {this.state.firstNameValidationError? 
                                    <div className="invalid-feedback">
                                    Please enter your firstName
                                    </div>:
                                    <div className="valid-feedback">
                                    Looks good!
                                    </div>
                                }


                        </div>

                        <hr className="personalInfo-line"/>

                        <div className="personalInfo-lastName mb-2">
                                <label className="form-label" for="personalInfo-lastName">Last Name :</label>
                                <input className="form-control" name="lastName" value={this.state.lastName} onChange={this.handleChange} id="personalInfo-lastName" required/>
                                {this.state.lastNameValidationError? 
                                    <div className="invalid-feedback">
                                    Please enter your lastName
                                    </div>:
                                    <div className="valid-feedback">
                                    Looks good!
                                    </div>
                                }
                        </div>

                        <hr className="personalInfo-line mb-2"/>

                        <div className="personalInfo-nationalId">
                            <label className="form-label" for="personalInfo-nationalId">National Code :</label>
                            <input className="form-control" name="nationalId" value={this.state.nationalId} onChange={this.handleChange} id="personalInfo-nationalId" required/>
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
                            <label for="personalInfo-phoneNum" className="form-label col-2">Phone Number :</label>
                            <div className="col-8">
                            <PhoneInput
                            id="personalInfo-phoneNum"
                            country={'us'}
                            onChange={phone => this.setState({ phoneNum: phone })}
                            required
                            className="form-control"
                            />
                            </div>
                            {this.state.phoneValidationError ?
                                <div class="valid-feedback">
                                Looks good!
                                </div>:
                                <div class="invalid-feedback">
                                Please enter your phone number
                                </div>
                            }
  
                            {/* <input name="phoneNum" value={this.state.phoneNum} onChange={this.handleChange} id="phone" /> */}

                        </div>

                        <hr className="personalInfo-line"/>

                        <div className="personalInfo-emailId mb-2">
                            <label for="personalInfo-emailId" className="form-label">Email :</label>
                            <input name="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="personalInfo-emailId" required/>
                            {this.state.emailValidationError? 
                                <div className="invalid-feedback">
                                Please enter valid email
                                </div> :
                                <div className="valid-feedback">
                                Looks good!
                                </div>
                            }


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