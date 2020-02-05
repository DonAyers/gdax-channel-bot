import React from "react";
import "./OrdersDisplay.css";

const OrdersDisplay = props => {
  //console.log(props);
  var sideClass;
  const orders = props.orders.map(order => {
    sideClass = "negative";
    //console.log(" order.side: ", order.side);
    if (order.side === "buy") {
      sideClass = "positive";
    }
    const size = parseFloat(order.size);
    const price = parseFloat(order.price);

    return (
      <tr className={sideClass} key={order.id}>
        <td>{order.side}</td>
        <td>{order.product_id}</td>
        <td>{size}</td>
        <td>${price}</td>
      </tr>
    );
  });

  return (
    <div>
      <table className="ui selectable celled table">
        <thead>
          <tr>
            <th>Side</th>
            <th>Coin</th>
            <th>Size</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{orders}</tbody>
      </table>
    </div>
  );
};

export default OrdersDisplay;
