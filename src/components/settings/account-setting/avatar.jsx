import React, { Component } from 'react';
import editAvatar from '../../../assets/img/man.png';
import './avatar.css';
import {Alert, Form, Modal, Spinner} from "react-bootstrap";
class Avatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgHovered: false,
        };

    }

    editAvatar = () =>{
        
    }

    exit = () =>
    {
        this.props.exitModal()
    }


    render() { 
        return (
            <Modal centered size={'sm'}
                backdrop="static"
                show={this.props.show}
                onHide={()=>this.exit()} >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <p style={{textAlign: "center"}}>Edit your profile avatar.</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="w-100 avatar">
                        <img onClick={this.editAvatar} className="avatarimage" onMouseEnter={() => this.setState({imgHovered: true})} onMouseLeave={() => this.setState({imgHovered: false})} alt="profile avatar" src={this.state.imgHovered? editAvatar : this.props.src} />
                    </div>
                </Modal.Body>
            </Modal> 
         );
    }
}
 
export default Avatar;