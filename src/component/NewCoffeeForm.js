import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewCoffeeForm(props){

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewCoffeeFormSubmission}
        buttonText="Create" />
    </React.Fragment>
  );


  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value, 
      origin: event.target.origin.value, 
      price: event.target.price.value, 
      strength: event.target.strength.value,
      id: v4()
    });
  }
}

NewCoffeeForm.propTypes = {
onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;