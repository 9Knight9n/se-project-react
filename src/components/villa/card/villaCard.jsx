import React, {Component} from 'react';
import {Card, Carousel, Descriptions, Rate} from 'antd';
import './villacard.css'
import {Link} from "react-router-dom";


const { Meta } = Card;


class VillaCard extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        loading: false,
    };

    componentDidMount() {
        console.log('src',this.props.src)
    }


    render() {
        return (
            <div onClick={()=>document.getElementById('go-to-villa-id-'.concat(this.props.id)).click()}>
                <Link id={'go-to-villa-id-'.concat(this.props.id)} to={'/villa/villaProfile/?id='.concat(this.props.id)}/>
                <Card
                    loading={false}
                    hoverable
                    style={{ width: 320,height:'100%' }}
                    cover={
                            <img style={{width:'320px',
                                        height:'200px',objectFit: 'cover'}}
                                alt="example"
                                src={this.props.src}
                                />
                    }
                    >
                    <Meta
                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    // title={this.props.name}
                    // description="This is the description"
                    />
                    <Rate disabled defaultValue={1} count={1}/> {this.props.rate}
                    <Descriptions  column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                        <Descriptions.Item>{this.props.name}</Descriptions.Item>
                        <Descriptions.Item>
                            {this.props.addr}
                        </Descriptions.Item>
                        <Descriptions.Item>{this.props.cost} <small>/ dollar per night</small></Descriptions.Item>
                    </Descriptions>
                </Card>
            </div>
        );
    }
}


export default VillaCard;
