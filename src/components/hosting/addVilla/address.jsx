import React, { Component } from 'react';

class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() { 
        return ( 
            <div>
                <p>
                    <h3>Enter country, city and the address of your place.</h3>
                    <p>This information will be shown to the customer who reserved your place.</p>
                </p>
            </div>
         );
    }
}
 
export default Address;