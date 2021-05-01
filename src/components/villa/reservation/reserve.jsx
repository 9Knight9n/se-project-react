import React, { Component } from 'react';
import './reserve.css';
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import { Modal, ModalFooter, ModalHeader} from "react-bootstrap";
import plusImg from '../../../assets/img/plus.png';
import minusImg from '../../../assets/img/minus.png';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import date from 'date-and-time';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const { size } = 20;
const now = new Date();

class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passangers: 1,
            checkIn: new Date().toLocaleString(),
            checkOut: new Date().toLocaleString(),
            currentDate:null,
            price: 100,
            total: 100+" $",
            stayingDays:1,
        }
    }

    componentDidMount = () =>{
        this.setState({
           currentDate: date.format(now, 'YYYY/MM/DD HH:mm:ss'), 
        })
        console.log("moment : "+ moment(now, dateFormat))
         
    }

    exit()
    {
        document.getElementById('redirect-to-villa-profile').click()
    }

    onDateChange = (range) =>{
        let startDate = range[0].format();
        let endDate = range[1].format();
        
        console.log('start date  ',startDate); 
        console.log("end date  ",endDate);
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
                        <div className="reserver-datePicker">
                            <Space className="w-100" direction="vertical" size={12}>
                                <RangePicker disabledDate={current => this.disabledDate(current)} format={dateFormat} onChange={this.onDateChange} size={20} />
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
                    <button onClick={this.exit} className="btn btn-primary">Close</button>
                </ModalFooter>
            </Modal>
         );
    }
}
 
export default SlideShow;