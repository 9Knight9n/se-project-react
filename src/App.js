import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import PageRouter from "./components/pageRouter";
import { ToastContainer } from "react-toastify";
import { eventViewport } from "./components/util";
import Chat from "./components/chat/chat";

class App extends Component {
  componentDidMount() {
    window.onresize = () => eventViewport();
    window.onload = () => eventViewport();
  }

  render() {
    return (
      <Fragment>
        <ToastContainer />
        <BrowserRouter>
          <PageRouter />
        </BrowserRouter>
        <Chat />
      </Fragment>
    );
  }
}

export default App;
