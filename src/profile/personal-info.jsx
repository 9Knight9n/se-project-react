import React, { Component } from 'react';
import { BsPeopleCircle } from "react-icons/bs";
import { IconContext } from "react-icons";


class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {}; 

    }
    render() { 
        return ( 
            <div className="personalInfo-main mt-2">
                <div className="personalInfo-avatar mt-2 ml-2">
                    <IconContext.Provider value={{ color: "black", size:100,  }}>
                        <div>
                            <BsPeopleCircle />
                        </div>
                    </IconContext.Provider>
                </div>
                <div className="personalInfo-form ml-4 mt-2">
                    <div className="name row mb-2">
                        <div className="firstName col">
                            <label for="firstName">First Name :</label>
                            <input id="firstName" />
                        </div>
                        <div className="lastName col">
                            <label for="lastName">Last Name :</label>
                            <input id="lastName" />
                        </div>
                    </div>

                    <div className="nationalId-country-city row mb-2">
                        <div className="col">
                            <label for="nationalCode">National Code :</label>
                            <input id="nationalCode" />
                        </div>

                        <div className="col">
                            <label for="country">Country :</label>
                            <select id="country">
                                <option>option1</option>
                                <option>option2</option>
                            </select>
                        </div>

                        <div className="col">
                            <label for="city">City :</label>
                            <select id="city">
                                <option>option1</option>
                                <option>option2</option>
                            </select>
                        </div>

                    </div>

                    <div className="sext mb-2">
                        <label for="sex">Sex :</label>
                        <select id="sex">
                            <option>Male</option>
                            <option>Female</option>
                        </select>

                    </div>

                    <div className="dateOfBirth">
                        <label for="birth">Date Of Birth :</label>
                        <input id="birth"/>
                    </div>

                    <div className="phoneNum mb-2">
                        <label for="phone">Phone Number :</label>
                        <input id="phone" />

                    </div>

                    <div className="emailId">
                        <label for="email">Email :</label>
                        <input id="email" />

                    </div>

                    <div className="bioField">
                        <label for="bio">Email :</label>
                        <textarea id="bio" />

                    </div>
                </div>
            </div>
         );
    }
}
 
export default PersonalInfo;