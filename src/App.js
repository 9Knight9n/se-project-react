import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css';
import {Fragment} from "react";
import Homepage from "./components/homepage";

function App() {
  return (
      <Fragment>
        <Homepage/>
      </Fragment>
  );
}

export default App;
