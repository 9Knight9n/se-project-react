import React, {Component} from 'react';
import beach_icon from '../../../assets/img/beach.png'
import './categories.css'
import {Modal} from "react-bootstrap";
import {Route, Switch} from "react-router-dom";

class Categories extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        categories : [
            {src:beach_icon,id:0,label:'Coastal'},
            {src:beach_icon,id:1,label:'no label'},
            {src:beach_icon,id:2,label:'no label'},
            {src:beach_icon,id:3,label:'no label'},
            {src:beach_icon,id:4,label:'no label'},
        ],
        selectedItem:null,
    }

    render() {
        return (
            <React.Fragment>
                <Modal.Header closeButton={true}>
                    Select your hosting Category
                </Modal.Header>
                <Modal.Body>
                    <div className={'row m-2'} id={'categories'}>
                        {this.state.categories.map((category=>
                        <div className={'col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 '}
                                onClick={()=>this.setState({selectedItem:category.id})} >
                            <div className={'fade-in-overlay'}>
                                <img className={'w-100 image'}
                                    src={category.src} key={category.id}/>
                                <div className={"overlay".concat(category.id===this.state.selectedItem?' selected border-success':'')}>
                                    {category.id===this.state.selectedItem?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                         fill="green" className=" mt-2 ml-2 bi bi-check-circle-fill"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                    </svg>:""}
                                    <div className="text">
                                        {category.label}
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className={'ml-auto btn btn-outline-primary'}>Next</button>
                </Modal.Footer>
            </React.Fragment>
        );
    }
}

export default Categories;
