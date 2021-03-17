import React, {Component} from 'react';
import './auth.css'
import {Modal, Spinner} from "react-bootstrap";
import {Fragment} from "react";



class Login extends Component {
    constructor(props) {
        super(props);
        this.emailValidation = this.emailValidation.bind(this);
        this.login = this.login.bind(this);
        this.exit = this.exit.bind(this);
    }

    state = {
        enteringEmail : true,
        loading : false,
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

    exit(authModal,modalOnLogin)
    {
        this.props.changeModal(authModal,modalOnLogin)
        this.setState({enteringEmail:true,loading:false})
    }

    emailValidation()
    {
        this.setState({loading : true})
        setTimeout(() => this.setState({loading : false,enteringEmail : false,}), 1000);
    }

    login()
    {

    }

    render() {
        return (
            <Modal centered size={'sm'}
                   backdrop="static"
                    show={this.props.show}
                    onHide={()=>this.exit(false,true)}>
                <Modal.Header className={"d-flex w-100"} closeButton>
                    {!this.state.enteringEmail?
                    <button className="btn btn-sm close" style={{margin:"-1rem 0 0 -1rem",zIndex:"1000",position:"absolute"}}
                            onClick={()=>this.setState({enteringEmail:true})}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                             className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                    </button>
                    :""}
                    <Modal.Title className={"w-100 position-absolute"}>
                        <p style={{textAlign: "center"}} className={'m-auto w-auto pr-4'}>Sign In</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        {this.state.enteringEmail ?
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="text-primary input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                            <path
                                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                                        </svg>
                                    </span>
                                </div>
                                <input className="form-control shadow-none" type="email" required
                                       placeholder="Email"/>
                            </div>
                        </div> :
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="text-primary input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-key-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                        </svg>
                                    </span>
                                </div>
                                <input className="form-control shadow-none" type="password" required
                                       placeholder="Password"/>
                            </div>
                        </div>
                        }
                        <div className="form-group">
                            <button className="btn btn-primary btn-lg text-white"
                                    style={{"width": "100%"}}
                                    type="button"
                                    disabled={this.state.loading}
                                    onClick={this.state.enteringEmail?this.emailValidation:this.login}>
                                {this.state.loading?
                                <Spinner className={'mb-1 mr-1'} as="span"
                                         animation="border"
                                         size="sm"
                                         role="status"
                                         aria-hidden="true"/>:""}
                                {this.state.enteringEmail?"Next":"Log in"}
                            </button>
                        </div>
                    </form>

                    {this.state.enteringEmail?
                    <Fragment>
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
                    </Fragment>:""}

                    <hr style={{"backgroundColor": "#bababa"}}/>
                    {!this.state.enteringEmail?
                    <p className="text-center">
                        <a className="text-decoration-none" href="#"> Forget
                            password?
                        </a>
                    </p>:
                    <p className="text-center">
                        Don&#39;t have an account?
                        <a className="text-decoration-none"
                            href="#"
                            onClick={()=>this.exit(true,false)}>
                            Sign Up
                        </a>
                    </p>}
                </Modal.Body>
            </Modal>
        );
    }
}


export default Login;
