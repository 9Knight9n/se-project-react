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
import Terms from './account-setting/term&conditions';
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
            activePay: false,
            activeNotif: false,
            activeAskedQ: false,
            activeHelp: false,
            activeTerms: false,
            activeListSpace: false,
            activeLearnHosting: false,
            activeUpdatePass: false,
            activeConnectedApps: false,
            collapsed: false,
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
                activeTerms: false,
                activeAskedQ: false,
                activeHelp: false,
                activeNotif: false,
                activePay: false,
                activeListSpace: false,
                activeLearnHosting: false,
                activeUpdatePass: false,
                activeConnectedApps: false,
            });    
        }
        if (b === 2) {
            this.setState({
                activePersonalInfo: false,
                activeTerms: false,
                activeAskedQ: false,
                activeHelp: false,
                activeNotif: false,
                activePay: true,
                activeListSpace: false,
                activeLearnHosting: false,
                activeUpdatePass: false,
                activeConnectedApps: false,
            });    
        }
        if (b === 3){
            this.setState({
                activePersonalInfo: false,
                activeTerms: false,
                activeAskedQ: false,
                activeHelp: false,
                activeNotif: true,
                activePay: false,
                activeListSpace: false,
                activeLearnHosting: false,
                activeUpdatePass: false,
                activeConnectedApps: false,
            }) 
        }
        if (b === 4) {
            this.setState({
                activePersonalInfo: false,
                activeTerms: false,
                activeAskedQ: false,
                activeHelp: false,
                activeNotif: false,
                activePay: false,
                activeListSpace: true,
                activeLearnHosting: false,
                activeUpdatePass: false,
                activeConnectedApps: false,
            })
        }

        if (b === 5) {
            this.setState({
                activePersonalInfo: false,
                activeTerms: false,
                activeAskedQ: false,
                activeHelp: false,
                activeNotif: false,
                activePay: false,
                activeListSpace: false,
                activeLearnHosting: true,
                activeUpdatePass: false,
                activeConnectedApps: false,
            })
        }

        if (b === 6) {
            this.setState({
                activePersonalInfo: false,
                activeTerms: false,
                activeAskedQ: false,
                activeHelp: false,
                activeNotif: false,
                activePay: false,
                activeListSpace: false,
                activeLearnHosting: false,
                activeUpdatePass: true,
                activeConnectedApps: false,
            })
        }

        if (b === 7) {
            this.setState({
                activePersonalInfo: false,
                activeTerms: false,
                activeAskedQ: false,
                activeHelp: false,
                activeNotif: false,
                activePay: false,
                activeListSpace: false,
                activeLearnHosting: false,
                activeUpdatePass: false,
                activeConnectedApps: true,
            })
        }

        if (b === 8) {
            this.setState({
                activePersonalInfo: false,
                activeTerms: false,
                activeAskedQ: true,
                activeHelp: false,
                activeNotif: false,
                activePay: false,
                activeListSpace: false,
                activeLearnHosting: false,
                activeUpdatePass: false,
                activeConnectedApps: false,
            })
        }

        if (b === 9) {
            this.setState({
                activePersonalInfo: false,
                activeTerms: false,
                activeAskedQ: false,
                activeHelp: true,
                activeNotif: false,
                activePay: false,
                activeListSpace: false,
                activeLearnHosting: false,
                activeUpdatePass: false,
                activeConnectedApps: false,
            })
        }

        if (b === 10) {
            this.setState({
                activePersonalInfo: false,
                activeTerms: true,
                activeAskedQ: false,
                activeHelp: false,
                activeNotif: false,
                activePay: false,
                activeListSpace: false,
                activeLearnHosting: false,
                activeUpdatePass: false,
                activeConnectedApps: false,
            })
        }

    }

    // handleCollapsed = () =>{
    //     this.setState({
    //         collapsed: !this.state.collapsed,
    //     })
    // }

    render() { 
        return ( 
            <Router>
            <div className="container m-0">
                <div className="setting-navbar">
                    hi this is navbar
                </div>
                <div className="setting-main row">
                    <div className="setting-left col-3">
                        <ProSidebar collapsed={this.state.collapsed} className="setting-sideBar">
                            <SidebarHeader>
                                <h4 className="d-flex justify-content-center">Settings</h4>
                                {/* <button onClick={this.handleCollapsed}>close</button> */}
                            </SidebarHeader>
                            <SidebarContent>
                                <Menu iconShape="circle">
                                    <SubMenu defaultOpen icon={<AiOutlineIdcard />} title="Account settings">
                                        <MenuItem onClick={() => this.handleActivation(1)} active={this.state.activePersonalInfo}>
                                            Personal information
                                            <Link to="/personalInfo" />
                                        </MenuItem>
                                        <MenuItem onClick={() => this.handleActivation(2)} active={this.state.activePay}>
                                            Payments and payouts
                                            <Link to="/paymentsPayouts" />
                                        </MenuItem>
                                        <MenuItem onClick={() => this.handleActivation(3)} active={this.state.activeNotif}>
                                            Notifications
                                            <Link to="/notifications" />
                                        </MenuItem>
                                    </SubMenu>

                                    <SubMenu icon={<AiOutlineHome />} title="Hosting">
                                        <MenuItem onClick={() => this.handleActivation(4)} active={this.state.activeListSpace}>
                                             List your space
                                            <Link to="/listSpace" />
                                        </MenuItem>
                                        <MenuItem onClick={() => this.handleActivation(5)} active={this.state.activeLearnHosting}>
                                            Learn about hosting
                                            <Link to="/learnHosting" />
                                        </MenuItem>
                                    </SubMenu>

                                    <SubMenu icon={<SiGnuprivacyguard />} title="Secutiry">
                                    <MenuItem onClick={() => this.handleActivation(6)}  active={this.state.activeUpdatePass}>
                                        Update your password
                                        <Link to="/updatePass"></Link>
                                    </MenuItem>
                                    <MenuItem onClick={() => this.handleActivation(7)} active={this.state.activeConnectedApps}>
                                        Manage connected apps
                                        <Link to="/connectedApps"></Link>
                                    </MenuItem>
                                    </SubMenu>

                                    <SubMenu icon={<IoMdHelpCircleOutline />} title="Help & asked questions">
                                    <MenuItem onClick={() => this.handleActivation(8)} active={this.state.activeAskedQ}>
                                        Asked questions
                                        <Link to="/askedQuestions"></Link>
                                    </MenuItem>
                                    <MenuItem onClick={() => this.handleActivation(9)} active={this.state.activeHelp}>
                                        Help
                                        <Link to="/help"></Link>
                                    </MenuItem>
                                    </SubMenu>
                                    
                                    <MenuItem onClick={() => this.handleActivation(10)} icon={<FaRegHandshake />} active={this.state.activeTerms}>
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
                                <Terms />
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