import React, {Component} from 'react';

class ChatroomInfo extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        chat_id : this.props.chat_id
    }


    render() {
        return (
            <React.Fragment>
                <h1>
                    chatroom info goes here
                </h1>
            </React.Fragment>
        );
    }
}


export default ChatroomInfo;
