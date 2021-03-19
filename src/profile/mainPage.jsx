import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mainPage.css';
import 'react-pro-sidebar/dist/css/styles.css'; 
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarHeader, SidebarContent} from 'react-pro-sidebar';
import { AiOutlineIdcard } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { SiGnuprivacyguard } from "react-icons/si";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaRegHandshake } from "react-icons/fa";
import PersonalInfo from './account-setting/personal-info';
import PaymentsPayouts from './account-setting/payments-payouts';
import Notfications from './account-setting/notifications';
import Temp from './account-setting/temp';
import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch,
    Redirect
} from 'react-router-dom'; 

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePersonalInfo: true,
        }; 

    }

    // componentDidMount=()=>{
    //     if(window.location.pathname.toLowerCase() !=="/login" && window.location.pathname.toLowerCase() !=="/signup")
    //     {
    //       // console.log(window.location.pathname.toLowerCase()," !== ","/nan")
           
    //       // console.log("target:",sessionStorage.getItem("targetURL"),":",window.location.pathname)
    //       if(!sessionStorage.getItem("id"))
    //       {
    //         sessionStorage.setItem("targetURL",window.location.pathname)
    //         document.getElementById("GoToLoginPage").click()
    //       }
    //       else
    //         sessionStorage.removeItem("targetURL")
    //     }
    //     else
    //     {
    //       sessionStorage.setItem("targetURL","/")
    //     }
          
    //   }



    handleActivation = (b) =>{
        if (b === 1) {
            this.setState({
                activePersonalInfo: true,
            });    
        }
        if (b === 2) {
            this.setState({
                activePersonalInfo: false,
            });    
        }

    }

    render() { 
        return ( 
            <Router>
            <div className="container m-0">
                <div className="setting-navbar">
                    hi this is navbar
                </div>
                <div className="setting-main row">
                    <div className="setting-left col-3">
                        <ProSidebar className="setting-sideBar">
                            <SidebarHeader>
                                <h4 className="d-flex justify-content-center">Settings</h4>
                            </SidebarHeader>
                            <SidebarContent>
                                <Menu iconShape="circle">
                                    <SubMenu defaultOpen icon={<AiOutlineIdcard />} title="Account settings">
                                        {!this.state.activePersonalInfo? 
                                            <MenuItem onClick={() => this.handleActivation(1)}>
                                                Personal information
                                                <Link to="/personalInfo" />
                                            </MenuItem> :
                                            <MenuItem onClick={() => this.handleActivation(1)} active>
                                                Personal information
                                                <Link to="/personalInfo" />
                                            </MenuItem>
                                        }
                                        <MenuItem onClick={() => this.handleActivation(2)}>
                                            Payments and payouts
                                            <Link to="/paymentsPayouts" />
                                        </MenuItem>
                                        <MenuItem onClick={() => this.handleActivation(2)}>
                                            Notifications
                                            <Link to="/notifications" />
                                        </MenuItem>
                                    </SubMenu>

                                    <SubMenu icon={<AiOutlineHome />} title="Hosting">
                                        <MenuItem onClick={() => this.handleActivation(2)}>
                                             List your space
                                            <Link to="/listSpace" />
                                        </MenuItem>
                                        <MenuItem onClick={() => this.handleActivation(2)}>
                                            Learn about hosting
                                            <Link to="/learnHosting" />
                                        </MenuItem>
                                    </SubMenu>

                                    <SubMenu icon={<SiGnuprivacyguard />} title="Secutiry">
                                    <MenuItem onClick={() => this.handleActivation(2)}>
                                        Update your password
                                        <Link to="/updatePass"></Link>
                                    </MenuItem>
                                    <MenuItem onClick={() => this.handleActivation(2)}>
                                        Manage connected apps
                                        <Link to="/connectedApps"></Link>
                                    </MenuItem>
                                    </SubMenu>

                                    <SubMenu icon={<IoMdHelpCircleOutline />} title="Help & asked questions">
                                    <MenuItem onClick={() => this.handleActivation(2)}>
                                        Asked questions
                                        <Link to="/askedQuestions"></Link>
                                    </MenuItem>
                                    <MenuItem onClick={() => this.handleActivation(2)}>
                                        Help
                                        <Link to="/help"></Link>
                                    </MenuItem>
                                    </SubMenu>
                                    
                                    <MenuItem onClick={() => this.handleActivation(2)} icon={<FaRegHandshake />}>
                                        Terms & aggreement
                                        <Link to="/terms"></Link>
                                    </MenuItem>
        


                                </Menu>
                            </SidebarContent>
                            <SidebarFooter>
                                This is footer
                            </SidebarFooter>
                        </ProSidebar>

                    </div>

                    <div className="setting-center col-9">
                     
                            <Route
                                exact
                                path="/"
                                render={() => {
                                    return (
                                        
                                    <Redirect to="/personalInfo" />
                                    )
                                }}
                            />
                            <Route exact path="/personalInfo" component={PersonalInfo} />
                            <Route exact path="/paymentsPayouts">
                                <PaymentsPayouts />
                            </Route>
                            <Route exact path="/notifications">
                                <Notfications />
                            </Route>
                            <Route exact path="/learnHosting">
                                <Temp />
                            </Route>
                            <Route exact path="/listSpace">
                                <Temp />
                            </Route>
                            <Route exact path="/updatePass">
                                <Temp />
                            </Route>
                            <Route exact path="/connectedApps">
                                <Temp />
                            </Route>
                            <Route exact path="/askedQuestions">
                                <Temp />
                            </Route>
                            <Route exact path="/help">
                                <Temp />
                            </Route>
                            <Route exact path="/terms">
                                <Temp />
                            </Route>
                  
                    </div>

   
                </div>
                <div className="setting-footer">
                    hi this is footer
                </div>
            </div>
            </Router>
         );
    }
}
 
export default MainPage;