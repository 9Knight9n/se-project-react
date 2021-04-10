import React, { Component } from 'react';
import '../hosting/hosting.css';
import {Alert, Form, Modal, Spinner} from "react-bootstrap";
import Address from './addVilla/address';

class Hosting extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() { 
        return (
            <Modal centered size={'md'}
                backdrop="static"
                show={this.props.show}
                onHide={this.props.hide}>
                <Modal.Header className={"d-flex w-100"} closeButton>

                    <Modal.Title className={"w-100 position-absolute"}>
                        Welcome
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Address/>
                    </div>
                </Modal.Body>
            </Modal>
         );
    }
}
 
export default Hosting;