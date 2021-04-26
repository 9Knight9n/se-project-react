import React, { Component } from 'react';
import './villaProfile.css';
import sampleImage1 from '../img/1.jpg';
import sampleImage2 from '../img/2.jpg';
import sampleImage3 from '../img/3.jpg';
import sampleImage4 from '../img/4.jpg';
import sampleProfileImg from '../../../assets/img/default-profile-picture.jpg';
import plusImg from '../../../assets/img/plus.png';
import minusImg from '../../../assets/img/minus.png';
import { Link, Route, Switch } from "react-router-dom";
import 'date-fns';
import Reserve from '../reservation/reserve';
import SlideShow from './slideShow/sildeShow';

class VillaProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hostName: "Ali Ebadi",
            placeName: "Seaside villa",
            placeDescription: "Seaside luxury villa near the sea and view of jungle.",
            placeArea: 150 ,
            placeNormalCapacity: 4,
            placeMaxCapacity: 5,
            numOfBedrooms: 4,
            numOfBathrooms: 2,
            numOfShowers: 2,
            numOfSingleBeds: 1,
            numOfDoubleBeds: 4,
            minCheckOut: '04/25/2021',
            showGallary: false,
        }
    }

    exit = () =>
    {
        this.setState({
            showGallary: false,
        })
    }

    showGallary = () =>{
        this.setState({
            showGallary:true
        })
    }

 
    render() { 
        return ( 

            <div className="villaProfile-main ml-4 mr-4">
                <SlideShow show={this.state.showGallary} exit={this.exit} />
                <div className="villaProfile-header">
                    <div className="villaProfile-title">
                        <h4>Seaside villa</h4>
                        <div className="villaProfile-subTitle">
                            <h6>Iran,Tehran,Tehran</h6>
                        </div>
                    </div>  
                </div>

                <div className="villaProfile-body">
                    <div className="villaProfile-attributes row">
                        <div className="villaProfile-gallery col-xl-6">
                            <div className="mb-4 row">
                                <div className="img1 col">
                                    <img onClick={this.showGallary} alt="villa-image1" src={sampleImage1} />
                                </div>
                                <div className="img2 col">
                                    <img onClick={this.showGallary} alt="villa-image2" src={sampleImage2} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="img3 col">
                                    <img onClick={this.showGallary} alt="villa-image3" src={sampleImage3} />
                                    <button onClick={this.showGallary} className="btn btn-light">Show all photos</button>
                                </div>
                                <div className="img4 col">
                                    <img onClick={this.showGallary} alt="villa-image4" src={sampleImage4} />
                                </div>    
                            </div>
                            
                        </div>

                        <div className="villaProfile-details col-xl-6 mt-2">


                            <div className="villaProfile-placeDetail row">
                                <div className="villaProfile-title col-8">
                                    <h5>{this.state.placeName}</h5>
                                    <div className="villaProfile-subtitle">
                                        <h6>hosted by {this.state.hostName}</h6>
                                    </div>
                                </div>
                                
                                <div className="villaProfile-hostAvatar col-4">
                                    <img alt="profile-image" src={localStorage.getItem("profileAvatar")? localStorage.getItem("profileAvatar"): sampleProfileImg} />
                                </div>
                            </div>
                            
                            <div className="villaProfile-placeDetail mt-4">
                                <div className="villaProfile-placeDescription">
                                    <h5>About villa </h5>
                                    <p>{this.state.placeDescription}</p>
                                </div>
                            </div>

                            <div className="villaProfile-placeDetail mt-4">
                                <div className="villaProfile-placeCapacity">
                                    <h5>Capacity </h5>
                                    <p>Normal : {this.state.placeNormalCapacity} , Maximum : {this.state.placeMaxCapacity}</p>
                                </div>
                            </div>

                            <div className="villaProfile-placeDetail mt-4">
                                <div className="villaProfile-placeArea">
                                    <h5>Area </h5>
                                    <p>{this.state.placeArea} Meters</p>
                                </div>
                            </div>

                            <div className="villaProfile-placeDetail mt-4">
                                <div className="villaProfile-placeArea">
                                    <h5>Villa space </h5>
                                    <p>Bedrooms : {this.state.numOfBedrooms} , bathrooms : {this.state.numOfBathrooms} , Showers : {this.state.numOfShowers}</p>
                                </div>
                            </div>

                            <div className="villaProfile-placeDetail mt-4">
                                <div className="villaProfile-placeArea">
                                    <h5>Bed set </h5>
                                    <p>DoubleBeds : {this.state.numOfDoubleBeds} , SignleBeds : {this.state.numOfSingleBeds}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="villaProfile-facilities row mt-4">

                        <div className="col-xl-6">
                            <div className="villaProfile-title col-8">
                                <h5>Amentities</h5>
                                <div className="villaProfile-subtitle">
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="villaProfile-title col-8">
                                <h5>Location</h5>
                                <div className="villaProfile-subtitle">
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="villaProfile-rules row mt-4">
                        <div className="col-xl-6">
                            <div className="villaProfile-title col-8">
                                <h5>Host rules</h5>
                                <div className="villaProfile-subtitle">
                                </div>
                            </div>
                            <div className="ml-2">
                                <p>
                                    1. You can not smoke in villa.
                                </p>
                                <p>
                                    2. You can not smoke in villa.
                                </p>
                                <p>
                                    3. You can not smoke in villa.
                                </p>
                                <p>
                                    4. You can not smoke in villa.
                                </p>
                            </div>

                        </div>

                        <div className="col-xl-6">
                            <div className="villaProfile-title col-8">
                                <h5>Cancellation rules</h5>
                                <div className="villaProfile-subtitle">
                                </div>
                            </div>
                            <div className="ml-2">
                                <p>
                                    1. You can not smoke in villa.
                                </p>
                                <p>
                                    2. You can not smoke in villa.
                                </p>
                                <p>
                                    3. You can not smoke in villa.
                                </p>
                                <p>
                                    4. You can not smoke in villa.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="villaProfile-reservation row mt-4">
                        <div className="col-xl-6 mt-4 villaProfile-reserveButton">
                            <Link to="/villa/villaProfile/reserve/">
                                <button className="btn btn-primary">Reserve</button>  
                            </Link>
                        </div>
                    </div>
                    <Switch>
                        <Route path="/villa/villaProfile/reserve/">
                            <Reserve placeMaxCapacity={this.state.placeMaxCapacity}/>
                        </Route>
                    </Switch>
                </div>

                <div className="villaProfile-footer">

                </div>
            </div>
         );
    }
}
 
export default VillaProfile;