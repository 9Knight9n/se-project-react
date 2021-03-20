//@Sajad
import React, {Component} from 'react';
import './navbar.css'
import {Fragment} from "react";
import {Modal} from "react-bootstrap";
import Login from "./auth/login";
import Signup from "./auth/signup";


class Navbar extends Component {
    constructor(props) {
        super(props);

        this.changeModal = this.changeModal.bind(this);
    }

    state = {
        authModal : false,
        modalOnLogin : true,
        email : null,
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
                                <li className="nav-item"><a className="nav-link active" href="#">
                                    <button onClick={()=>this.changeModal(true,true,null)} className="btn btn-outline-primary" data-toggle="modal" data-target="#signup"
                                            type="button">Log In
                                    </button>
                                </a></li>
                                <li className="nav-item"><a className="nav-link active" href="#">
                                    <button onClick={()=>this.changeModal(true,false,null)} className="btn btn-primary" data-toggle="modal" data-target="#signin"
                                            type="button">Sign Up
                                    </button>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {(this.state.authModal && this.state.modalOnLogin) ?
                <Login show={true}
                        changeModal={this.changeModal} email={this.state.email}/>:""}

                {(this.state.authModal && !this.state.modalOnLogin)?
                <Signup show={true}
                        changeModal={this.changeModal} email={this.state.email}/>:""}
            </Fragment>
        );
    }
}


export default Navbar;
