import React, { Component } from 'react';
import './reserve.css';
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import { Modal, ModalFooter, ModalHeader} from "react-bootstrap";
import plusImg from '../../../assets/img/plus.png';
import minusImg from '../../../assets/img/minus.png';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import date from 'date-and-time';
import {STORAGE_KEY} from "../../constants";
import { toast, ToastContainer } from 'react-toastify';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const { size } = 20;
const now = new Date();

class Reserve1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passangers: 1,
            checkIn: new Date().toLocaleString(),
            checkOut: new Date().toLocaleString(),
            currentDate:null,
            price: this.props.PlacePrice,
            total: this.props.PlacePrice+" $",
            stayingDays:1,
            size:null,
            invalidDate: false,
            disableBtn:true,
        }
    }

    componentDidMount = () =>{
        console.log(this.props.PlacePrice)
        this.setState({
           currentDate: date.format(now, 'YYYY/MM/DD HH:mm:ss'), 
        })
        console.log("moment : "+ moment(now, dateFormat))
        document.addEventListener(STORAGE_KEY+'screen-size-changed', (event) => this.setState({size: event.detail}));
    }

    exit()
    {
        document.getElementById('redirect-to-villa-profile').click()
    }

    handleSubmit = () =>{
        let dataIsValid = false;
        if (!this.state.invalidDate){
            dataIsValid = true
        }else if (this.state.invalidDate){
            dataIsValid = false
            return;
        }

        if (dataIsValid){
            document.getElementById("goToReserve2").click();
        }

    }

    onDateChange = (range) =>{
        if (range !== null){
            let startDate = range[0].format();
            let endDate = range[1].format();
            let a = moment(startDate);
            let b = moment(endDate);
            b.diff(a, 'days')  // =1
            console.log('duration  ',b.diff(a, 'days')); 
            // let Difference_In_Time = endDate.getTime() - startDate.getTime();
            // let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            this.setState({
                disableBtn: false,
                stayingDays: b.diff(a, 'days'),
                checkIn: startDate,
                checkOut: endDate,
                invalidDate: false
            })
            this.calculateCost(b.diff(a, 'days'))
            console.log('start date  ',startDate); 
            console.log("end date  ",endDate);
        }
        if (range === null){
            this.setState({invalidDate: true, disableBtn: true})
        }
    }

    disabledDate = current => {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    }


    handleCounter = (select,operator) =>{
        if (select === 1 && operator === "+" && this.state.passangers < this.props.placeMaxCapacity){
            this.setState({
                passangers: this.state.passangers + 1
            })
            return;
        }
        else if (operator === "+") {
            toast.error("This option can not be more than this value.")
        }
        if (select === 1 && operator === "-" && this.state.passangers > 1){
            this.setState({
                passangers: this.state.passangers - 1
            })
            return;
        }else if (operator === "-") {
            toast.error("This option can not be less than this value.")
        }
    }  

    calculateCost = (stayingDays) =>{
        let total = stayingDays * this.state.price
        console.log("total : "+ total)
        this.setState({total: total+" $"})
    }

    render() { 
        return ( 
            <React.Fragment>
                <div>
                    <ToastContainer/>
                    <Link className={'display-none'} to="/villa/villaProfile"  id={'redirect-to-villa-profile'}/>
                    <Modal.Header closeButton={true}>
                        <div>
                            <h4>
                                Step One
                            </h4>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                    <div>
                        <div className="reserver-datePicker">
                            <Space className="w-100" direction="vertical" size={12}>
                                <RangePicker id="reserve-rangePicker" disabledDate={current => this.disabledDate(current)} format={dateFormat} onChange={this.onDateChange} size={20} />
                                {this.state.invalidDate? <p className="ml-2 reserve-invalid-date">You must specify your travel date!</p> : ''}
                            </Space>
                        </div>

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
                    <button disabled={this.state.disableBtn} onClick={this.handleSubmit} className="btn btn-outline-primary">Next</button>
                    <Link id="goToReserve2" to="/villa/villaProfile/reserve/2/">
                        
                    </Link>
                    
                </ModalFooter>
            </React.Fragment>

         );
    }
}
 
export default Reserve1;