import React, {Component} from 'react';
import { Drawer,Affix } from 'antd';
import 'react-chat-elements/dist/main.css';
import './chat.css'
import ChatCard from "./chatCard";
import Chatroom from "./chatroom/chatroom";
import SearchUser from "../homepage/searchUser/searchUser";


class Chat extends Component {
    constructor(props) {
        super(props);
    }

    state = { visible: false, childrenDrawer: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    showChildrenDrawer = () => {
        this.setState({
            childrenDrawer: true,
        });
    };

    onChildrenDrawerClose = () => {
        this.setState({
            childrenDrawer: false,
        });
    };

    render() {
        return (
            <div>
                <Affix offsetBottom={70} style={{height:0}}  >
                    <button style={{right:0,height:'55px',width:'55px'}} className={'btn btn-primary rounded-circle d-flex'} type="primary" onClick={this.showDrawer} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                             className="bi bi-chat-text m-auto" viewBox="0 0 16 16">
                            <path
                                d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                            <path
                                d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </button>
                </Affix>
                <Drawer
                    title={
                        <div className={'mt-4'} style={{width:'100%',position:'relative'}}>
                            <div style={{position:'absolute',width:'100%',zIndex:'501'}}>
                                <SearchUser/>
                            </div>
                            <h4 style={{fontFamily: 'cursive'}}>Chats:</h4>
                        </div>
                    }
                    closeIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#dc3545"
                             className="bi bi-x-circle-fill " viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg>
                    }
                    zIndex={500}
                    width={500}
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <ChatCard
                        onClick={this.showChildrenDrawer}
                        avatar={'https://homepages.cae.wisc.edu/~ece533/images/zelda.png'}
                        name={'Sajad'}
                        lastMessage={'some really ducking long message goes here to check whether it would collapse it or not!'}
                        date={new Date()}
                        unread={parseInt('5')}/>
                    <ChatCard
                        onClick={this.showChildrenDrawer}
                        avatar={'https://homepages.cae.wisc.edu/~ece533/images/zelda.png'}
                        name={'Sajad'}
                        lastMessage={'some really ducking long message goes here to check whether it would collapse it or not!'}
                        date={new Date()}
                        unread={parseInt()}/>
                    <ChatCard
                        onClick={this.showChildrenDrawer}
                        avatar={'https://homepages.cae.wisc.edu/~ece533/images/zelda.png'}
                        name={'Sajad'}
                        lastMessage={'some really ducking long message goes here to check whether it would collapse it or not!'}
                        date={new Date()}
                        unread={parseInt('2')}/>


                    {/*<button type="primary" >*/}
                    {/*    Two-level drawer*/}
                    {/*</button>*/}
                    <Drawer
                        // title="chatroom"
                        closeIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#dc3545"
                                            className="bi bi-x-circle-fill " viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                            </svg>
                        }
                        width={500}
                        closable={true}
                        onClose={this.onChildrenDrawerClose}
                        visible={this.state.childrenDrawer}
                    >
                        <Chatroom/>
                    </Drawer>
                </Drawer>
            </div>
        );
    }
}


export default Chat;
