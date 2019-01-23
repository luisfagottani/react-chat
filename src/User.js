import React from 'react';
import PropTypes from 'prop-types';


const User = (props) => {
  return(
    <div className="name sender">{props.username}</div>
  )
}

User.propTypes = {
  username: PropTypes.string.isRequired
}
export default User;