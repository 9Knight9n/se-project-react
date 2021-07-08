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
            this.renderList();
            // this.setState({cardSize:2},this.renderList)
        }
    }


    async componentDidMount() {
        await this.loadCardList(this.props.url);
    }


    async loadCardList(url) {
        let config = {
            method: "get",
            url: url.toString().concat(this.props.noNum?"":"?number_of_villa=100") ,
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
        if (response.length>0)
            this.setState({cards: response,empty:false},this.renderList);
        else
            this.setState({empty:true})
        console.log("============",response)
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
            for (let z = 0; z < cardSize; z++) {
                // console.log('inside2')
                let card = this.state.cards[k * cardSize + z];
                if (!card) break;
                // console.log(card)
                cardGroups = [
                    ...cardGroups,
                    <VillaCard
                        name={card.name}
                        id={card.villa_id}
                        src={API_BASE_URL.substr(0, API_BASE_URL.length - 1).concat(
                            card.default_image_url
                        )}
                        addr={card.country + ", " + card.state + ", " + card.city}
                        cost={card.price_per_night}
                        rate={card.rate__avg}
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
                            className={"pr-5 pl-5 pb-5 pt-4"}
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
        this.setState({arr})
        // return arr;
    }


    render() {
        return (
            <div
                className={"w-100 pt-4 mb-5 d-flex ml-auto mr-auto d-flex flex-column"}
                style={{background: "#364d79",}}
                // style={{width: "fit-content"}}
            >
                <h4
                    className={" mt-auto ml-4"}
                    style={{fontFamily: "cursive",color:"white"}}
                >
                    {this.props.title}
                </h4>
                {this.state.empty?
                    <Empty className={"mt-4 mb-5 ml-auto mr-auto"} style={{color:"white"}} />:
                    <Carousel
                        interval={null}
                        slide={true}
                        indicators={false}
                        style={{width: "100%"}}
                        className={" mb-auto"}
                    >
                        {this.state.arr.map((card) => card)}
                        {/*{this.renderList().map((card) => card)}*/}
                    </Carousel>
                }
            </div>
        );
    }
}

export default VillaCarousel;