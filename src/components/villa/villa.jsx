import React, { Component } from 'react';
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import VillaProfile from './villaProfile/villaProfile';
import SlideShow from '../slideShow/sildeShow';
import Reserve from './reservation/reserve';
class Villa extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <Switch>
                    <Route exact path="/villa/villaProfile/">
                        <VillaProfile/>
                    </Route>
                    <Route path="/villa/villaProfile/villaGallery/">
                        <SlideShow/>
                    </Route>
                    <Route path="/villa/reserver/">
                        <Reserve/>
                    </Route>
                </Switch>
            </Router>
         );
    }
}
 
export default Villa;