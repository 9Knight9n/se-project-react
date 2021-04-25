import React, { Component } from 'react';
import './villaProfile.css';
import sampleImage1 from '../villa/img/1.jpg';
import sampleImage2 from '../villa/img/2.jpg';
import sampleImage3 from '../villa/img/3.jpg';
import sampleImage4 from '../villa/img/4.jpg';
import sampleProfileImg from '../../assets/img/default-profile-picture.jpg';
import plusImg from '../../assets/img/plus.png';
import minusImg from '../../assets/img/minus.png';
import { Link } from "react-router-dom";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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
            checkIn: new Date().toLocaleString(),
            checkOut: new Date().toLocaleString(),
            minCheckOut: '04/25/2021',
            passangers: 1,
        }
    }

    handleCheckInChange = (e) => {
        if (this.state.checkOut > this.state.checkIn){
            this.setState({
                checkIn: e,
                minCheckOut: e,
            })
            return;
        }
        this.setState({
            checkIn: e,
            minCheckOut: e,
            checkOut: e,
        })
        console.log(e)
    }

    handleCheckOutChange = (e) => {
        this.setState({
            checkOut: e
        })
        console.log("sub : " + (e-this.state.checkIn))

    }

    handleCounter = (select,operator) =>{
        if (select === 1 && operator === "+" && this.state.passangers < this.state.placeMaxCapacity){
            this.setState({
                passangers: this.state.passangers + 1
            })
            return;
        }
        if (select === 1 && operator === "-" && this.state.passangers > 1){
            this.setState({
                passangers: this.state.passangers - 1
            })
            return;
        }
    }   
    render() { 
        return ( 

            <div className="villaProfile-main ml-4 mr-4">
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
                                    <Link to="/villa/villaProfile/villaGallery/">
                                        <img alt="villa-image1" src={sampleImage1} />
                                    </Link>
                                </div>
                                <div className="img2 col">
                                    <Link to="/villa/villaProfile/villaGallery/">
                                        <img alt="villa-image2" src={sampleImage2} />
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="img3 col">
                                    <Link to="/villa/villaProfile/villaGallery/">
                                        <img alt="villa-image3" src={sampleImage3} />
                                    </Link>
                                    <Link to="/villa/villaProfile/villaGallery/">
                                        <button className="btn btn-light">Show all photos</button>
                                    </Link>
                                </div>
                                <div className="img4 col">
                                    <Link to="/villa/villaProfile/villaGallery/">
                                        <img alt="villa-image4" src={sampleImage4} />
                                    </Link>
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
                            
                            <div className="villaProfile-placeDetail">
                                <div className="villaProfile-placeDescription">
                                    <h5>About villa </h5>
                                    <p>{this.state.placeDescription}</p>
                                </div>
                            </div>

                            <div className="villaProfile-placeDetail">
                                <div className="villaProfile-placeCapacity">
                                    <h5>Capacity </h5>
                                    <p>Normal : {this.state.placeNormalCapacity} , Maximum : {this.state.placeMaxCapacity}</p>
                                </div>
                            </div>

                            <div className="villaProfile-placeDetail">
                                <div className="villaProfile-placeArea">
                                    <h5>Area </h5>
                                    <p>{this.state.placeArea} Meters</p>
                                </div>
                            </div>

                            <div className="villaProfile-placeDetail">
                                <div className="villaProfile-placeArea">
                                    <h5>Villa space </h5>
                                    <p>Bedrooms : {this.state.numOfBedrooms} , bathrooms : {this.state.numOfBathrooms} , Showers : {this.state.numOfShowers}</p>
                                </div>
                            </div>

                            <div className="villaProfile-placeDetail">
                                <div className="villaProfile-placeArea">
                                    <h5>Bed set </h5>
                                    <p>DoubleBeds : {this.state.numOfDoubleBeds} , SignleBeds : {this.state.numOfSingleBeds}</p>
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
                        <div className="villaProfile-title ml-4">
                            <h5>Reservation</h5>
                            <div className="villaProfile-subtitle"></div>
                        </div>
                        <div className="col-xl-12 ml-4">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <KeyboardDatePicker
                                        width={50}
                                        disablePast
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Select the arrival date"
                                        format="MM/dd/yyyy"
                                        value={this.state.checkIn}
                                        onChange={this.handleCheckInChange}
                                        minDateMessage=""
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                    </div>

                                    <div className="col-xl-6">
                                        <KeyboardDatePicker
                                        width={50}
                                        disablePast
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Select the departure date"
                                        minDate={this.state.minCheckOut}
                                        // openTo={this.state.checkIn}
                                        format="MM/dd/yyyy"
                                        value={this.state.checkOut}
                                        onChange={this.handleCheckOutChange}
                                        minDateMessage=""
                                        strictCompareDates={true}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                    </div>
                                </div>
                            </MuiPickersUtilsProvider>
                        </div>
                        <div className="villaProfile-counter ml-4 col-xl-12">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="row">
                                        <div className="col-xl-6 mt-2">                  
                                            <label className="mt-2" htmlFor="villaProfile-counter">number of passengers</label>
                                            <div className="villaProfile-option">
                                                <div className="d-flex flex-row villaProfile-counter justify-content-start w-100">
                                                    <img name="passangers" onClick={(select, operator)=>this.handleCounter(1,"-")} className="" alt="minus icon" src={minusImg} />
                                                    <div data-testid="villaProfile-passangers" className="villaProfile-counter-number"><span className="profileVilla-numOfPassanger">{this.state.passangers}</span></div>
                                                    <img name="passangers" onClick={(select, operator)=>this.handleCounter(1,"+")} className="" alt="plus icon" src={plusImg} />
                                                </div>
                                            </div> 
                                        </div>
                                        <div className="col-xl-6 mt-4 villaProfile-reserveButton">
                                            <button className="btn btn-primary">Reserve</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="villaProfile-footer">

                </div>
            </div>
         );
    }
}
 
export default VillaProfile;