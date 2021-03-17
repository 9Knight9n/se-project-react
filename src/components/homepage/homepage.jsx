//@Sajad
import React, {Component, Fragment} from 'react';
import './homepage.css'
import Footer from "./footer";
import Navbar from "./navbar/navbar";

class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div id='homepage' className="d-flex flex-column">
                <Navbar/>





                <Footer/>
            </div>
        );
    }
}

export default Homepage;
