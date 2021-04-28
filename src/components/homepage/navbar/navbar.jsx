//@Sajad
import React, {Component} from 'react';
import './navbar.css'
import {Fragment} from "react";
import {Dropdown, Navbar, Nav} from "react-bootstrap";
import Login from "./auth/login";
import Signup from "./auth/signup";
import {clearCredentials, getItem, getViewport} from "../../util";
import default_logo from '../../../assets/img/default-profile-picture.jpg'
import {Link} from "react-router-dom";
import {STORAGE_KEY} from "../../constants";


class Nav_bar extends Component {
    constructor(props) {
        super(props);
        this.changeModal = this.changeModal.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    state = {
        size:getViewport(),
        navExpanded:false,
        authModal : false,
        modalOnLogin : true,
        email : null,
        loggedIn:!!getItem("user-token"),
        src: (localStorage.getItem("profileAvatar") && localStorage.getItem("profileAvatar")!=="null")? localStorage.getItem("profileAvatar"):default_logo,
    }

    componentWillMount() {
       
    }
    componentDidMount() {
        console.log(this.state.size)
        document.addEventListener(STORAGE_KEY+'screen-size-changed', (event) => this.setState({size: event.detail}));
        document.addEventListener("setting-avatar-change", () => this.setState({src: getItem("profileAvatar")}));
    }

    changeModal(authModal,modalOnLogin,email)
    {
        this.setState({authModal,modalOnLogin,email})
    }

    onSuccess()
    {
        this.setState({loggedIn:!!getItem("user-token")})
    }

    logOut()
    {
        clearCredentials()
        this.setState({loggedIn:false})
    }


    render() {
        return (
            <Fragment>

                <Navbar fixed={'top'} collapseOnSelect={true} className={'bg-navbar'}
                        bg="light" variant="light" expand="lg" >
                    <Navbar.Brand href="#home">Sweet Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className={(this.state.size.toString()==='lg'||this.state.size.toString()==='xl')?'d-flex flex-row w-100':null}>
                            <Nav className="mr-auto mt-auto mb-auto">
                                <Nav.Link href="/" >Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="/Hosting/">Become a host</Nav.Link>
                            </Nav>



                            <ul className="navbar-nav ml-auto">
                            {this.state.loggedIn?
                            <Dropdown drop={(this.state.size.toString()==='lg'||this.state.size.toString()==='xl')?'left':'down'}>
                                <Dropdown.Toggle className={"shadow-none border-0 bg-transparent"} style={{color:'black'}}>
                                    <img src={this.state.src}
                                            height={"50px"} className={"rounded-circle"}/>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className={"shadow-lg"} style={{backgroundColor:"#ffffffcc"}}>

                                    <Link to="/settings/personalInfo/">
                                        <Dropdown.Item className={"btn-primary shadow-none"} >
                                        Settings
                                        </Dropdown.Item>
                                    </Link>

                                    <Dropdown.Divider/>
                                    <Link to="/">
                                        <Dropdown.Item className={"btn-primary shadow-none"} >
                                            Homepage
                                        </Dropdown.Item>
                                    </Link>
                                    <Dropdown.Divider/>
                                    <Link to="/Hosting/">
                                        <Dropdown.Item className={"btn-primary shadow-none"} >
                                            Hosting
                                        </Dropdown.Item>
                                    </Link>
                                    <Dropdown.Divider/>
                                    <Link to="/" style={{color:"red"}}>
                                        <Dropdown.Item style={{color:'red'}} className={"btn btn-danger shadow-none"} onClick={this.logOut}>
                                            Log Out
                                        </Dropdown.Item>
                                    </Link>
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


                    </Navbar.Collapse>
                </Navbar>
                

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


export default Nav_bar;
