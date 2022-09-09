import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";


function CoffeeList(props) {

    return (
      <React.Fragment>
        <div>
          {props.coffeeList?.map((coffee) =>
          <Coffee 
          whenCoffeeClicked = { props.onCoffeeSelection }
          name={coffee.name}
          origin={coffee.origin}
          price={coffee.price}
          strength={coffee.strength}
          id={coffee.id}
          key={coffee.id}/>
          )}
        </div> 
      </React.Fragment>
    );
  }

  CoffeeList.propTypes = {
    coffeeList: PropTypes.array,
    onCoffeeSelection: PropTypes.func
  };

export default CoffeeList;