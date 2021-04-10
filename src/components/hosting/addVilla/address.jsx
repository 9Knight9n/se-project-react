import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData  } from 'react-country-region-selector';
class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: null,
            region: null
        };

    }

    handleChange(e) { 
        let target=e.target;
        let name = target.name;
        let value = target.value
        console.log("name : "+name + " and Value : " + value)
        if (name === "rcrs-region"){
            this.setState({country: value})
        }
        if (name === "rcrs-region"){
            this.setState({region: value})
        }
   }

    render() { 
        return ( 
            <div>
                <p>
                    <h3>Enter country, city and the address of your place.</h3>
                    <p>This information will be shown to the customer who reserved your place.</p>
                </p>
                <div className="address-body">
                    <form className="form-row row mt-4">
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
                    </form>
                </div>
            </div>
         );
    }
}
 
export default Address;