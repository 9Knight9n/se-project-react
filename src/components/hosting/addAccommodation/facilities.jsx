import React, {Component} from 'react';
import {Modal} from "react-bootstrap";
import {Link} from "react-router-dom";

class Facilities extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <React.Fragment>
                <Modal.Header closeButton={true}>
                    Specify accommodation facilities
                </Modal.Header>
                <Modal.Body>
                    <h1>hello</h1>
                </Modal.Body>
                <Modal.Footer>
                    <Link to={'/hosting/addaccommodation/categories/'}>
                        <button className={'btn btn-outline-secondary'}>back</button>
                    </Link>
                    <Link to={'/hosting/addaccommodation/photos/'}>
                        <button className={'ml-auto btn btn-outline-primary'}>next</button>
                    </Link>
                </Modal.Footer>
            </React.Fragment>
        );
    }
}

export default Facilities;
