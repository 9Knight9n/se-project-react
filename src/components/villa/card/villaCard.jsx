import React, {Component} from 'react';
import { Card, Carousel  } from 'antd';
import './villacard.css'


const { Meta } = Card;


class VillaCard extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Card
                    style={{ width: 300 }}
                    cover={
                        <Carousel autoplay>
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                        </Carousel>

                    }
                    >
                    <Meta
                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                    />
                </Card>
            </div>
        );
    }
}


export default VillaCard;
