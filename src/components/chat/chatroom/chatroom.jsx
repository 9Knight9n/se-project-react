import React, { Component } from 'react';
import MessageBox from './messageBox';
import { Input } from 'react-chat-elements'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { ToastContainer, toast } from 'react-toastify';
import ResizeObserver from 'rc-resize-observer';
import { Dropdown } from 'react-bootstrap';
import * as Scroll from 'react-scroll';
import { Link as SLink, Element as SElement, Events as SEvents, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './chatroom.css';
import ChatroomInfo from "./chatroomInfo";
import {toSize} from "ol/size";
import {getItem} from "../../util";



class Chatroom extends Component {


    constructor(props) {
        super(props);
        this.state = {
            chatroomInfoHeight:0,
            isOwner:false,
            isJoin:true,
            replying:null,
            replyingTo:null,
            inputValue:"",
            loading:false,
            inputRef:React.createRef(),
            chats:[
                {
                    message_id:1,
                    user_id:1,
                    username:'Sajad',
                    text:'Hi how you doin?,dwihdidhqwiodqw qwdhqw qw dqwd qdqwdpqwdqwd' +
                        'qwdqwdi qwpdpqwdupqwdpqwud oqw[dqw' +
                        'dq dqwi[d[oqwd pqwduqwiduqwdiuqoidwoduwidiwdw\nodwodwoduuwdowu',
                    time:'20:48:23',
                    replyTo:null,
                },
                {
                    message_id:2,
                    user_id:2,
                    username:'Sajad',
                    text:'Hi how you doin?',
                    time:'20:48:23',
                    replyTo:1,
                },
                {
                    message_id:3,
                    user_id:1,
                    username:'Sajad',
                    text:'Hi how you doin?',
                    time:'20:48:23',
                    replyTo:null,
                },
                {
                    message_id:4,
                    user_id:1,
                    username:'Sajad',
                    text:'Hi how you doin?',
                    time:'20:48:23',
                    replyTo:null,
                },
                {
                    message_id:5,
                    user_id:1,
                    username:'Sajad',
                    text:'Hi how you doin?',
                    time:'20:48:23',
                    replyTo:null,
                },
                {
                    message_id:6,
                    user_id:1,
                    username:'Sajad',
                    text:'Hi how you doin?',
                    time:'20:48:23',
                    replyTo:null,
                },
                {
                    message_id:7,
                    user_id:1,
                    username:'Sajad',
                    text:'Hi how you doin?',
                    time:'20:48:23',
                    replyTo:null,
                },
                {
                    message_id:8,
                    user_id:1,
                    username:'Sajad',
                    text:'Hi how you doin?',
                    time:'20:48:23',
                    replyTo:null,
                },
            ],
            inputHeight:37,
            ChatroomID:1,
        };
        // this.loadQuestions=this.loadQuestions.bind(this)
    }
    newMessage=(message)=>{
        // console.log(message)
        if(message.order_type==="delete_message")
        {
            let temp  = this.state.chats.filter(function(item) {
                return item.message_id !== message.message_id
            })

            this.setState({chats:temp})
            // for (let i = 0;i<temp.length;i++)
            // {
            //     if (temp[i].message_id === message.message_id)
            //     {
            //         temp.remo
            //     }
            // }
        }
        else if (message.order_type==="create_message")
        {

            // scroll.scrollToTop();
            // scroll.scrollToTop( {
            //     duration: 1500,
            //     delay: 100,
            //     smooth: true,
            //     containerId: 'scroll-container-discussion',
            //     offset: 50});
            let scrollContainer = document.getElementById("scroll-container-discussion");
            // get scroll position in px
            if (Math.floor(scrollContainer.scrollHeight - scrollContainer.scrollTop) <= scrollContainer.clientHeight)
            {
                this.setState({chats:[...this.state.chats,message]})
                scroll.scrollToBottom( {
                    duration: 750,
                    delay: 100,
                    smooth: true,
                    containerId: 'scroll-container-discussion',
                    offset: 50});
            }
            else
            {
                this.setState({chats:[...this.state.chats,message]})
            }
        }
        console.log(message)
        // this.setState({chats:[...this.state.chats,message]})
        // console.log("received info:",message.data)
        // console.log("old chats:",this.state.chats)
        // console.log("new chats:",this.state.chats)
        // let data = JSON.parse(message.data);
        //   console.log(data);
        //   if (data.message)
        // this.setState({time:data.message})
    }

    // async componentWillMount(){
    //     if(this.state.ChatroomID!==-1)
    //     {
    //         await connect("ws://127.0.0.1:8000/ws/api/generalchatroom/"+this.state.ChatroomID+"/");
    //         await listen("message",this.newMessage);
    //     }
    // }



    componentDidMount(){
        this.setState({chatroomInfoHeight:document.getElementById('chatroom-info').offsetHeight})
        // sessionStorage.removeItem("search")
        // // var msg = document.getElementById("message");
        // let button = document.getElementById("generalChatroomSendButton");
        // let textBox = document.getElementById("sendOnEnter");

        // This event is fired when button is clicked
        // if(this.state.ChatroomID!==-1)
        //     textBox.addEventListener("keyup", function (event) {
        //         if (event.keyCode === 13 && event.shiftKey) {
        //             button.click();
        //         }
        //     });


        // this.loadChats()
    }

    componentDidUpdate(prevProps) {
        // console.log("something changed")
        // if (prevProps.match.params.chatroomid !== this.props.match.params.chatroomid) {
        //     this.setState({ChatroomID:parseInt(this.props.match.params.chatroomid)})
        //     this.loadChats()
        // }
    }

    // changeJoinState=(state)=>
    // {
    //     this.setState({isJoin:state})
    //     if(state)
    //     {
    //         this.setState({inputHeight:37})
    //     }
    //     else
    //         this.setState({inputHeight:0,})
    // }
    //
    // loadChats=async()=>{
    //     if(this.props.match.params.chatroomid ==="-1")
    //         return false
    //     this.setState({loading:true})
    //     console.log("fetching Questions")
    //     let config ={
    //         url:"http://127.0.0.1:8000/api/show_Message/",
    //         needToken:true,
    //         type:"post",
    //         formKey:[
    //             "chatroomId",
    //         ],
    //         formValue:[
    //             this.props.match.params.chatroomid,
    //         ]
    //     }
    //     let data = []
    //     // console.log("outside 0",data)
    //     data = await request(config)
    //     // console.log(await request(config))
    //     console.log("outside",data)
    //     if (data)
    //     {
    //         this.setState({chats:data})
    //         console.log("state set")
    //     }
    //     this.loadData()
    //     this.setState({loading:false})
    //     // console.log(data)
    // }
    //
    // loadData = async () => {
    //     // this.setState({loading:true})
    //
    //     let config = {
    //         url:"http://127.0.0.1:8000/api/ShowChatroomProfile/",
    //         needToken:true,
    //         type:"post",
    //         formKey:[
    //             "chatroomId",
    //         ],
    //         formValue:[
    //             this.state.ChatroomID
    //         ]
    //     };
    //     let data = [];
    //     data = await request(config);
    //     if (data) {
    //         this.setState({
    //             isOwner: parseInt(sessionStorage.getItem("id")) === data.owner,
    //         });
    //     }
    //     // let objDiv = document.getElementById("scroll-container-discussion");
    //     // objDiv.scrollTop = objDiv.scrollHeight;
    //     // var elem = document.getElementById('scroll-container-discussion');
    //     // elem.scrollTop = elem.scrollHeight;
    //     scroll.scrollToBottom( {
    //         duration: 0,
    //         delay: 0,
    //         smooth: false,
    //         containerId: 'scroll-container-discussion',
    //         offset: 50});
    //     // console.log(data)
    //     // this.setState({loading:false})
    // }
    //
    // // inputOnChange=(e)=>{
    // //     let target = e.target;
    // //     // let value = target.value;
    //
    // //     this.setState({inputHeight:target.offsetHeight})
    // //     // this.forceUpdate()
    // //     console.log(target.offsetHeight)
    // // }
    //
    // sendMessage=async()=>{
    //     // console.log(this.state.inputRef.input.value)
    //     if (this.state.inputRef.input.value===""){
    //         toast.dark("Message is empty!");
    //         return 0
    //     }
    //     toast.dismiss()
    //     let token = sessionStorage.getItem
    //     if(isExpired(sessionStorage.getItem('id'))){
    //         token=await renewToken()
    //     }
    //     if (this.state.replying)
    //         send({
    //             'order_type' : 'create_message',
    //             'chatroom_id':this.state.ChatroomID,
    //             'token': token,
    //             'message': this.state.inputRef.input.value,
    //             'replyTo':this.state.replying
    //         })
    //     else
    //         send({
    //             'order_type' : 'create_message',
    //             'chatroom_id':this.state.ChatroomID,
    //             'token': token,
    //             'message': this.state.inputRef.input.value,
    //         })
    //     this.state.inputRef.clear();
    //     this.setState({inputRef:"",replying:null,replyingTo:null})
    // }
    //
    // handleDelete=async(message_id)=>{
    //     let token = sessionStorage.getItem
    //     if(isExpired(sessionStorage.getItem('id'))){
    //         token=await renewToken()
    //     }
    //     send({
    //         'order_type' : 'delete_message',
    //         'chatroom_id':this.state.ChatroomID,
    //         'token': token,
    //         'message_id': message_id,
    //     })
    // }
    //
    reply=(id,username)=>{
        // console.log("replying")
        this.setState({replying:id,replyingTo:username})
    }

    onReplyMessageClick=(id)=>{
        // console.log(this.state.chats.find(chat => chat.message_id === id))
        scroller.scrollTo("chat".concat(this.state.chats.find(chat => chat.message_id === id).replyTo)
            , {
                duration: 750,
                delay: 100,
                smooth: true,
                containerId: 'scroll-container-discussion',
                // offset: 50, // Scrolls to element + 50 pixels down the page
            }
        )
    }



    render() {
        return (
            <React.Fragment>
                <div className="w-100 h-100 p-2 mt-3">
                    <div id="question-page" className="d-flex flex-column h-100 w-100">
                        <div id="chatroom-info" style={{backgroundColor:'#ebebeb'}}>
                            <ChatroomInfo chat_id={5}/>
                        </div>
                        <div className="d-flex flex-row" style={{height:"calc(100% - ".concat(this.state.chatroomInfoHeight).concat("px)")}}>
                            <div className="d-flex flex-column w-100">
                                <div id="scroll-container-discussion" className="messages-box" style={{height: "calc(100% - ".concat(this.state.inputHeight).concat("px)")}}>
                                    <div className="mb-2" id="generalChatroomOptionsHover"
                                        style={{
                                            height: '100%',
                                            overflowY: 'scroll',
                                          }}
                                    >
                                        {this.state.chats.map(chat =>
                                            <SElement name={"chat".concat(chat.message_id)} key={chat.message_id} className="mb-3 d-flex flex-row w-100">
                                                <div className={chat.user_id===parseInt(getItem("user-id"))?"ml-auto d-flex flex-row-reverse":"d-flex flex-row"}>
                                                    <MessageBox
                                                        reply={this.reply}
                                                        message_id={chat.message_id}
                                                        userid={chat.user_id}
                                                        title={chat.username}
                                                        onReplyMessageClick={this.onReplyMessageClick}
                                                        text={<span style={{whiteSpace: "pre-line"}}>
                                                    {ReactHtmlParser(chat.text)}
                                                </span>}
                                                        dateString={chat.time}
                                                        isReply={chat.replyTo}
                                                        titleRep={chat.replyTo?this.state.chats.find(reply => reply.message_id === chat.replyTo).username:null}
                                                        messageRep={chat.replyTo?this.state.chats.find(reply => reply.message_id === chat.replyTo).text:null}/>
                                                    <div id="options" className={chat.user===parseInt(getItem("user-id"))?"option-right":"option-left"}>
                                                        <Dropdown>
                                                            <Dropdown.Toggle className={'btn shadow-none transparent-button'} id="dropdown-basic">
                                                                <svg width="15px" height="15px" viewBox="0 0 16 16" class="bi bi-three-dots-vertical" fill="black" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                                                </svg>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className="dropDown">
                                                                <Dropdown.Item as="button" onClick={()=>this.reply(chat.message_id,chat.username)}>Reply</Dropdown.Item>
                                                                {this.state.isOwner?<Dropdown.Item as="button" onClick={()=>this.handleDelete(chat.message_id)}>Delete</Dropdown.Item>:""}
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </SElement>
                                        )}
                                    </div>
                                </div>
                                <ResizeObserver
                                    onResize={({ width, height }) => this.setState({inputHeight:height})}
                                >
                                    <div id="sendOnEnter">
                                        <Input
                                            inputStyle={
                                                {
                                                    height:'95px',
                                                    width:'100%',
                                                    padding:'5px',
                                                    paddingLeft:'10px',
                                                    paddingRight:'45px',
                                                    resize:'none',
                                                    overflowY:this.state.inputHeight<200?'hidden':'auto',
                                                    border: 'none',
                                                    backgroundColor: '#ebebeb',
                                                    borderRadius:'0.5rem',
                                                    boxShadow: 'none',
                                                    outline:'none',
                                                }
                                            }
                                            className={'rounded'}
                                            ref={el => (this.state.inputRef = el)}
                                            // onChange={this.inputOnChange}
                                            minHeight={95}
                                            placeholder="Type here..."
                                            multiline={true}
                                            autoHeight={true}
                                            autofocus={true}
                                            rightButtons={
                                                <div className={'d-flex flex-column mr-3'}>
                                                    <button
                                                        className="btn btn-primary transparent-button mt-auto shadow-none ml-2 mb-2"
                                                        // {this.state.inputValue.length===0?disabled:""}
                                                        // onClick={this.sendMessage}
                                                        // id="generalChatroomSendButton"
                                                        style={{color:'white',padding:'0'}}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                                                             fill="lightseagreen" className="bi bi-plus-circle-fill"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                                        </svg>
                                                    </button>
                                                    <button
                                                        className="btn btn-primary transparent-button shadow-none ml-2 mb-2"
                                                        // {this.state.inputValue.length===0?disabled:""}
                                                        // onClick={this.sendMessage}
                                                        id="generalChatroomSendButton"
                                                        style={{color:'white',padding:'0'}}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                                                             fill="#007bff" className="bi bi-telegram"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            }
                                            leftButtons={this.state.replying?
                                                <div className="black-text input-buttons">
                                                    <button className="p-2 rounded replyToButton">
                                                        Replying to {this.state.replyingTo}
                                                    </button>
                                                    <button className="p-1" style={{backgroundColor:"transparent"}} onClick={()=>this.reply(null,null)}>
                                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                                        </svg>
                                                    </button>
                                                </div>:""
                                            }
                                        />
                                    </div>
                                </ResizeObserver>
                            </div>
                            {/*<div className="w-25 h-100">*/}
                            {/*    <UsersList Cid={this.state.ChatroomID} />*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Chatroom;