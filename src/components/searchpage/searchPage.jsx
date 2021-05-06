import React, {Component} from 'react';
import Search from "../homepage/search";
import {CardGroup} from "react-bootstrap";
import {API_BASE_URL, API_SEARCH_VILLA} from "../constants";
import axios from "axios";
import VillaCard from "../villa/card/villaCard";
import Empty from "antd/es/empty/empty";

class SearchPage extends Component {
    constructor(props) {
        super(props);
    }


    state = {
        country:null,
        state:null,
        city:null,
        cards:[
            // {
            //     name:'City center apartment with 3 rooms',
            //     addr:"Iran ,Tehran ,Shar-rey",
            //     cost:10000,
            //     rate:'4.3 (35 reviews)'
            // },
            // {
            //     name:'City center apartment with 3 rooms',
            //     addr:"Iran ,Tehran ,Shar-rey",
            //     cost:10000,
            //     rate:'4.3 (35 reviews)'
            // },
            // {
            //     name:'City center apartment with 3 rooms',
            //     addr:"Iran ,Tehran ,Shar-rey",
            //     cost:10000,
            //     rate:'4.3 (35 reviews)'
            // },
            // {
            //     name:'City center apartment with 3 rooms',
            //     addr:"Iran ,Tehran ,Shar-rey",
            //     cost:10000,
            //     rate:'4.3 (35 reviews)'
            // },
            // {
            //     name:'City center apartment with 3 rooms',
            //     addr:"Iran ,Tehran ,Shar-rey",
            //     cost:10000,
            //     rate:'4.3 (35 reviews)'
            // },
        ],
    }

    async componentDidMount() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const country = urlParams.get('country')
        const state = urlParams.get('state')
        const city = urlParams.get('city')
        this.setState({country,state,city},this.loadData)
    }

    async loadData(){
        let param = '?page=1&number_of_villa=100&country='+this.state.country
        if (this.state.state)
            param = param + '&state=' + this.state.state
        if (this.state.city)
            param = param + '&city=' + this.state.city
        let config = {
            method: 'get',
            url: API_SEARCH_VILLA + param,
            headers: {
                // 'Authorization': 'Token '.concat(getItem('user-token')),
            }
        };
        let cardList = await axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                console.log(response.data.data)
                return response.data.data
            })
            .catch(function (error) {
                console.log(error);
                return []
            });
        this.setState({cards:cardList})
        console.log(this.state.country)
    }


    render() {
        return (
            <div style={{marginTop:'10%'}}>
                <Search country={this.state.country} state={this.state.state} city={this.state.city} />
                <div className={'d-flex w-100 h-100 mt-4'}>
                    <div className={'ml-auto mr-auto'} style={{width:'87%'}}>
                        <CardGroup >
                            {this.state.cards.map((card,index)=>
                                <VillaCard key={index} name={card.name} id={card.villa_id}
                                            src={API_BASE_URL.substr(0,API_BASE_URL.length-1).concat(card.default_image_url)}
                                           addr={card.country+", "+card.state+', '+card.city}
                                           cost={card.price_per_night}
                                           rate={'4.5 (35 reviews)'}/>
                            )}
                        </CardGroup>
                        <div className={'ml-auto mr-auto mb-5'} style={{width:'fit-content'}}>{this.state.cards.length===0?<Empty description={'Nothing found!'}/>:null}</div>
                        <div className={'ml-auto mr-auto mb-5'} style={{width:'fit-content'}}>{this.state.cards.length===0?<text> Nothing found!</text>:null}</div>
                    </div>

                </div>


            </div>
        );
    }
}


export default SearchPage;
