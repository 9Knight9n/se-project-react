import React, { Component } from 'react';
import { fromLonLat } from "ol/proj";
import { RMap, ROSM } from "rlayers";
import {Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

const center = fromLonLat([2.364, 48.82]);

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageCount: 0,
            charsPerPage: 1,
            invalidPlaceName: false,
            invalidDescription: false,
            invalidPrice: false,

        };

    }

    handleSubmit = () =>{
        document.getElementById("goToPhotos").click();
    }
    render() { 
        return ( 
            <React.Fragment>
                <Modal.Header closeButton={true}>
                    <h4>Locate your villa</h4>
                </Modal.Header>
                <Modal.Body>
                    <div className={'mr-5 ml-5 villaProfile-map'}>
                            <RMap  width={"100%"} height={"60vh"} initial={{ center: center, zoom: 11 }}>
                                 <ROSM />
                            </RMap>
                        </div>
                </Modal.Body>
                <Modal.Footer>
                        <Link to={'/hosting/addaccommodation/address/'} >
                            <button className={'ml-auto btn btn-outline-secondary'}>Back</button>
                        </Link>
                        <button onClick={this.handleSubmit} className={'ml-auto btn btn-outline-primary'}>Next</button>
                        <Link id="goToPhotos" className="display-none" to={'/hosting/addaccommodation/photos/'}>

                        </Link>
                </Modal.Footer>
            </React.Fragment>
         );
    }
}
 
export default Location;