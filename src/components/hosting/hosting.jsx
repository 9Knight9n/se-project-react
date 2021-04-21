import React, { Component } from 'react';
import '../hosting/hosting.css';
import {Alert, Button, Form, Modal, Spinner} from "react-bootstrap";
import Navbar from "../homepage/navbar/navbar";
import Footer from "../homepage/footer";
import AddAccommodation from "./addAccommodation/addAccommodation";
import {Link, Route, Switch} from "react-router-dom";

class Hosting extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() { 
        return (
            <div className={'container-fluid'}>
                <Switch>
                    <Route path="/hosting/addaccommodation/">
                        <AddAccommodation/>
                    </Route>

                    <Route path="/hosting/">
                        <Link to={'/hosting/addaccommodation/categories/'} >
                            <Button className={'btn btn-primary w-auto hover-effect'}>
                                Add Accommodation
                            </Button>
                        </Link>
                    </Route>
                </Switch>
            </div>
         );
    }
}
 
export default Hosting;