import React from "react";

class ThresholdInputs extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { buyThreshold: null, sellThreshold: null, stake: 0 };
  //temp = { buyThreshold: null, sellThreshold: null };

  onInputChange = event => {
    // if (event.target.name == "Buy Threshold")
    //   this.setState({ buyThreshold: event.target.value });
    // if (event.target.name == "Sell Threshold")
    //   this.setState({ sellThreshold: event.target.value });

    switch (event.target.name) {
      case "Buy Threshold":
        this.setState({ buyThreshold: event.target.value });
        break;
      case "Sell Threshold":
        this.setState({ sellThreshold: event.target.value });
        break;
      case "Stake":
        this.setState({ stake: event.target.value });
        break;

      default:
      //this.setState({ stake: event.target.value }); // code block
    }
  };

  onThresholdSubmit = event => {
    event.preventDefault();
    this.props.setThresholds(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onThresholdSubmit} className="ui form">
        <div className="field">
          <div className="field">
            <label>Buy Threshold</label>
            <input
              name="Buy Threshold"
              placeholder="Buy Threshold"
              type="number"
              onChange={this.onInputChange}
            />
          </div>
          <div className="field">
            <label>Sell Threshold</label>
            <input
              name="Sell Threshold"
              placeholder="Sell Threshold"
              type="number"
              onChange={this.onInputChange}
            />
          </div>
          <div className="field">
            <label>Stake</label>
            <input
              name="Stake"
              placeholder="Amount"
              type="number"
              onChange={this.onInputChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="ui submit button"
          onSubmit={this.props.setThresholds}
        >
          Set
        </button>
      </form>
    );
  }
}

export default ThresholdInputs;
