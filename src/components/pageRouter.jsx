import React, {Component} from 'react';
import Nav_bar from "./homepage/navbar/navbar";
import Footer from "./homepage/footer";
import {Route, Switch} from "react-router-dom";
import SearchUser from "./homepage/searchUser/searchUser";
import Settings from "./settings/settings";
import Hosting from "./hosting/hosting";
import Homepage from "./homepage/homepage";

class PageRouter extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={'min-vh-100 d-flex flex-column'}>
                <Nav_bar/>
                <Switch>
                    <Route path="/settings/">
                        <Settings/>
                    </Route>
                    <Route path="/hosting/">
                        <Hosting/>
                    </Route>
                    <Route path="/">
                        <Homepage/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default PageRouter;
