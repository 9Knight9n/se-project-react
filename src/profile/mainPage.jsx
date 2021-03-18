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



class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }; 

    }
    render() { 
        return ( 
            <div className="container m-0">
                <div className="setting-main row">
                    <div className="setting-left col">
                        <ProSidebar className="setting-sideBar">
                            <SidebarHeader>
                                <h4 className="d-flex justify-content-center">Setting</h4>
                            </SidebarHeader>
                            <SidebarContent>
                                <Menu iconShape="square">
                                    <SubMenu icon={<AiOutlineIdcard />} title="Account setting">
                                    <MenuItem>Personal information</MenuItem>
                                    <MenuItem>Payments and payouts</MenuItem>
                                    <MenuItem>Notifications</MenuItem>
                                    </SubMenu>

                                    <SubMenu icon={<AiOutlineHome />} title="Hosting">
                                    <MenuItem>List your space</MenuItem>
                                    <MenuItem>Learn about hosting</MenuItem>
                                    </SubMenu>

                                    <SubMenu icon={<SiGnuprivacyguard />} title="Secutiry">
                                    <MenuItem>Update your password</MenuItem>
                                    <MenuItem>Manage connected apps</MenuItem>
                                    </SubMenu>

                                    <SubMenu icon={<IoMdHelpCircleOutline />} title="Help & asked questions">
                                    <MenuItem>Asked questions</MenuItem>
                                    <MenuItem>Help</MenuItem>
                                    </SubMenu>
                                    
                                    <MenuItem icon={<FaRegHandshake />}>Terms & aggreement</MenuItem>
        


                                </Menu>
                            </SidebarContent>
                            <SidebarFooter>
                                This is footer
                            </SidebarFooter>
                        </ProSidebar>
                    </div>

                    <div className="setting-center col-8">
                        hi
                        {/* <PersonalInfo /> */}
                    </div>

                    <div className="setting-right bg-warning col">
                        3 of 3
                    </div>
                </div>
            </div>
         );
    }
}
 
export default MainPage;