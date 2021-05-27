import React, {Component} from 'react';
import Search from "../homepage/search";
import {CardGroup} from "react-bootstrap";
import {API_BASE_URL, API_SEARCH_VILLA} from "../constants";
import axios from "axios";
import VillaCard from "../villa/card/villaCard";
import Empty from "antd/es/empty/empty";
import {RContext, RControl, RLayerVector, RMap, ROSM} from "rlayers";
import {fromLonLat} from "ol/proj";
import './searchPage.css'


let center = fromLonLat([-90.108862, 29.909324]);


class SearchPage extends Component {
    constructor(props) {
        super(props);
    }


    state = {
        country:null,
        state:null,
        city:null,
        startDate:null,
        endDate: null,
        cards:[
            {
                name:'City center apartment with 3 rooms',
                addr:"Iran ,Tehran ,Shar-rey",
                cost:10000,
                rate:'4.3 (35 reviews)'
            },
            {
                name:'City center apartment with 3 rooms',
                addr:"Iran ,Tehran ,Shar-rey",
                cost:10000,
                rate:'4.3 (35 reviews)'
            },
            {
                name:'City center apartment with 3 rooms',
                addr:"Iran ,Tehran ,Shar-rey",
                cost:10000,
                rate:'4.3 (35 reviews)'
            },
            {
                name:'City center apartment with 3 rooms',
                addr:"Iran ,Tehran ,Shar-rey",
                cost:10000,
                rate:'4.3 (35 reviews)'
            },
            {
                name:'City center apartment with 3 rooms',
                addr:"Iran ,Tehran ,Shar-rey",
                cost:10000,
                rate:'4.3 (35 reviews)'
            },
        ],
    }

    async componentDidMount() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const country = urlParams.get('country')
        const state = urlParams.get('state')
        const city = urlParams.get('city')
        const startDate = urlParams.get('start')
        const endDate = urlParams.get('end')
        // this.setState({country,state,city,startDate,endDate},this.loadData)
    }

    async loadData(){
        console.log(this.state)
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

    search = (country,state,city,startDate,endDate) =>{
        this.setState({country,state,city,startDate,endDate},this.loadData)
    }


    render() {


        return (
            <div style={{marginTop:'10%'}}>
                <Search search={this.search} country={this.state.country} state={this.state.state} city={this.state.city} startDate={this.state.startDate} endDate={this.state.endDate}/>
                <div className={'d-flex w-100 h-100 mt-4 row pl-5 pr-5'} style={{}} >
                    <div className={'ml-auto mr-auto mb-5'}>
                        <RMap  width={"60vw"} height={"50vh"} initial={{ center: center, zoom: 10 }}
                               onMoveEnd={this.setCenterOnMove}>
                            <ROSM />
                        </RMap>
                    </div>
                    <div className={'pr-5 pl-5 w-100'} >
                        <CardGroup style={{minWidth:'300px'}} >
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
