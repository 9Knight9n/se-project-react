import React, { Component } from 'react';
import './slideShow.css';
import 'react-slideshow-image/dist/styles.css'
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import { Modal, ModalFooter, ModalHeader} from "react-bootstrap";
import sampleImage1 from '../../img/1.jpg';
import sampleImage2 from '../../img/2.jpg';
import sampleImage3 from '../../img/3.jpg';
import sampleImage4 from '../../img/4.jpg';
import SimpleImageSlider from "react-simple-image-slider";
import {STORAGE_KEY} from "../../../constants";
import {getViewport} from "../../../util";

const images = [
  { url: sampleImage1 },
  { url: sampleImage2 },
  { url: sampleImage3 },
  { url: sampleImage4 },
];

class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show,
            size:'',
        }
    }

    componentDidUpdate (prevProps){
        if (prevProps.show !== this.props.show){
            this.setState({show: this.props.show})
        }
    }

    componentDidMount (){
        document.addEventListener(STORAGE_KEY+'screen-size-changed', (event) => this.setState({size: event.detail}));
    }


    render() { 
        return ( 
            <Modal                       
            centered
            size={'lg'}
            animation
            height={600}
            show={this.state.show}
            onHide={this.props.exit}>
                <div>
                    <Modal.Header closeButton={true}>
                        <div>
                            <h4>Photo Gallery</h4>
                        </div>
                    </Modal.Header>
                    <Modal.Body id="slideShow-modal-body">
                    <div>
                        <SimpleImageSlider
                            width={this.state.size === 'md' || this.state.size === 'sm'? 498: this.state.size === 'xs'? 462: 798}
                            height={500}
                            images={images}
                            showNavs={true}
                            showBullets={true}
                        />
                    </div>
                    </Modal.Body>
                </div>
                {/* <ModalFooter>
                    <button onClick={this.props.exit} className="btn btn-primary">Close</button>
                </ModalFooter> */}
            </Modal>
         );
    }
}
 
export default SlideShow;