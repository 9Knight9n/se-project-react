//@Sajad
import React, {Component, Fragment} from 'react';
import { Modal, Spinner} from "react-bootstrap";
import './auth.css'

// https://www.npmjs.com/package/react-phone-input-2
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



class Signup extends Component {
    constructor(props) {
        super(props);
        this.exit = this.exit.bind(this);
        this.setPage = this.setPage.bind(this);
        this.pageTop = this.pageTop.bind(this);
        this.pageButton = this.pageButton.bind(this);
        this.emailValidation = this.emailValidation.bind(this);
        this.emailVerification = this.emailVerification.bind(this);
        this.signup = this.signup.bind(this);
    }

    state = {
        pageNum:0,
        loading:false,
        terms:false,
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

    exit(authModal,modalOnLogin,email)
    {
        this.props.changeModal(authModal,modalOnLogin,email)
        this.setState({pageNum:0,loading:false})
    }

    setPage(pageNum)
    {
        this.setState({pageNum})
    }

    pageTop()
    {
        switch (this.state.pageNum)
        {
            case 0:
                return (
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
                    </div>
                )
            case 1:
                return (
                    <div className="form-group">
                        <div className="input-group">
                            <p>Enter Verification code sent to your Email. </p>
                            <div className="input-group-prepend">
                                <span className="text-primary input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle"
                                         viewBox="0 0 16 16">
                                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                    </svg>
                                </span>
                            </div>
                            <input className="form-control shadow-none" type="verify" required
                               placeholder="Verification code"/>
                        </div>
                    </div>
                )
            case 2:
                return (
                    <Fragment>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="text-primary input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                        </svg>
                                    </span>
                                </div>
                                <input className="form-control shadow-none" type="first-name" required
                                   placeholder="First name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="text-primary input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-person-dash" viewBox="0 0 16 16">
                                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                            <path fill-rule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
                                        </svg>
                                    </span>
                                </div>
                                <input className="form-control shadow-none" type="last-name" required
                                   placeholder="Last name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="text-primary input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                        </svg>
                                    </span>
                                    <span className="input-group-btn">
                                        <PhoneInput
                                            placeholder={"Phone number"}
                                            preferredCountries={["ir"]}
                                            // country={'ir'}
                                            onlyCountries={["ir","uk","fr","ru"]}
                                            value={this.state.phone}
                                            onChange={phone => this.setState({ phone })}
                                            // enableSearch={true}
                                            // disableSearchIcon={true}
                                            inputProps={
                                                {
                                                    required:true,
                                                    type:"phone-number",
                                                    className:"form-control shadow-none",
                                                    style:{width:"auto"}
                                                }
                                            }
                                        />
                                    </span>
                                </div>
                                {/*<input className="form-control shadow-none" type="phone-number" required*/}
                                {/*   placeholder="Phone number"/>*/}
                            </div>
                        </div>
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
                                <input className="form-control shadow-none" type="confirm-password" required
                                   placeholder="Confirm password"/>
                            </div>
                        </div>
                    </Fragment>
                )
            case 3:
                return (
                    <div className="form-group">
                        <div className="input-group">
                            <Fragment>
                                <span style={{lineHeight:"0.75"}}>
                                    <p>
                                        This email is already registered !
                                    </p>
                                    <p>
                                        do you want to sign in instead?
                                    </p>
                                </span>
                            </Fragment>
                        </div>
                    </div>
                )
            default:
                return (<p>some thing is wrong!</p>)
        }
    }


    pageButton()
    {
        switch (this.state.pageNum)
        {
            case 0:
                return (
                    <button className="btn btn-outline-primary btn-lg" style={{"width": "100%"}}
                            onClick={()=>this.emailValidation()}
                            disabled={this.state.loading}
                            type="button">
                        {this.state.loading?
                                <Spinner className={'mb-1 mr-1'} as="span"
                                         animation="border"
                                         size="sm"
                                         role="status"
                                         aria-hidden="true"/>:""}
                        Next
                    </button>
                )
            case 1:
                return (
                    <button className="btn btn-outline-primary btn-lg" style={{"width": "100%"}}
                            onClick={()=>this.emailVerification()}
                            disabled={this.state.loading}
                            type="button">
                        {this.state.loading?
                                <Spinner className={'mb-1 mr-1'} as="span"
                                         animation="border"
                                         size="sm"
                                         role="status"
                                         aria-hidden="true"/>:""}
                        Verify
                    </button>
                )
            case 2:
                return (
                    <button className="btn btn-primary btn-lg text-white" style={{"width": "100%"}}
                            onClick={()=>this.signup()}
                            disabled={this.state.loading}
                            type="button">
                        {this.state.loading?
                                <Spinner className={'mb-1 mr-1'} as="span"
                                         animation="border"
                                         size="sm"
                                         role="status"
                                         aria-hidden="true"/>:""}
                        Sign up
                    </button>
                )
            case 3:
                return (
                    <div className={"w-100 row"} style={{marginLeft:"0"}}>
                        <div className={"col-6"} style={{paddingLeft:"0"}}>
                            <button className="btn btn-outline-primary btn-lg "
                                style={{"width": "100%"}}
                                type="button"
                                onClick={()=>this.setPage(0)}>
                                back
                            </button>
                        </div>
                        <div className={"col-6"} style={{paddingRight:"0"}}>
                            <button className="btn btn-primary btn-lg text-white "
                                style={{"width": "100%"}}
                                type="button"
                                onClick={()=>this.exit(true,false,this.state.email)}>
                                Sign in
                            </button>
                        </div>
                    </div>
                )
            default:
        }

    }

    emailValidation()
    {
        this.setState({loading : true})
        setTimeout(() => this.setState({loading : false,pageNum : 1,}), 1000);
    }

    emailVerification()
    {
        this.setState({loading : true})
        setTimeout(() => this.setState({loading : false,pageNum : 2,}), 1000);
    }

    signup()
    {

    }


    render() {
        return (
            <Modal centered size={'sm'}
                   backdrop="static"
                    show={this.props.show}
                    onHide={()=>this.exit(false,true,null)}>
                <Modal.Header className={"d-flex w-100"} closeButton>
                    {this.state.pageNum>0?
                    <button className="btn btn-sm close shadow-none" style={{margin:"-1rem 0 0 -1rem",zIndex:"1000",position:"absolute"}}
                            onClick={()=>this.setPage(0)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                             className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                    </button>
                    :""}
                    <Modal.Title className={"w-100 position-absolute"}>
                        <p style={{textAlign: "center"}} className={'m-auto w-auto pr-4'}>Sign Up</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        {this.pageTop()}
                        {this.state.pageNum===2?
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" onClick={()=>this.setState({terms:!this.state.terms})}
                                        type="checkbox" id="formCheck-1" required checked={this.state.terms}/>
                                <label className="form-check-label" htmlFor="formCheck-1">
                                    I agree all the <a href={"#"}>terms</a> and conditions.
                                </label>
                            </div>
                        </div>:""}
                        <div className="form-group">
                            {this.pageButton()}
                        </div>
                    </form>
                    {this.state.pageNum===0?
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

                    {this.state.pageNum===0?
                    <Fragment>
                    <hr style={{"backgroundColor": "#bababa"}}/>
                        <p className="text-center">Already have an Account?
                            <a className="text-decoration-none"
                                    onClick={()=>this.exit(true,true,null)}
                                    href="#">
                                Log In
                            </a>
                        </p>
                    </Fragment>:""}
                </Modal.Body>

            </Modal>
        );
    }
}


export default Signup;
