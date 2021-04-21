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
        sessionStorage.setItem("webSite-link", "http://softcheetahs.herokuapp.com/")
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
                <div className={'w-100'}>
                    <SearchUser/>

                </div>
            </div>
        );
    }
}

export default Homepage;
