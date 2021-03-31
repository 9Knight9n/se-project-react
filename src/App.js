import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Fragment} from "react";
import Homepage from "./components/homepage/homepage";
import Settings from "./components/settings/settings";

function App() {
  return (
      <Fragment>
        <Settings />
      </Fragment>
  );
}

export default App;
