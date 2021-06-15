import React, { Component } from "react";
import "./chatroomInfo.css";
import userImg from "../../../assets/img/default-profile-picture.jpg";
class ChatroomInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat_id: this.props.chat_id,
      src: userImg,
      firstName: "Ali",
      lastname: "Ebadi",
    };
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ height: 90 }}>
          <div className="user-profile">
            <div className="user-profile-details pt-2 d-flex flex-row">
              <img
                className="ml-2 mb-2"
                src={this.state.src}
                alt="user-profile-image"
                data-testid="chatInfo-profile-avatar"
              />
              <div className="col-9">
                <h4 data-testid="chatInfo-name">
                  {this.state.firstName + " " + this.state.lastname}
                </h4>
                <medium data-testid="chatInfo-lastSeen">
                  Last seen in 10-03-2021 at 09:09
                </medium>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ChatroomInfo;
