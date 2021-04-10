import React, { Component } from 'react';
import '../hosting/hosting.css';
import {Alert, Form, Modal, Spinner} from "react-bootstrap";

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
                <div>
                    This is start page of Hosting
                </div>
            </Modal>
         );
    }
}
 
export default Hosting;