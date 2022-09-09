import React from "react";
import PropTypes from "prop-types";


function Coffee(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name} - {props.origin}</h3>
        <h5>{props.price}</h5>
        <h5>{props.strength}</h5>
        <p><em>Coffee's Remaining: {props.quantity}</em></p>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  strength: PropTypes.string,
  id: PropTypes.string,
  quantity: PropTypes.number,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;