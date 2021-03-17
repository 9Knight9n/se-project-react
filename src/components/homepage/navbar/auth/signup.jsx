import React, {Component} from 'react';
import {Modal} from "react-bootstrap";

class Signup extends Component {
    constructor(props) {
        super(props);
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

    render() {
        return (
            <Modal centered size={'sm'}
                show={this.props.show}
                onHide={()=>this.props.changeModal(false,true)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Sign Up Now
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="text-primary input-group-text">
                                        <i
                                    className="fa fa-user-o"></i>
                                    </span>
                                </div>
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
                    <p className="text-center">Already have an Account?
                        <a className="text-decoration-none" onClick={()=>this.props.changeModal(true,true)} href="#">
                            Log In
                        </a>
                    </p>
                </Modal.Body>

            </Modal>
        );
    }
}


export default Signup;
