import React from 'react';
import PropTypes from 'prop-types';


const Button = (props) => {
  return (
    <button className="btn submit-button" disabled={props.isDisabled}>
      {props.btnText}
    </button>
  )
}

Button.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  btnText: PropTypes.string.isRequired
}

export default Button;