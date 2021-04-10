//@Sajad
import React, {Component, Fragment} from 'react';
import './homepage.css'
import Footer from "./footer";
import Navbar from "./navbar/navbar";
import SearchUser from "./searchUser/searchUser";
import {Route, Switch} from "react-router-dom";
import Settings from "../settings/settings";
import Hosting from '../hosting/hosting';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {}; 

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }
    render() {
        return (
            <div id='homepage' className="d-flex flex-column">
                <Navbar/>
                <div className={'w-100'}>
                <Switch>
                    <Route exact={true} path="/">
                        {/*<div className={'w-100'}>*/}
                        {/*    <div className={'align-self-center'} style={{width:"fit-content"}}>*/}
                                <SearchUser/>
                        {/*    </div>*/}

                        {/*</div>*/}
                    </Route>
                    <Route path="/settings">
                        <Settings/>
                    </Route>

                    <Route path="/hosting">
                        <Hosting show={this.state.showHosting} exitHosting={this.exitHosting} />
                    </Route>

                </Switch>

                </div>





                <Footer/>
            </div>
        );
    }
}

export default Homepage;
