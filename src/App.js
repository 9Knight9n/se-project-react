import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Component, Fragment} from "react";
import {BrowserRouter} from "react-router-dom";
import PageRouter from "./components/pageRouter";
import {ToastContainer} from "react-toastify";
import {eventViewport} from "./components/util";
import Chat from "./components/chat/chat";
import {sendToken, getMessaging} from './components/firebase'
import {STORAGE_KEY, WEB_PUSH_CERTIFICATE} from "./components/constants";

class App extends Component {
    componentDidMount() {
        window.onresize = () => eventViewport();
        window.onload = () => eventViewport();



        let msg = getMessaging();
        msg.onMessage((payload)=>{
            console.log('message:',payload)
        });
    }

    render() {
        return (
            <Fragment>
                <ToastContainer/>
                <BrowserRouter>
                    <PageRouter/>
                </BrowserRouter>
                <Chat/>
            </Fragment>
        );
    }
}

export default App;
