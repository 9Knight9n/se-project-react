import React, {Component} from 'react';
import {Alert, Button, Form, Modal, Spinner} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";

class AddAccommodation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.exit = this.exit.bind(this);
    }

    exit()
    {
        document.getElementById('redirect-to-hosting').click()
    }

    render() {
        return (
            <div>
                <Link className={'display-none'} to="/hosting/"  id={'redirect-to-hosting'}/>
                <Modal centered size={'lg'}
                    backdrop="static"
                    show={true}
                    onHide={this.exit}>
                    <Modal.Header closeButton={true}>Header</Modal.Header>
                    <div>
                        This is start page of Hosting
                    </div>
                </Modal>
            </div>
        );
    }
}

export default AddAccommodation;
