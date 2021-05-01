//@Sajad
import React, {Component, Fragment} from 'react';
import './homepage.css'
import {Route, Switch} from "react-router-dom";
import search_bg from '../../assets/img/homepage-bg.jpg'
import search_1_bg from '../../assets/img/homepage-bg-4.jpg'
// import map_bg from '../../assets/img/homepage-bg.jpg'
import { fromLonLat } from "ol/proj";
import "ol/ol.css";
import { RMap, ROSM } from "rlayers";
import { Steps, Divider } from 'antd';
import Search from "./search";
import * as Scroll from 'react-scroll';
import { Link as SLink, Element as SElement, Events as SEvents, animateScroll as scroll,scroller } from 'react-scroll'
import {log2} from "ol/math";



const left_option_selected = <svg style={{cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0d6efd"
                                  className="bi bi-circle-fill mb-3" viewBox="0 0 16 16">
    <circle cx="8" cy="8" r="8"/>
</svg>
const left_option = <svg style={{cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0d6efd"
                         className="bi bi-circle mb-3" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
</svg>




const center = fromLonLat([2.364, 48.82]);
let scrolling = false



class Homepage extends Component {
    constructor(props) {
        super(props);
        this.leftMenuClicked = this.leftMenuClicked.bind(this);
        this.leftOptionsSelectedShow = this.leftOptionsSelectedShow.bind(this);
    }

    componentDidMount() {
        // const self = this;
        document.addEventListener('scroll', this.leftOptionsSelectedShow)
        sessionStorage.removeItem('scroll-hp-sub')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (scrolling)
            return
        if (this.state.selectedSubPage!==prevState.selectedSubPage)
        {
            scroller.scrollTo('hp-sub-'.concat(this.state.selectedSubPage)
                , {
                duration: 750,
                delay: 0,
                smooth: true,
                containerId: 'body-tag',
                // offset: 50, // Scrolls to element + 50 pixels down the page
                }
            )
        }
    }


    leftOptionsSelectedShow(){
        // console.log(document.scrollingElement.scrollTop)
        if (scrolling)
            return
        else
            console.log('in!')
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

    state = {
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

    render() {
        return (
            <div id='homepage' className="d-flex flex-column" style={{overflowY: 'auto'}}>
                <div style={{position:'fixed',height:'100vh',top:'40%',zIndex:'1000'}}
                        className={'ml-3 d-flex flex-column'}>
                    {this.state.subPages.map(subPage=>
                        <div key={subPage.id}
                                onClick={()=>this.leftMenuClicked(subPage.id)}>
                            {subPage.id===this.state.selectedSubPage?left_option_selected:left_option}
                        </div>
                    )}
                </div>
                <div id={'hp-sub'} className={'w-100'} style={{overflowY: 'auto',height:this.state.subPages.length+"00vh"}} >
                    <SElement id={'hp-sub-0'} name={'hp-sub-0'} className={'homepage-div-bg'}
                             style={{background:'url('+search_1_bg+')',borderRadius:'0 0 3rem 3rem'}}>
                        <div className={'d-flex pl-5 pr-5'} style={{maxWidth:'60%',height:'50%'}}>
                            <Search/>
                        </div>
                    </SElement>
                    <SElement id={'hp-sub-1'} name={'hp-sub-1'} className={'homepage-div-bg'} >
                        <div className={'row w-100 d-flex h-100'} >
                            <div className={'col-md-8 col-lg-8 col-xl-8 col-sm-12 col-12 mt-auto mb-auto'}>
                                <div className={'mr-5 ml-5'}>
                                    <RMap className={'ml-5'}  width={"100%"} height={"60vh"} initial={{ center: center, zoom: 11 }}>
                                        <ROSM />
                                    </RMap>
                                </div>
                            </div>
                            <div className={'w-100 h-100 col-md-4 col-lg-4 col-xl-4 col-sm-12 col-12 d-flex'}>
                                <h1 className={'mr-auto ml-auto mt-auto mb-auto'} style={{backgroundColor:'white'}}>Villa card here!</h1>
                            </div>
                        </div>
                    </SElement>
                    <SElement id={'hp-sub-2'} name={'hp-sub-2'} className={'homepage-div-bg'} style={{background:'url('+search_bg+')',borderRadius:'1.5rem'}}>
                        <div>

                        </div>
                    </SElement>
                    <SElement id={'hp-sub-3'} name={'hp-sub-3'} className={'homepage-div-bg'} style={{backgroundColor:"black",borderRadius:'1.5rem'}}>
                        <div>

                        </div>
                    </SElement>

                </div>
            </div>
        );
    }
}

export default Homepage;
