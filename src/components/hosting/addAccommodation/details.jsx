import React, { Component } from 'react';
import './details.css'
import {Modal} from "react-bootstrap";
import {Link, Route, Switch} from "react-router-dom";
import {Form} from "react-bootstrap";
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageCount: 0,
            charsPerPage: 1,
            invalidPlaceName: ''
        };

    }

    handleChange(e){
        let target=e.target;
        let name = target.name;
        let value = target.value
        if (name === "description"){
         let currentText = e.target.value;
         //Now we need to recalculate the number of characters that have been typed in so far
         let characterCount = currentText.length;
         let charsPerPageCount = this.state.charsPerPage;
         let unitCount = Math.round(characterCount/charsPerPageCount);
         this.setState({pageCount: unitCount});
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <Modal.Header closeButton={true}>
                    <h4>Place details</h4>
                </Modal.Header>
                <Modal.Body>
                    <div className="details-main">
                        <b>Describe your place for guests.</b>
                        <div className="details-form">
                            <form>
                                    <div className="details-placeName">
                                        <div className="details-input-description">
                                            <label className="form-label" htmlFor="details-placeName">Place name:</label>
                                            <p>Use a name to describe your place attributes well.</p>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <Form.Control
                                                    onChange={this.handleChange}
                                                    id="details-placeName"
                                                    className="form-control shadow-none"
                                                    type="text"
                                                    name="placeName"
                                                    maxLength="40"
                                                    placeholder="Example: Seaside villa"
                                                    data-testid="details-placeName"
                                                    isInvalid={this.state.invalidPlaceName}
                                                />
                                                <Form.Control.Feedback type="invalid" className={"ml-1"}>
                                                    You can use at most 40 characters for place name!
                                                </Form.Control.Feedback>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="details-description">
                                        <div className="details-input-description">
                                            <label className="form-label" htmlFor="details-description">Describe your place :</label>
                                            <p>Here you can point to your place's attributs like view, facilities and everything that makes
                                            your place special.
                                            </p>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <Form.Control
                                                    // onChange={this.handleChange}
                                                    as="textarea"
                                                    rows={3}
                                                    maxLength="120"
                                                    id="details-description"
                                                    className="form-control shadow-none"
                                                    type="text"
                                                    name="description"
                                                    placeholder="Example: Luxurious villa with swimming pool near the sea and close to ..."
                                                    data-testid="details-description"
                                                />
                                                {/* <div className="personalInfo-textAreaCounter">
                                                    {this.state.pageCount} of 120
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="details-area">
                                        <div className="details-input-description">
                                            <label className="form-label" htmlFor="details-area">Area (Meter):</label>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <Form.Control
                                                    onChange={this.handleChange}
                                                    id="details-area"
                                                    className="form-control shadow-none"
                                                    type="number"
                                                    min="0"
                                                    name="area"
                                                    maxLength="4"
                                                    placeholder="Example: 150"
                                                    data-testid="details-area"
                                                />
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
                    <Link to={'/hosting/addaccommodation/facilities/'} >
                        <button className={'ml-auto btn btn-outline-primary'}>Next</button>
                    </Link>
                </Modal.Footer>
            </React.Fragment>
         );
    }
}
 
export default Details;