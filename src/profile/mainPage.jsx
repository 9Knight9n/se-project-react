import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/personal-info.css';
import 'react-pro-sidebar/dist/css/styles.css'; 
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarHeader, SidebarContent} from 'react-pro-sidebar';
import PersonalInfo from './personal-info';
class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }; 

    }
    render() { 
        return ( 
            <div className="container m-0">
                <div className="profile-main row">
                    <div className="profile-left col">
                        <ProSidebar className="profile-sideBar">
                            <SidebarHeader>
                                <h4 className="d-flex justify-content-center">Profile</h4>
                            </SidebarHeader>
                            <SidebarContent>
                                <Menu iconShape="square">

                                    <SubMenu title="ACCOUNT SETTING">
                                    <MenuItem>Personal information</MenuItem>
                                    <MenuItem>Payments and payouts</MenuItem>
                                    <MenuItem>Notifications</MenuItem>
                                    </SubMenu>

                                    <SubMenu title="HOSTING">
                                    <MenuItem>List your space</MenuItem>
                                    <MenuItem>Learn about hosting</MenuItem>
                                    </SubMenu>

                                    <SubMenu title="HOSTING">
                                    <MenuItem>List your space</MenuItem>
                                    <MenuItem>Learn about hosting</MenuItem>
                                    </SubMenu>

                                    <SubMenu title="HOSTING">
                                    <MenuItem>List your space</MenuItem>
                                    <MenuItem>Learn about hosting</MenuItem>
                                    </SubMenu>

                                    <SubMenu title="HOSTING">
                                    <MenuItem>List your space</MenuItem>
                                    <MenuItem>Learn about hosting</MenuItem>
                                    </SubMenu>

                                    <SubMenu title="HOSTING">
                                    <MenuItem>List your space</MenuItem>
                                    <MenuItem>Learn about hosting</MenuItem>
                                    </SubMenu>

                                    <SubMenu title="HOSTING">
                                    <MenuItem>List your space</MenuItem>
                                    <MenuItem>Learn about hosting</MenuItem>
                                    </SubMenu>

                                </Menu>
                            </SidebarContent>
                            <SidebarFooter>
                                This is footer
                            </SidebarFooter>
                        </ProSidebar>
                    </div>

                    <div className="profile-center col-8">
                        <PersonalInfo />
                    </div>

                    <div className="profile-right bg-warning col">
                        3 of 3
                    </div>
                </div>
            </div>
         );
    }
}
 
export default MainPage;