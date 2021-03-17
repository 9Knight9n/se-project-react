//@Sajad
import React, {Component} from 'react';
import './css/navbar.css'
import {Fragment} from "react";
import {Modal} from "react-bootstrap";


class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        authModal : false,
        modalOnLogin : true,
    }

    // componentWillMount() {
    //
    // }

    componentDidMount() {
        // const signUpButton = document.getElementById('signUp');
        // const signInButton = document.getElementById('signIn');
        // const container = document.getElementById('container');
        //
        // signUpButton.addEventListener('click', () => {
        //     container.classList.add("right-panel-active");
        // });
        //
        // signInButton.addEventListener('click', () => {
        //     container.classList.remove("right-panel-active");
        // });

    }

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
                                    <button onClick={()=>this.setState({authModal:!this.state.authModal})} className="btn btn-outline-primary" data-toggle="modal" data-target="#signup"
                                            type="button">Log In
                                    </button>
                                </a></li>
                                <li className="nav-item"><a className="nav-link active" href="#">
                                    <button onClick={()=>console.log("hello")} className="btn btn-primary" data-toggle="modal" data-target="#signin"
                                            type="button">Sign Up
                                    </button>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <Modal centered size={'sm'}
                    // show={this.state.authModal}
                    onHide={()=>this.setState({authModal:!this.state.authModal})}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Sign In
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="text-primary input-group-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                                            </svg>
                                        </span>
                                    </div>
                                    <input className="form-control" type="email" required placeholder="Email"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="text-primary input-group-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                                             fill="currentColor" className="bi bi-key-fill" viewBox="0 0 16 16">
                                                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                            </svg>
                                        </span>
                                    </div>
                                    <input className="form-control" type="password" required placeholder="Password"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-lg text-white" style={{"width": "100%"}}
                                        type="button">Log in
                                </button>
                            </div>
                        </form>
                        <hr style={{"backgroundColor": "#bababa"}}/>
                        <p className="text-center">Or
                            <a className="text-decoration-none" href="#"> Forget
                                password
                            </a>
                        </p>
                        <p className="text-center">
                            Don&#39;t have an account?
                            <a className="text-decoration-none" data-dismiss="modal" data-toggle="modal"
                                data-target="#signin" href="#">
                                Sign Up
                            </a>
                        </p>
                    </Modal.Body>
                </Modal>


                <Modal centered size={'sm'}
                    show={this.state.authModal}
                    onHide={()=>this.setState({authModal:!this.state.authModal})}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Sign Up Now
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend"><span
                                        className="text-primary input-group-text"><i
                                        className="fa fa-user-o"></i></span></div>
                                    <input className="form-control" type="text" required
                                           placeholder="Full Name"/>
                                    <div className="input-group-append"></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend"><span
                                        className="text-primary input-group-text"><i
                                        className="fa fa-envelope-o"></i></span></div>
                                    <input className="form-control" type="email" required placeholder="Email"/>
                                    <div className="input-group-append"></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend"><span
                                        className="text-primary input-group-text"><i className="fa fa-lock"></i></span>
                                    </div>
                                    <input className="form-control" type="password" required
                                           placeholder="Password"/>
                                    <div className="input-group-append"></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-check"><input className="form-check-input" type="checkbox"
                                                                   id="formCheck-1" required checked/><label
                                    className="form-check-label" htmlFor="formCheck-1">I agree all the terms and
                                    conditions.</label></div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-lg text-white" style={{"width": "100%"}}
                                        type="button">Sign Up
                                </button>
                            </div>
                        </form>
                        <h5 className={"ml-auto mr-auto"} style={{width:"fit-content"}}>Or</h5>
                        <div className="text-center mt-3">
                            <button className="btn btn-light text-left border-dark" style={{"width": "100%"}}
                                    type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                     className="bi bi-google mr-2  mb-1" viewBox="0 0 16 16">
                                    <path
                                        d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                </svg>
                                Continue with Google
                            </button>
                        </div>

                        <hr style={{"backgroundColor": "#bababa"}}/>
                        <p className="text-center">Already have an Account? <a className="text-decoration-none"
                                                                               data-dismiss="modal"
                                                                               data-toggle="modal"
                                                                               data-target="#signup" href="#">Log
                            In</a></p>
                    </Modal.Body>

                </Modal>
            </Fragment>
        );
    }
}


export default Navbar;
