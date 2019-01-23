import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const ListMessages = (props) => {
  const {messages, userId} = props;
  return (
    <ul className="message-list">
      {messages.map((message, index) => (
        <Message key={index} message={message} userId={userId}/>
      ))}
    </ul>
  )
}

ListMessages.propTypes = {
  messages: PropTypes.array.isRequired,
  userId: PropTypes.string.isRequired
}

export default ListMessages;