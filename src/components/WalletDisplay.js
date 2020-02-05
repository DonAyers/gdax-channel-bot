import React from "react";
import "./WalletDisplay.css";

const WalletDisplay = props => {
  const USD = Math.round(parseFloat(props.accounts[0].available) * 100) / 100;
  const BTC = Math.round(props.accounts[1].available * 100) / 100;
  const ETH = "32";
  //console.log(props);
  //const ETH = Math.round(props.accounts[5].balance * 100) / 100;

  //Math.round(props.accounts[2].balance * 100) / 100;
  //   const BTC = props.accounts[0].balance;
  //   const ETH = props.accounts[5].balance;
  //console.log(props.accounts[0].available);

  return (
    <div className="wallet ui segment">
      <div className="ui relaxed massive divided list">
        <div className="item">
          <div className="content">
            <div className="header">Wallet</div>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <div className="header">${USD} USD</div>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <div className="header">{BTC} BTC</div>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <div className="header">{ETH} ETH</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletDisplay;
