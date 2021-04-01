import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Fragment} from "react";
import Homepage from "./components/homepage/homepage";
import Settings from '../src/components/settings/settings'

import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Settings />
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
