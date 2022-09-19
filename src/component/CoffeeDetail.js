import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete, onSellClick, onRestockClick } = props;

  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.name} - {coffee.origin}</h3>
      <p><em>{coffee.price}</em></p>
      <p><em>{coffee.steep}</em></p>
      {coffee.inventory === 0 ? (
        <p><em>{coffee.inventory}lbs of beans  </em><strong>SOLD OUT</strong></p>
      ) : (
        <p><em>{coffee.inventory}lbs of beans</em></p>
      )}
      
      <button onClick={() => onRestockClick(coffee.id)}>Restock Coffee</button>
      <button onClick={()=> onSellClick(1) } disabled={coffee.inventory === 0}>Sell Coffee</button>
      <button onClick={props.onClickingEdit}>Edit Coffee</button>
      <button onClick={()=> onClickingDelete(coffee.id) }>Delete Coffee</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onRestockClick: PropTypes.func,
  onSellClick: PropTypes.func
};

export default CoffeeDetail;