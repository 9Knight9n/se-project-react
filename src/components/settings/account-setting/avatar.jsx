import React, { Component } from 'react';
import editAvatar from '../../../assets/img/man.png';
import './avatar.css';
import SelectAvatar from '../../avatarEditor/selectAvatar';
import {Alert, Form, Modal, Spinner} from "react-bootstrap";
class Avatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preview: null,
            src : this.props.src,
            editing:false,
            showSelect:false,
          }
        this.onCrop = this.onCrop.bind(this)
        this.onClose = this.onClose.bind(this)
        this.hover = this.hover.bind(this)
        this.onSave = this.onSave.bind(this)

    }
    componentDidMount (){
        console.log("this is src : " + this.props.src)
    }

    editAvatar = () =>{
        
    }

    exit = () =>
    {
        this.props.exitModal()
    }

    onClose() {
        this.setState({preview: null})
    }

    hover(isHover){
        if(this.state.editing)
        {
            return
        }
        this.setState({showSelect:isHover})
    }
      
    onCrop(preview) {
        this.setState({preview})
        console.log(preview)
    }
    
      async onSave(){
          console.log("saved")
        // let src = this.state.preview
        // console.log("save button pressed")
        // console.log("current preview:",src)
        // this.setState({avatarChanged:true,src})
        // if(isExpired(sessionStorage.getItem("access")))
        // {
        //     console.log("renewing")
        //     token=await renewToken()
        // }
        // let token = sessionStorage.getItem("access")
        // token = "Bearer "+token;
        // const form = new FormData()
        // form.set("id",sessionStorage.getItem("id"))
        // form.set("Base64",this.state.preview)
        // const response3 =
        // await axios.post('http://127.0.0.1:8000/api/editprofilepicture/', form, {
        // headers: { 'Content-Type': 'multipart/form-data',
        //             'Authorization': token
        // },
        // })

        // sessionStorage.setItem("avatar",this.state.preview)

    }


    render() { 
        return (
            <Modal centered size={'sm'}
                backdrop="static"
                show={this.props.show}
                onHide={()=>this.exit()} >
                <Modal.Header closeButton>
                    <h5 style={{textAlign: "center"}}>Edit your profile avatar.</h5>
                </Modal.Header>
                <Modal.Body>
                    <div className="w-100 avatar">
                        <SelectAvatar className="w-100 h-100" src={this.state.src === ''? editAvatar: this.state.src }
                            onCrop={this.onCrop}
                            onClose={this.onClose}
                            onSave={this.onSave} side="30" />

                    </div>
                </Modal.Body>
            </Modal> 
         );
    }
}
 
export default Avatar;