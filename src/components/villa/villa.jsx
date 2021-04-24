import React, { Component } from 'react';
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import VillaProfile from './villaProfile';
import SlideShow from '../slideShow/sildeShow';
class Villa extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <Switch>
                    <Route exact path="/villa/villaProfile/">
                        <VillaProfile/>
                    </Route>
                    <Router>
                        <Route path="/villa/villaProfile/villaGallery/">
                            <SlideShow/>
                        </Route>
                    </Router>
                </Switch>
            </Router>
         );
    }
}
 
export default Villa;