import React, {Component} from 'react';
import {Alert, Button, Form, Modal, Spinner} from "react-bootstrap";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import Categories from "./categories";

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
                    <Modal.Header closeButton={true}>
                        <Switch>
                            <Route path={'/hosting/addaccommodation/categories/'}>
                                Select your hosting Category
                            </Route>
                        </Switch>
                    </Modal.Header>
                    <Switch>
                        <Route path={'/hosting/addaccommodation/categories/'}>
                            <Categories/>
                        </Route>
                    </Switch>
                </Modal>
            </div>
        );
    }
}

export default AddAccommodation;
