import React, { Component } from 'react';
import { BsPeopleCircle } from "react-icons/bs";
import { IconContext } from "react-icons";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './personal-info.css';
import EmailValidator from 'email-validator';

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
        }; 

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
         if (EmailValidator.validate(target.value) && target.name === "email") {
             this.setState({emailValidationError: true})
            }
        }
        if (target.name == "firstName" && target.value === null){
            this.setState({
                firstNameValidationError: true,
            });
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
                <form class="row g-3 needs-validation" novalidate>
                    <div className="personalInfo-form w-100 ml-4 mt-4">
                        <div className="firstName mb-2">
                                <label for="personalInfo-firstName">First Name :</label>
                                <input name="firstName" className="form-control" id="validationCustom01" value={this.state.firstName} onChange={this.handleChange} id="firstName" required/>
                                {this.firstNameValidationError? 
                                <div className="valid-feedback">
                                Looks good!
                                </div>:
                                <div className="invalid-feedback">
                                    Please enter your firstName
                                </div>
                                }
                        </div>

                        <hr className="personalInfo-line"/>

                        <div className="personalInfo-lastName mb-2">
                                <label for="lastName">Last Name :</label>
                                <input name="lastName" className="form-control" id="validationCustom02" value={this.state.lastName} onChange={this.handleChange} id="lastName" required/>
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback">
                                    Please enter your lastName
                                </div>
                        </div>

                        <hr className="personalInfo-line mb-2"/>

                        <div className="personalInfo-nationalId">
                            <label for="nationalCode">National Code :</label>
                            <input name="nationalId" className="form-control" value={this.state.nationalId} onChange={this.handleChange} id="nationalCode" required/>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                    Please enter your National code
                            </div>
                        </div>

                        <hr className="personalInfo-line"/>

                        <div className="personalInfo-Gender mb-2">
                            <label for="Gender">Gender :</label>
                            <select className="form-select" name="gender" value={this.state.gender} onChange={this.handleChange} id="Gender" required>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please select your Gender
                            </div>
                        </div>

                        <hr className="personalInfo-line"/>

                        <div className="personalInfo-dateOfBirth mb-2">
                            <label for="birth">Date Of Birth :</label>
                            <input className="form-control" name="dateOfBirth" value={this.state.dateOfBirth} onChange={this.handleChange} id="birth"/>
                        </div>

                        <hr className="personalInfo-line"/>

                        <div className="personalInfo-phoneNum mb-2 row">
                            <label for="phone" className="col-2">Phone Number :</label>
                            <div className="col-8">
                            <PhoneInput
                            country={'us'}
                            value={this.state.phoneNum}
                            onChange={phone => this.setState({ phone })}
                            required
                            className="form-control"
                            />
                            </div>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please enter your phone number
                            </div>
                            {/* <input name="phoneNum" value={this.state.phoneNum} onChange={this.handleChange} id="phone" /> */}

                        </div>

                        <hr className="personalInfo-line"/>

                        <div className="personalInfo-emailId mb-2">
                            <label for="email">Email :</label>
                            <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange} id="email" required/>
                            {!this.state.emailValidationError?
                                <div className="valid-feedback">
                                    Looks good!
                                </div>:
                                <div className="invalid-feedback">
                                    Please enter valid email
                                </div>
                            }
                        </div>

                        <hr className="personalInfo-line"/>

                        <div className="personalInfo-bioField">
                            <label for="bio">Bio :</label>
                            <textarea id="ptextArea" name="bio" className="bio" value={this.state.bio} onChange={this.handleChange} maxlength="175" rows="4" cols="66">
                                    
                            </textarea>
                            <div className="personalInfo-textAreaCounter">
                                    {this.state.pageCount} of 175
                            </div>
                        </div>
                        <div className="personalInfo-btn mb-2 mt-2 row">
                            <div className="submitBtn col">
                                <button>Submit</button>
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