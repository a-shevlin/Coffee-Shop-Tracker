import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <br/>
        <input
          type='text'
          name='origin'
          placeholder='Origin' />
        <br/>
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <br/>
        <input
          type='text'
          name='strength'
          placeholder='Strength' />
        <br/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;