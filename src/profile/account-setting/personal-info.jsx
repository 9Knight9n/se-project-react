import React, { Component } from 'react';
import { BsPeopleCircle } from "react-icons/bs";
import { IconContext } from "react-icons";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import './personal-info.css';

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
            country: "",
            gender: "",
            dateOfBirth: "",
            phoneNum: "",
            email: "",
        }; 

    }

    handleChange = (e) => { 
        let target=e.target;
        let name = target.name;
        let value = target.value
        this.setState({
         [name]:value
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
                
                <div className="personalInfo-form ml-4 mt-4">
                    <div className="firstName mb-2">
                            <label for="firstName">First Name :</label>
                            <input name="firstName" value={this.state.firstName} onChange={this.handleChange} id="firstName" />
                    </div>

                    <hr className="personalInfo-line"/>

                    <div className="lastName mb-2">
                            <label for="lastName">Last Name :</label>
                            <input name="lastName" value={this.state.lastName} onChange={this.handleChange} id="lastName" />
                    </div>

                    <hr className="personalInfo-line mb-2"/>

                    <div className="nationalId">
                        <label for="nationalCode">National Code :</label>
                        <input name="nationalId" value={this.state.nationalId} onChange={this.handleChange} id="nationalCode" />
                    </div>

                    <hr className="personalInfo-line"/>

                    <div className="Country mb-2">
                        <label for="nationality">Country :</label>
                        <select name="country" value={this.state.country} id="nationality">
                            <option>Iran</option>
                            <option>Iraq</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <hr className="personalInfo-line"/>

                    <div className="Gender mb-2">
                        <label for="Gender">Gender :</label>
                        <select name="gender" value={this.state.gender} id="Gender">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <hr className="personalInfo-line"/>

                    <div className="dateOfBirth mb-2">
                        <label for="birth">Date Of Birth :</label>
                        <input name="dateOfBirth" value={this.state.dateOfBirth} onChange={this.handleChange} id="birth"/>
                    </div>

                    <hr className="personalInfo-line"/>

                    <div className="phoneNum mb-2 row">
                        <label for="phone" className="col-2">Phone Number :</label>
                        <div className="col-8">
                        <PhoneInput
                        country={'us'}
                        value={this.state.phoneNum}
                        onChange={phone => this.setState({ phone })}
                        />
                        </div>
                        {/* <input name="phoneNum" value={this.state.phoneNum} onChange={this.handleChange} id="phone" /> */}

                    </div>

                    <hr className="personalInfo-line"/>

                    <div className="emailId mb-2">
                        <label for="email">Email :</label>
                        <input name="email" value={this.state.email} onChange={this.handleChange} id="email" />

                    </div>

                    <hr className="personalInfo-line"/>

                    <div className="bioField">
                        <label for="bio">Bio :</label>
                        <textarea id="ptextArea" name="bio" className="bio" value={this.state.bio} onChange={this.handleChange} maxlength="175" rows="4" cols="64">
                                
                        </textarea>
                        <div className="textAreaCounter">
                                {this.state.pageCount} of 175
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default PersonalInfo;