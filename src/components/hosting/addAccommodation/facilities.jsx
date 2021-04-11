import React, {Component} from 'react';
import {Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
import beach_icon from "../../../assets/img/beach.png";
import './facilities.css'

class Facilities extends Component {
    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }

    state = {
        facilities : [
            {src:
                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="washer" role="img"
                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 446 512"
                       className="svg-inline--fa fa-washer fa-w-14 fa-9x">
                    <path fill="currentColor"
                          d="M384-1H64A64 64 0 0 0 0 63v416a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V63a64 64 0 0 0-64-64zm32 480H32V63a32 32 0 0 1 32-32h320a32 32 0 0 1 32 32zM80 95a16 16 0 1 0-16-16 16 16 0 0 0 16 16zm64 0a16 16 0 1 0-16-16 16 16 0 0 0 16 16zm80 32a160 160 0 1 0 160 160 160 160 0 0 0-160-160zm0 288a128 128 0 1 1 128-128 128.14 128.14 0 0 1-128 128zm36.87-131.66a51.23 51.23 0 0 1-73.74 0A51.81 51.81 0 0 1 150 299c-7.71 0-14.74-2.15-21.31-5.16C132.27 343.53 173.41 383 224 383s91.73-39.47 95.31-89.16c-6.57 3-13.6 5.16-21.31 5.16a51.81 51.81 0 0 1-37.13-15.66z"
                          className=""/>
                </svg>
                ,id:0,label:'Washing machine'},
            {src:
                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="air-conditioner" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                         className="svg-inline--fa fa-air-conditioner fa-w-18 fa-9x">
                        <path fill="currentColor"
                              d="M544,0H32A32,32,0,0,0,0,32V192a32,32,0,0,0,32,32H544a32,32,0,0,0,32-32V32A32,32,0,0,0,544,0Zm0,192H32V32H544ZM72,160H504a8,8,0,0,0,8-8V136a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v16A8,8,0,0,0,72,160ZM224,424a56,56,0,0,1-56,56H152a56.09,56.09,0,0,1-54.79-67.76c5.36-26.18,29.68-44.24,56.4-44.24H168a8,8,0,0,0,8-8V344a8,8,0,0,0-8-8H152a88.09,88.09,0,0,0-87.57,96.78C68.88,478.5,110,512,155.91,512H168a88,88,0,0,0,88-88V256H224ZM420.1,304H408a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8h16a56.09,56.09,0,0,1,54.79,67.76c-5.36,26.18-29.68,44.24-56.4,44.24H408a56,56,0,0,1-56-56V256H320V392a88,88,0,0,0,88,88h16a88.09,88.09,0,0,0,87.57-96.78C507.12,337.5,466,304,420.1,304Z"
                              className=""/>
                    </svg>
                ,id:1,label:'Air-conditioner'},
        ],
        selectedItems : new Set([])
    }

    onSelect(id){
        if(this.state.selectedItems.has(id))
        {
            this.state.selectedItems.delete(id)
        }
        else
            this.state.selectedItems.add(id)
        this.forceUpdate()
    };

    render() {
        return (
            <React.Fragment>
                <Modal.Header closeButton={true}>
                    Specify accommodation facilities
                </Modal.Header>
                <Modal.Body>
                    <div className={'row m-2'} id={'facilities'}>
                        {this.state.facilities.map((facility=>
                        <div key={facility.id} className={'col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 mb-4 '}
                                onClick={()=>this.onSelect(facility.id)} >
                            <div className={'fade-in-overlay'}>
                                {/*<img className={'w-100 image'}*/}
                                {/*    src={facility.src}/>*/}
                                <div className={'w-100 image'}>
                                    <div className={'pl-4 pr-4 pt-4 pb-3'}>
                                        {facility.src}
                                    </div>
                                </div>
                                <div className={"overlay".concat(this.state.selectedItems.has(facility.id)?' selected border-success':'')}>
                                    {this.state.selectedItems.has(facility.id)?
                                    <React.Fragment>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                             fill="green" className=" mt-2 ml-2 bi bi-check-circle-fill"
                                             viewBox="0 0 16 16">
                                            <path
                                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                        </svg>
                                        <div className="text">
                                            {facility.label}
                                        </div>
                                    </React.Fragment>:""}
                                </div>
                            </div>
                            <label className={'mb-2 text-center w-100'}>
                                {facility.label}
                            </label>
                        </div>
                        ))}
                    </div>
                </Modal.Body>
                <Modal.Footer className={'w-100'}>
                    <Link to={'/hosting/addaccommodation/categories/'}>
                        <button className={'btn btn-outline-secondary'}>back</button>
                    </Link>
                    <Link to={'/hosting/addaccommodation/photos/'}>
                        <button className={'btn btn-outline-primary'}>next</button>
                    </Link>
                </Modal.Footer>
            </React.Fragment>
        );
    }
}

export default Facilities;
