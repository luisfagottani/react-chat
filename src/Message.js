import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  const {message, userId} = props;
  return (
        <li
          className={
            message.username === userId ? 'message sender' : 'message recipient'
          }
        >
          <p>{`${message.username}: ${message.text}`}</p>
        </li>
  )
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired
}

export default Message;