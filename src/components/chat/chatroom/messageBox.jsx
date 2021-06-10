import React from "react";
import { MessageBox as MB } from "react-chat-elements";
// import { Avatar } from 'react-chat-elements'
// import { getUserAvatar } from './util';
import { Dropdown } from "react-bootstrap";
// CE CSS
import "react-chat-elements/dist/main.css";
// MessageBox component
import "./messageBox.css";
import { getItem } from "../../util";
// import ProfilePreview from './ProfilePreview';

class MessageBox extends React.Component {
  state = {
    showProfilePreview: false,
    isOwner: this.props.userid === parseInt(getItem("user-id")),
    message_id: this.props.message_id,
    userid: this.props.userid,
    title: this.props.title,
    text: this.props.text,
    dateString: this.props.dateString,
    isReply: this.props.isReply,
    titleRep: this.props.titleRep,
    messageRep: this.props.messageRep,
  };

  async componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div
          className={"w-fit-content d-flex w-100 flex-row".concat(
            this.state.isOwner ? "-reverse" : ""
          )}
        >
          <div className="w-100">
            <MB
              id={this.state.id}
              position={this.state.isOwner ? "right" : "left"}
              type={"text"}
              // title={!this.state.isOwner?this.state.title:""}
              titleColor="#8717ae"
              text={this.state.text}
              dateString={this.state.dateString}
              // onReplyClick={()=>this.props.reply(this.state.message_id,this.state.title)}
              // onClick
              onReplyMessageClick={() =>
                this.props.onReplyMessageClick(this.state.message_id)
              }
              // replyButton={true}
              reply={
                this.state.isReply
                  ? {
                      title: this.state.titleRep,
                      titleColor: "#8717ae",
                      message: this.state.messageRep,
                    }
                  : false
              }

              // reply
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default MessageBox;
