import React, {Component} from 'react';
import { Modal} from "react-bootstrap";
import {Link, Route, Switch} from "react-router-dom";
import Categories from "./categories";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
                <ToastContainer/>
                <Link className={'display-none'} to="/hosting/"  id={'redirect-to-hosting'}/>
                <Modal centered size={'lg'}
                        backdrop="static"
                        show={true}
                        onHide={this.exit}>
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
