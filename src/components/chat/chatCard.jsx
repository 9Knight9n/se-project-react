import React, {Component} from 'react';
import { ChatItem } from 'react-chat-elements'
import './chatCard.css'


class ChatCard extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <ChatItem
                    onClick={this.props.onClick}
                    className={'m-2'}
                    avatar={this.props.avatar}
                    // alt={'Reactjs'}
                    title={this.props.name}
                    subtitle={this.props.lastMessage}
                    date={this.props.date}
                    unread={this.props.unread} />
            </div>
        );
    }
}


export default ChatCard;
