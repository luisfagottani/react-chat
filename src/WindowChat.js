import React, {Component} from 'react';
import PropTypes from 'prop-types';
import User from './User';
import Form from './Form';
import ListMessages from './ListMessages';


class WindowChat extends Component {
  submitForm = (message) => {
    message.username = this.props.user.username;
    this.props.sendMessage(message)
  }
  render() {
    const {user, listMsg} = this.props;
    return (
      <div key={user.username} className="chat-window">
        <h2>Super Awesome Chat</h2>
        <User username={user.username}/>
        <ListMessages messages={listMsg} userId={user.username} />
        <div>
          <Form submitForm={this.submitForm} />
        </div>
      </div>
    )
  }
}

WindowChat.propTypes = {
  listMsg: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired
}

export default WindowChat;