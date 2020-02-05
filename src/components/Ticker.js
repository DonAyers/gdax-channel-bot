import React from "react";
import "./Ticker.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

class Ticker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props);
    const coins = this.props.coins.map(coin => {
      return (
        <div className="item" key={coin.name}>
          <div className="content">
            <div className="header">{coin.name}</div>
            {formatter.format(coin.price)}
          </div>
        </div>

        // <li>
        //   {coin.name} : {formatter.format(coin.price)}
        // </li>
      );
    });

    return <div className="ui relaxed massive divided list">{coins}</div>;
  }
}

export default Ticker;
