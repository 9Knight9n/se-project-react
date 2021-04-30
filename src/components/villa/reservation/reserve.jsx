import React, { Component } from 'react';
import './reserve.css';
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import { Modal, ModalFooter, ModalHeader} from "react-bootstrap";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import plusImg from '../../../assets/img/plus.png';
import minusImg from '../../../assets/img/minus.png';

class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passangers: 1,
            checkIn: new Date().toLocaleString(),
            checkOut: new Date().toLocaleString(),
            price: 100,
            total: 100+" $",
            stayingDays:1,
        }
    }

    componentDidMount = () =>{
        this.setState({
            checkIn: document.getElementById("date-picker-checkIn").value,
            checkOut: document.getElementById("date-picker-checkOut").value
        })
    }

    exit()
    {
        document.getElementById('redirect-to-villa-profile').click()
    }

    handleCheckInChange = (e) => {
        if (this.state.checkOut > this.state.checkIn){
            // To calculate the time difference of two dates
            console.log("check in1 : "+e)
            let Difference_In_Time = this.state.checkOut.getTime() - e.getTime();

            // To calculate the no. of days between two dates
            let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            console.log( Difference_In_Days )
            this.setState({
                checkIn: e,
                minCheckOut: e,
                stayingDays: Difference_In_Days,
            })
            this.calculateCost(Difference_In_Days, this.state.price)

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
        // To calculate the time difference of two dates
        console.log("check in2 : "+ e)
        let Difference_In_Time = e.getTime() - this.state.checkIn.getTime();
        
        // To calculate the no. of days between two dates
        let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        console.log( Difference_In_Days )
        this.setState({
            checkOut: e.value,
            stayingDays: Difference_In_Days,
        })
        console.log('staying days : '+ Difference_In_Days)
        this.calculateCost(Difference_In_Days, this.state.price)
    }

    handleCounter = (select,operator) =>{
        if (select === 1 && operator === "+" && this.state.passangers < this.props.placeMaxCapacity){
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

    calculateCost = (stayingDays, price) =>{
        let total = stayingDays * price
        console.log("total : "+ total)
        this.setState({total: total+" $"})
    }

    render() { 
        return ( 
            <Modal                       
            centered
            size={'md'}
            animation
            height={600}
            show={true}
            onHide={this.exit}>
                <div>
                    <Link className={'display-none'} to="/villa/villaProfile"  id={'redirect-to-villa-profile'}/>
                    <Modal.Header closeButton={true}>
                        <div>
                            <h4>
                                Reservation
                            </h4>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                    <div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <div className="row">
                                <div className="col-xl-6">
                                    <KeyboardDatePicker
                                    width={50}
                                    disablePast
                                    margin="normal"
                                    id="date-picker-checkIn"
                                    label="Check in"
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
                                    id="date-picker-checkOut"
                                    label="Check out"
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
                        <div className="row reserve-counter-cost">
                            <div className="mt-2 col-xl-6">                  
                                <label className="mt-2" htmlFor="reserve-counter">number of passengers</label>
                                <div className="reserve-counter col-md-12 justify-content-center">
                                    <div className="d-flex flex-row justify-content-start w-100">
                                        <img name="passangers" onClick={(select, operator)=>this.handleCounter(1,"-")} className="" alt="minus icon" src={minusImg} />
                                        <div data-testid="reserve-passangers" className="reserve-counter-number"><b className="reserve-numOfPassanger pr-4 pl-4">{this.state.passangers}</b></div>
                                        <img name="passangers" onClick={(select, operator)=>this.handleCounter(1,"+")} className="" alt="plus icon" src={plusImg} />
                                    </div>
                                </div> 
                            </div>
                            <div className="mt-2 col-xl-6">                  
                                <label className="mt-2" htmlFor="reserve-cost">Total</label>
                                <div className="reserve-cost">
                                    <div className="d-flex flex-row justify-content-start w-100">
                                        <div data-testid="reserve-cost">
                                            <b className="reserve-price pr-4 pl-4">{this.state.stayingDays + " * " + this.state.price + " = " + this.state.total}
                                            </b>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    </Modal.Body>
                </div>
                <ModalFooter>
                    <button onClick={this.exit} className="btn btn-primary">Close</button>
                </ModalFooter>
            </Modal>
         );
    }
}
 
export default SlideShow;