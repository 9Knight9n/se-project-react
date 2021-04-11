import React, { Component } from 'react';
import { Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
class Amentities extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() { 
        return ( 
            <React.Fragment>
                <Modal.Header closeButton={true}>
                    Facilities
                </Modal.Header>
                <Modal.Body>
                    <div className="amentities-main">
                        <div className="amentities-options">
                            <div className="amentities-option">
                                hi
                            </div>  
                            <div className="amentities-option">
                                hi
                            </div> 
                            <div className="amentities-option">
                                hi
                            </div> 
                            <div className="amentities-option">
                                hi
                            </div>  
                            <div className="amentities-option">
                                hi
                            </div> 
                            <div className="amentities-option">
                                hi
                            </div> 

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Link to={'/hosting/addaccommodation/details/'}>
                        <button className={'btn btn-outline-secondary'}>back</button>
                    </Link>
                    <Link to={'/hosting/addaccommodation/facilities/'}>
                        <button className={'ml-auto btn btn-outline-primary'}>next</button>
                    </Link>
                </Modal.Footer>
            </React.Fragment>
         );
    }
}
 
export default Amentities;