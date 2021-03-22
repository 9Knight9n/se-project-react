import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class CardBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}; 

    }
    render() { 
        return ( 
            <div>
                <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        {/* <Card.Title></Card.Title> */}
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text> */}
                        <Button variant="primary">{this.props.title}</Button>
                    </Card.Body>
                </Card>
            </div>
         );
    }
}
 
export default CardBox;