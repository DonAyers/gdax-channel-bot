import React from "react";
import "./Slider.css";

class Slider extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { value: 0 };

  render() {
    return (
      <div className=".sliderContainer">
        <input
          onChange={e => this.setState({ value: e.target.value })}
          type="range"
          min="1"
          max="100"
          step=".05"
          class="slider"
          id="myRange"
        />
        <h3>{this.state.value}</h3>
      </div>
    );
  }
}

export default Slider;
