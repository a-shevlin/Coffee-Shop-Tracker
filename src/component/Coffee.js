import React from "react";
import PropTypes from "prop-types";


function Coffee(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name} from {props.origin}</h3>
        {props.inventory === 0 ? (
          <h4>Sold Out</h4>
        ) : (
          <h4>In Stock</h4>
        )}
        <h5>${props.price}</h5>
        <h5>{props.strength}</h5>
        
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
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;