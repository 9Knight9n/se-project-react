import React, { Component } from 'react';
import './slideShow.css';
import 'react-slideshow-image/dist/styles.css'
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import { Modal, ModalFooter, ModalHeader} from "react-bootstrap";
import sampleImage1 from '../../img/1.jpg';
import sampleImage2 from '../../img/2.jpg';
import sampleImage3 from '../../img/3.jpg';
import sampleImage4 from '../../img/4.jpg';
import {STORAGE_KEY} from "../../../constants";
import {getViewport} from "../../../util";
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

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
            show={this.state.show}
            onHide={this.props.exit}>
                <div>
                    <Modal.Header closeButton={true}>
                        <div>
                            <h4>Photo Gallery</h4>
                        </div>
                    </Modal.Header>
                    <Modal.Body id="slideShow-modal-body">
                    <div className="slideShow">
                    <Carousel  className="h-100" dotPosition={"bottom"}>
                        <div>
                            <h3 style={contentStyle}><img className="w-100" src={sampleImage1}/></h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}><img className="w-100" src={sampleImage2}/></h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}><img className="w-100" src={sampleImage3}/></h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}><img className="w-100" src={sampleImage4}/></h3>
                        </div>
                    </Carousel>,
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