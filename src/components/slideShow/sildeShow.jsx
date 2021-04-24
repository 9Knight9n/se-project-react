import React, { Component } from 'react';
import 'react-slideshow-image/dist/styles.css'
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import { Modal, ModalFooter, ModalHeader} from "react-bootstrap";
import sampleImage1 from '../villa/img/1.jpg';
import sampleImage2 from '../villa/img/2.jpg';
import sampleImage3 from '../villa/img/3.jpg';
import sampleImage4 from '../villa/img/4.jpg';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: sampleImage1 },
  { url: sampleImage2 },
  { url: sampleImage3 },
  { url: sampleImage4 },
];

class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    exit()
    {
        document.getElementById('redirect-to-villa-profile').click()
    }
    render() { 
        return ( 
            <Modal                       
            centered
            size={'lg'}
            animation
            height={600}
            show={true}
            onHide={this.exit}>
                <div>
                    <Link className={'display-none'} to="/villa/villaProfile"  id={'redirect-to-villa-profile'}/>
                    <Modal.Header closeButton={true}>
                        <div>
                            <h4>Photo Gallery</h4>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                    <div>
                        <SimpleImageSlider
                            width={750}
                            height={400}
                            images={images}
                            showNavs={true}
                            showBullets={true}
                        />
                    </div>
                    </Modal.Body>
                </div>
                <ModalFooter>
                    <button onClick={this.exit()} className="btn btn-primary">Close</button>
                </ModalFooter>
            </Modal>
         );
    }
}
 
export default SlideShow;