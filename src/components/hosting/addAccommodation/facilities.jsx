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
            {src:beach_icon,id:0,label:'Coastal'},
            {src:beach_icon,id:1,label:'no label'},
            {src:beach_icon,id:2,label:'no label'},
            {src:beach_icon,id:3,label:'no label'},
            {src:beach_icon,id:4,label:'no label'},
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
                        <div key={facility.id} className={'col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 '}
                                onClick={()=>this.onSelect(facility.id)} >
                            <div className={'fade-in-overlay'}>
                                <img className={'w-100 image'}
                                    src={facility.src}/>
                                <div className={"overlay".concat(this.state.selectedItems.has(facility.id)?' selected border-success':'')}>
                                    {this.state.selectedItems.has(facility.id)?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                         fill="green" className=" mt-2 ml-2 bi bi-check-circle-fill"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                    </svg>:""}
                                    <div className="text">
                                        {facility.label}
                                    </div>
                                </div>
                            </div>
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
