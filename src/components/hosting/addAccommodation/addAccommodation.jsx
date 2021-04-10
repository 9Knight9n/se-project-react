import React, {Component} from 'react';
import { Modal} from "react-bootstrap";
import {Link, Route, Switch} from "react-router-dom";
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
                    <Modal.Body>
                        <Switch>
                            <Route path={'/hosting/addaccommodation/categories/'}>
                                <Categories/>
                            </Route>
                        </Switch>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default AddAccommodation;
