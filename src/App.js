import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Fragment} from "react";
import Homepage from "./components/homepage/homepage";
import Setting from "./components/settings/settings";

function App() {
  return (
      <Fragment>
        <Setting />
      </Fragment>
  );
}

export default App;
