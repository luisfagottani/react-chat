import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


class Form extends React.Component {
  state = {
    text: ''
  }


  isDisabled = () => (
    this.state.text.length === 0
  );

  typeMessage = (event) => {
    this.setState({ text: event.target.value  });
  }

  submitForm = (event) => {
    event.preventDefault();
    this.props.submitForm(this.state)
    this.setState({ text: ''  });
  }

  render(){
    const {text} = this.state;
    return (
      <form className="input-group" onSubmit={this.submitForm}>
        <input type="text" className="form-control" onChange={this.typeMessage} value={text} placeholder="Enter your message..." />
        <div className="input-group-append">
          <Button isDisabled={this.isDisabled()} btnText={"SEND"} />
        </div>
      </form>
    )
  }
}

Form.propTypes = {
  submitForm: PropTypes.func.isRequired
}

export default Form;