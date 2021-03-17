import React, {Component} from 'react';
import './auth.css'
import {Modal} from "react-bootstrap";


class Login extends Component {
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
                        <a className="text-decoration-none"
                            href="#"
                            onClick={()=>this.props.changeModal(true,false)}>
                            Sign Up
                        </a>
                    </p>
                </Modal.Body>
            </Modal>
        );
    }
}


export default Login;
