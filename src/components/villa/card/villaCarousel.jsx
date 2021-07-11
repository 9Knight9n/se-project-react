import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import VillaCard from "./villaCard";
import {API_BASE_URL} from "../../constants";
import {getItem} from "../../util";
import axios from "axios";
import {Empty} from "antd";

let cardSize = 0;

class VillaCarousel extends Component {


    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);
        cardSize = this.props.cardSize;
    }


    state = {
        cards:[],
        empty:true,
        // cardSize:2,
        arr:[],
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.cardSize !== this.props.cardSize)
        {
            cardSize = this.props.cardSize;
            // if(this.state.cards.length>0)
            //     this.renderList();
            // this.setState({cardSize:2},this.renderList)
        }
    }


    async componentDidMount() {
        await this.loadCardList(this.props.url);
    }


    async loadCardList(url) {
        let config = {
            method: "get",
            url: url.toString().concat(this.props.addNum?"?number_of_villa=100":"") ,
            headers: {
                Authorization: "Token " + getItem("user-token"),
            },
        };
        let response = await axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                return response.data.data;
            })
            .catch(function (error) {
                console.log(error);
                return [];
            });
        console.log("============",url,response)
        // if (response.length>0)
            this.setState({cards: response});
        // else
        //     this.setState({cards:[]})
    }


    renderList() {
        // console.log('////',this.state.cards)
        // console.log('////',typeof this.state.cards.length)
        // console.log('////',typeof this.state.cardSize)
        // console.log('////',parseInt(this.state.cards.length )/ parseInt(this.state.cardsSize))
        let arr = [];
        for (let k = 0; k <= this.state.cards.length; k++) {
            // console.log('inside')
            let cardGroups = [];
            // console.log(typeof this.state.cardSize)
            // console.log(this.state.cardSize)
            // console.log(-5 < parseInt(this.state.cardsSize))
            console.log(cardSize)
            for (let z = 0; z < cardSize; z++) {
                console.log('inside2')
                console.log(this.state.cards)
                let card = this.state.cards[k * cardSize + z];
                if (!card) continue;
                console.log('passed')
                // console.log(card)
                cardGroups = [
                    ...cardGroups,
                    <VillaCard
                        name={card.name}
                        id={card.villa_id}
                        src={API_BASE_URL.substr(0, API_BASE_URL.length - 1).concat(
                            card.default_image_url?card.default_image_url:card.images[0]
                        )}
                        addr={card.country + ", " + card.state + ", " + card.city}
                        cost={card.price_per_night}
                        rate={card.rate__avg?card.rate__avg:card.rate}
                    />,
                ];
            }
            console.log(cardGroups)
            if (cardGroups.length > 0)
                arr = [
                    ...arr,
                    <Carousel.Item>
                        <div
                            style={{
                                borderRadius: "0.5rem",
                                width: "fit-content",
                            }}
                            className={"pr-5 pl-5 pb-5 pt-4 mr-auto ml-auto"}
                        >
                            <div
                                style={{width: 320 * this.state.cardsSize}}
                                className={"d-flex flex-row"}
                            >
                                {cardGroups.map((cardGroup) => cardGroup)}
                            </div>
                        </div>
                    </Carousel.Item>,
                ];
        }
        console.log("++++",arr)
        // this.setState({arr})
        return arr;
    }


    render() {
        return (
            <div
                className={"w-100 pt-4 mb-5 d-flex ml-auto mr-auto d-flex flex-column"}
                style={{background: "#f4f4f4"}}
                // style={{width: "fit-content"}}
            >
                <h4
                    className={" mt-auto ml-4"}
                    style={{fontFamily: "cursive",color:"black"}}
                >
                    {this.props.title}
                </h4>
                {this.state.cards.length===0?
                    <Empty className={"mt-4 mb-5 ml-auto mr-auto"} style={{color:"black"}} />:
                    <Carousel
                        nextIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black"
                                 className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                <path
                                    d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg>
                        }
                        prevIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black"
                                 className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                <path
                                    d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                            </svg>
                        }
                        interval={null}
                        slide={true}
                        indicators={false}
                        style={{width: "100%"}}
                        className={" mb-auto"}
                    >
                        {/*{this.state.arr.map((card) => card)}*/}
                        {this.renderList().map((card) => card)}
                    </Carousel>
                }
            </div>
        );
    }
}

export default VillaCarousel;