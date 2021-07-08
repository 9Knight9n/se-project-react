import React, {Component} from "react";
import "../hosting/hosting.css";
import {Alert, Button, Form, Modal, Spinner} from "react-bootstrap";
import Navbar from "../homepage/navbar/navbar";
import Footer from "../homepage/footer";
import AddAccommodation from "./addAccommodation/addAccommodation";
import {Link, Route, Switch} from "react-router-dom";
import SearchUser from "../homepage/searchUser/searchUser";
import host_bg from "../../assets/img/homepage-bg-5.jpg";
import {Element as SElement} from "react-scroll";
import VillaCarousel from "../villa/card/villaCarousel";
import { API_USER_HOSTED, API_USER_RESERVED} from "../constants";

class Hosting extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div
                className={"container-fluid"}
                style={{paddingTop: "10%", minHeight: "100vh"}}
            >
                <Switch>
                    <Route path="/hosting/addaccommodation/">
                        <AddAccommodation/>
                    </Route>

                    <Route path="/hosting/">
                        <div
                            style={{height: '100vh'}}
                            className={" d-flex m-auto w-100"}
                        >
                            <div className={"w-100 h-100 d-flex flex-column"}>
                                <h4
                                    className={" mb-4"}
                                    style={{fontFamily: "cursive", marginLeft: "10%"}}
                                >
                                    Become a host:
                                </h4>
                                <div
                                    style={{
                                        background: "url(" + host_bg + ")",
                                        borderRadius: "1.5rem",
                                    }}
                                    className={
                                        "d-flex  mb-auto ml-auto mr-auto become-host-div-bg pr-5"
                                    }
                                >
                                    <Link to={"/hosting/addaccommodation/categories/"}
                                          className={"ml-auto  mt-auto mb-auto mr-5"}
                                          style={{height: "fit-content"}}
                                    >
                                        <Button className={"btn btn-primary w-auto hover-effect"}>
                                            Add Accommodation
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <VillaCarousel url={API_USER_HOSTED} cardSize={parseInt(this.state.cardsSize)} title={'Hosting places:'} noNum={true}/>
                        <VillaCarousel url={API_USER_RESERVED} cardSize={parseInt(this.state.cardsSize)} title={'Reserved places:'} noNum={true}/>

                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Hosting;
