//@Sajad
import React, {Component, Fragment} from 'react';
import './homepage.css'
import {Link, Route, Switch} from "react-router-dom";
import search_bg from '../../assets/img/homepage-bg.jpg'
import search_1_bg from '../../assets/img/homepage-bg-4.jpg'
import host_bg from '../../assets/img/homepage-bg-7.jpg'
// import map_bg from '../../assets/img/homepage-bg.jpg'
import { fromLonLat } from "ol/proj";
import "ol/ol.css";
import { RMap, ROSM } from "rlayers";
import {Steps, Divider} from 'antd';
import Search from "./search";
import * as Scroll from 'react-scroll';
import { Link as SLink, Element as SElement, Events as SEvents, animateScroll as scroll,scroller } from 'react-scroll'
import {log2} from "ol/math";
import VillaCard from "../villa/card/villaCard";
import {API_BASE_URL, API_SEARCH_VILLA, STORAGE_KEY} from "../constants";
import {getItem, getViewport} from "../util";
import {Carousel} from "react-bootstrap";
import axios from "axios";



const left_option_selected = <svg style={{cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0d6efd"
                                  className="bi bi-circle-fill mb-3" viewBox="0 0 16 16">
    <circle cx="8" cy="8" r="8"/>
</svg>
const left_option = <svg style={{cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0d6efd"
                         className="bi bi-circle mb-3" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
</svg>

const left_option_arrow = <svg style={{cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0d6efd"
                               className="bi bi-caret-down mb-3" viewBox="0 0 16 16">
    <path
        d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
</svg>

const left_option_arrow_selected = <svg style={{cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0d6efd"
                                        className="bi bi-caret-down-fill mb-3" viewBox="0 0 16 16">
    <path
        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>




const center = fromLonLat([2.364, 48.82]);
let scrolling = false



class Homepage extends Component {
    constructor(props) {
        super(props);
        this.leftMenuClicked = this.leftMenuClicked.bind(this);
        this.leftOptionsSelectedShow = this.leftOptionsSelectedShow.bind(this);
        this.handleScreenSizeChange = this.handleScreenSizeChange.bind(this);
        this.renderList = this.renderList.bind(this)
    }

    async componentDidMount() {
        // const self = this;
        this.handleScreenSizeChange(getViewport())
        document.addEventListener(STORAGE_KEY+'screen-size-changed', (event) => this.handleScreenSizeChange(event.detail));
        document.addEventListener('scroll', this.leftOptionsSelectedShow)
        sessionStorage.removeItem('scroll-hp-sub')
        let config = {
            method: 'get',
            url: API_SEARCH_VILLA+'?page=1&number_of_villa=100',
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
        console.log(cardList)
        this.setState({cards1:cardList,cards2:cardList})
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        // if (scrolling)
        //     return
        // if (this.state.selectedSubPage!==prevState.selectedSubPage)
        // {
        //     scroller.scrollTo('hp-sub-'.concat(this.state.selectedSubPage)
        //         , {
        //             duration: 750,
        //             delay: 0,
        //             smooth: true,
        //             containerId: 'body-tag',
        //             // offset: 50, // Scrolls to element + 50 pixels down the page
        //         }
        //     )
        // }
    }


    state = {
        cards1:[
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
        cards2:[
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
        cardsSize:1,
        scrolling:false,
        subPages:[
            {id:0},
            {id:1},
            {id:2},
            {id:3},
        ],
        selectedSubPage:0,
        position: {
            lat: 52,
            lng: 48,
        },
        center: {
            lat: 52,
            lng: 48,
        },

    }


    handleScreenSizeChange(size){
        let cards = 1;
        if (size==='xl')
            cards = 4;
        else if(size === 'lg')
            cards = 2
        else if (size ==='md')
            cards = 2
        else if (size === 'sm')
            cards = 2
        this.setState({cardsSize:cards})
        // console.log('new size ',cards)
        this.forceUpdate()
    }




    leftOptionsSelectedShow(){
        // console.log(document.scrollingElement.scrollTop)
        if (scrolling)
            return
        if(document.scrollingElement.scrollTop<window.innerHeight/2)
        {
            if (this.state.selectedSubPage!==0)
                this.setState({ selectedSubPage: 0 });
        }
        else if(document.scrollingElement.scrollTop<3*window.innerHeight/2)
        {
            if (this.state.selectedSubPage!==1)
                this.setState({ selectedSubPage: 1 });
        }
        else if(document.scrollingElement.scrollTop<5*window.innerHeight/2)
        {
            if (this.state.selectedSubPage!==2)
                this.setState({ selectedSubPage: 2 });
        }
        else if(document.scrollingElement.scrollTop<7*window.innerHeight/2)
        {
            if (this.state.selectedSubPage!==3)
                this.setState({ selectedSubPage: 3 });
        }
    }



    leftMenuClicked(id)
    {
        let scrollContainer2 = document.getElementById("body-tag");
        // let scrollContainer3 = document.getElementById('hp-sub');
        // let scrollContainer4 = document.getElementById('hp-sub-1');
        // console.log(scrollContainer2.scrollTop)
        // console.log(document.body.scrollTop)
        console.log(document.scrollingElement.scrollTop)
        // console.log(scrollContainer3.scrollTop)
        // console.log(scrollContainer4.scrollTop)
        // console.log(scrollContainer.scrollHeight)

        this.setState({selectedSubPage:id})
        // scroll.scrollMore(10, null);
        scrolling = true
        scroller.scrollTo('hp-sub-'.concat(id)
            , {
                duration: 750,
                delay: 0,
                smooth: true,
                containerId: 'body-tag',
                // offset: 50, // Scrolls to element + 50 pixels down the page
            }
        )
        setTimeout(() => {  scrolling = false }, 800);

        // scroll.scrollToBottom(null);
        // scroll.scrollTo(window.innerHeight*parseInt(id), null);
    }



    onMarkerLocationChange = () => {
        this.setState({
            position: {
                lat: 52,
                lng: 30,
            },
            center: {
                lat: 52,
                lng: 30,
            },
        });
    };


    renderList(id)
    {
        const cards = id===1?this.state.cards1:this.state.cards2
        let arr = []
        for (let k = 0;k<=(cards.length/this.state.cardsSize);k++)
        {
            let cardGroups = []
            for (let z = 0;z<this.state.cardsSize;z++)
            {
                let card = cards[k*this.state.cardsSize+z];
                if (!card)
                    break
                cardGroups = [...cardGroups,<VillaCard name={card.name}
                                                       id={card.villa_id}
                                                       src={API_BASE_URL.substr(0,API_BASE_URL.length-1).concat(card.default_image_url)}
                                                       addr={card.country+", "+card.state+', '+card.city}
                                                       cost={card.price_per_night}
                                                       rate={'4.5 (35 reviews)'}/>]
            }
            // if (cardGroups[0])
            // console.log(cardGroups[0].toString())
            // if (cardGroups[1])
            // console.log(cardGroups[1].toString())
            // if (cardGroups[2])
            // console.log(cardGroups[2].toString())
            if (cardGroups.length>0)
                arr = [...arr,
                    <Carousel.Item>
                        <div style={{background: '#364d79',borderRadius:'0.5rem',width:"fit-content"}} className={'p-5'}>
                            <div style={{width:320*this.state.cardsSize}} className={'d-flex flex-row'}>
                                {cardGroups.map(cardGroup=>cardGroup)}
                            </div>
                        </div>
                    </Carousel.Item>]
        }
        return arr
    }



    render() {
        const contentStyle = {
            // height: '400px',
            // color: '#fff',
            // lineHeight: '160px',
            // textAlign: 'center',

        };
        return (
            // <div id='homepage' className="d-flex flex-column" style={{overflowY: 'auto'}}>
            <React.Fragment>
                <div style={{position:'fixed',height:'100vh',top:'40%',zIndex:'1000'}}
                     className={'ml-3 d-flex flex-column'}>
                    {this.state.subPages.map(subPage=>
                        <div key={subPage.id}
                             onClick={()=>this.leftMenuClicked(subPage.id)}>
                            {subPage.id === this.state.subPages.length-1?
                                (subPage.id===this.state.selectedSubPage?left_option_arrow_selected:left_option_arrow):
                                (subPage.id===this.state.selectedSubPage?left_option_selected:left_option)}
                        </div>
                    )}
                </div>
                <div id={'hp-sub'} className={'w-100'} style={{height:'fit-content',overflowY:'auto'}} >
                    <SElement id={'hp-sub-0'} name={'hp-sub-0'} className={'homepage-div-bg'}
                             style={{background:'url('+search_1_bg+')',borderRadius:'0 0 3rem 3rem'}}>
                        <div className={'d-flex pl-5 pr-5'} style={{maxWidth:'60%',height:'50%'}}>
                            <Search/>
                        </div>
                    </SElement>
                    <SElement id={'hp-sub-1'} name={'hp-sub-1'} className={'homepage-div-bg d-flex w-100'} >
                        <div className={'row w-100 mt-auto mb-auto'} >
                            <div className={' col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12'} >
                                <h4 className={'ml-5 mb-3 mt-5'} style={{fontFamily:'cursive'}}>
                                    Or You may use a map:
                                </h4>
                            </div>
                            <div className={'col-lg-8 col-xl-8 col-md-6 col-sm-12 col-12'}>
                                {/*<div className={'mr-5 ml-5'}>*/}
                                    {/*https://www.npmjs.com/package/rlayers*/}
                                <div className={'pl-5 mt-4'}>
                                    <div  style={{border: '2px solid #8f8ff8'}}>
                                        <RMap  width={"100%"} height={"50vh"} initial={{ center: center, zoom: 11 }}>
                                            <ROSM />
                                        </RMap>
                                    </div>
                                </div>


                                {/*</div>*/}
                            </div>
                            <div className={'col-md-5 col-lg-4 col-xl-4 col-sm-12 col-12'}>
                                <div style={{width:'320px'}} className={'h-100 ml-auto mr-auto d-flex mt-3'}>
                                    <Carousel className={'map-side-Carousel d-flex mt-auto mb-auto ml-auto mr-auto'}>
                                        {this.state.cards1.map((card,index)=>
                                            <Carousel.Item key={index}>
                                                <div style={{background: '#364d79',borderRadius:'0.5rem'}} className={'pb-5'}>
                                                    <VillaCard name={card.name}
                                                               id={card.villa_id}
                                                               src={API_BASE_URL.substr(0,API_BASE_URL.length-1).concat(card.default_image_url)}
                                                               addr={card.country+", "+card.state+', '+card.city}
                                                               cost={card.price_per_night}
                                                               rate={'4.5 (35 reviews)'}/>
                                                </div>
                                            </Carousel.Item>
                                        )}
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </SElement>
                    <SElement id={'hp-sub-2'} name={'hp-sub-2'} className={'homepage-div-bg d-flex m-auto'} >
                        <div className={'w-100 h-100 d-flex flex-column'} >
                            <h4 className={' mt-auto mb-4'} style={{fontFamily:'cursive',marginLeft:'10%'}}>
                                Maybe try becoming a host yourself:
                            </h4>
                            <div style={{background:'url('+host_bg+')',borderRadius:'1.5rem'}}
                                 className={'d-flex  mb-auto ml-auto mr-auto become-host-div-bg pr-5'} >
                                <Link to="/Hosting/" className={'ml-auto  mt-auto mb-auto mr-5'} style={{height:"fit-content"}}>
                                    <button className={'btn btn-primary'}>
                                        Become a Host
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </SElement>
                    <SElement id={'hp-sub-3'} name={'hp-sub-3'} className={'homepage-div-bg pt-5 pb-5'} style={{backgroundColor:'white',borderRadius:'1.5rem'}}>
                        <div className={'pt-5 mb-5 d-flex ml-auto mr-auto d-flex flex-column'} style={{width:'fit-content'}}>
                            <h4 className={' mt-auto mb-4 ml-4'} style={{fontFamily:'cursive'}}>
                                High rate places:
                            </h4>
                            <Carousel interval={null} slide={false} indicators={false} style={{width:'fit-content'}} className={' mb-auto'}>
                                {this.renderList(1).map(card=>card)}
                            </Carousel>
                            {/*{this.state.cards}*/}
                        </div>
                        <div className={'pt-5 mt-5 d-flex ml-auto mr-auto d-flex flex-column'} style={{width:'fit-content'}}>
                            <h4 className={' mt-auto mb-4 ml-4'} style={{fontFamily:'cursive'}}>
                                Most reserved places:
                            </h4>
                            <Carousel interval={null} slide={false} indicators={false} style={{width:'fit-content'}} className={' mb-auto'}>
                                {this.renderList(2).map(card=>card)}
                            </Carousel>
                            {/*{this.state.cards}*/}
                        </div>
                    </SElement>
                </div>
            </React.Fragment>
            // </div>
        );
    }
}

export default Homepage;
