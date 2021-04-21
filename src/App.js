import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Fragment} from "react";
import {BrowserRouter} from "react-router-dom";
import PageRouter from "./components/pageRouter";

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <PageRouter/>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
