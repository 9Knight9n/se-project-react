//@Sajad
import React, {Component} from 'react';
import './navbar.css'
import {Fragment} from "react";
import {Dropdown, Modal} from "react-bootstrap";
import Login from "./auth/login";
import Signup from "./auth/signup";
import {getItem} from "../../util";
import default_logo from '../../../assets/img/default-profile-picture.jpg'


class Navbar extends Component {
    constructor(props) {
        super(props);

        this.changeModal = this.changeModal.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
    }

    state = {
        authModal : false,
        modalOnLogin : true,
        email : null,
        loggedIn:!!getItem("user-token"),
    }

    // componentWillMount() {
    //
    // }
    //
    // componentDidMount() {
    //
    // }
    //
    // componentWillReceiveProps(nextProps) {
    //
    // }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //
    // }
    //
    // componentWillUpdate(nextProps, nextState) {
    //
    // }
    //
    // componentDidUpdate(prevProps, prevState) {
    //
    // }
    //
    // componentWillUnmount() {
    //
    // }

    changeModal(authModal,modalOnLogin,email)
    {
        this.setState({authModal,modalOnLogin,email})
    }

    onSuccess()
    {
        this.setState({loggedIn:!!getItem("user-token")})
    }

    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-light navbar-expand-md sticky-top bg-white">
                    <div className="container-fluid"><a className="navbar-brand" href="#">Brand</a>
                        <button data-toggle="collapse" data-target="#navcol-1" className="navbar-toggler"><span
                            className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a className="nav-link active" href="#">First Item</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Second Item</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Third Item</a></li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                {this.state.loggedIn?
                                <Dropdown>
                                    <Dropdown.Toggle className={"shadow-none border-0 bg-transparent "} >
                                        <img src={(getItem("user-image") && getItem("user-image")!=="null")?
                                                    getItem("user-image"):default_logo}
                                                height={"50px"} className={"rounded-circle"}/>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className={"shadow-lg"}>
                                        <Dropdown.Item href="/setting/personalInfo">Setting</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                :
                                <Fragment>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">
                                            <button onClick={()=>this.changeModal(true,true,null)} className="btn btn-outline-primary" data-toggle="modal" data-target="#signup"
                                                    type="button">Log In
                                            </button>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">
                                            <button onClick={()=>this.changeModal(true,false,null)} className="btn btn-primary" data-toggle="modal" data-target="#signin"
                                                    type="button">Sign Up
                                            </button>
                                        </a>
                                    </li>
                                </Fragment>}
                            </ul>
                        </div>
                    </div>
                </nav>

                {(this.state.authModal && this.state.modalOnLogin) ?
                <Login show={true} onSuccess={this.onSuccess}
                        changeModal={this.changeModal} email={this.state.email}/>:""}

                {(this.state.authModal && !this.state.modalOnLogin)?
                <Signup show={true} onSuccess={this.onSuccess}
                        changeModal={this.changeModal} email={this.state.email}/>:""}
            </Fragment>
        );
    }
}


export default Navbar;
