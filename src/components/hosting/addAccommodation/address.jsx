import React, { Component } from 'react';
import './address.css'
import {Modal} from "react-bootstrap";
import {Link, Route, Switch} from "react-router-dom";
import {Form} from "react-bootstrap";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageCount: 0,
            charsPerPage: 1,
            invalidPlaceName: '',
            postalCode: null,
            invalidPostalCode: false
        };

    }

    handleChange = (e) => {
        let target=e.target;
        let name = target.name;
        let value = target.value
        if (name === "fullAddress"){
            let currentText = e.target.value;
            //Now we need to recalculate the number of characters that have been typed in so far
            let characterCount = currentText.length;
            let charsPerPageCount = this.state.charsPerPage;
            let unitCount = Math.round(characterCount/charsPerPageCount);
            this.setState({pageCount: unitCount});
        }
        console.log(name , " " , value )
        if (name === "postalCode" && ( value.length > 5 && value.length < 16)){
            this.setState({postalCode: value, invalidPostalCode: false})
        }
        else if(name === "postalCode" && ( value.length <= 5 || value.length >= 16)){
            this.setState({postalCode: value, invalidPostalCode: true})
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <Modal.Header closeButton={true}>
                    <h4>Place address</h4>
                </Modal.Header>
                <Modal.Body>
                    <div className="address-main">
                        <b>Describe your place for guests.</b>
                        <div className="address-form">
                            <form>
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <label htmlFor="address-country">Country</label>
                                        <div>
                                            <CountryDropdown
                                            id="address-country"
                                            style={{width: "100%"}}
                                            value={this.state.country}
                                            onChange={(value)=>this.setState({country: value})} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="address-region">Region</label>
                                        <div>
                                            <RegionDropdown
                                            country={this.state.country}
                                            value={this.state.region}
                                            id="address-region"
                                            style={{width: "100%"}}
                                            onChange={(value)=>this.setState({region: value})} />
                                        </div>
                                    </div>
                                </div>

                                    <div className="address-fullAddress">
                                        <div className="address-full">
                                            <label className="form-label" htmlFor="address-full">Your place full address :</label>
                                            <p>Write your full address containing City, Region, Street, Alley and ...</p>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <Form.Control
                                                    onChange={this.handleChange}
                                                    as="textarea"
                                                    rows={3}
                                                    maxLength="120"
                                                    id="address-fullAddress"
                                                    className="form-control shadow-none"
                                                    type="text"
                                                    name="fullAddress"
                                                    placeholder="Example: Tehran, Vali-asr street, Zaferaniyeh street, Kafi-abadi alley ...."
                                                    data-testid="address-full"
                                                />
                                            </div>
                                            <div className="personalInfo-textAreaCounter">
                                                {this.state.pageCount} of 120
                                            </div>
                                        </div>
                                    </div>

                                    <div className="address-postalCode">
                                        <div className="address-postalCode">
                                            <label className="form-label" htmlFor="address-postalCode">Postal code :</label>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <Form.Control
                                                    onChange={this.handleChange}
                                                    id="address-postalCode"
                                                    className="form-control shadow-none"
                                                    type="number"
                                                    min="0"
                                                    name="postalCode"
                                                    value={this.state.postalCode}
                                                    data-testid="address-postalCode"
                                                    isInvalid={this.state.invalidPostalCode}
                                                />
                                                <Form.Control.Feedback type="invalid" className={"ml-1"}>
                                                    Postal code must be up to 6 and less than 15 digits.
                                                </Form.Control.Feedback>
                                            </div>
                                        </div>
                                    </div>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Link to={'/hosting/addaccommodation/categories/'} >
                        <button className={'ml-auto btn btn-outline-secondary'}>Back</button>
                    </Link>
                    <Link to={'/hosting/addaccommodation/amentities/'} >
                        <button className={'ml-auto btn btn-outline-primary'}>Next</button>
                    </Link>
                </Modal.Footer>
            </React.Fragment>
         );
    }
}
 
export default Address;