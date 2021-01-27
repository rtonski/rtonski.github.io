import React, { Component } from "react";
import "./Counter.css";

import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
import Step from "./Step";

class Counter extends Component {
  state = {
    counterValue: this.props.initValue,
    stepValue: 0,
  };

  changeValue = (action) => {
    this.setState((prevState, prevProps) => {
      let currentCounterValue = prevState.counterValue;
      let currentStepValue = prevState.stepValue;
      if (action === "add") {
        currentCounterValue += 1;
      } else if (action === "reinit") {
        currentCounterValue = prevProps.initValue;
      } else if (action === "step") {
        currentCounterValue += currentStepValue;
      } else {
        currentCounterValue = 0;
      }

      return {
        counterValue: currentCounterValue,
      };
    });
  };

  updateStep = (step) => {
    this.setState((prevState) => {
      parseInt(step);

      return {
        stepValue: prevState + step,
      };
    });
  };

  render() {
    return (
      <div className="counter">
        Counter:
        <Display displayValue={this.state.counterValue} />
        <ButtonsPanel buttonMethod={this.changeValue} />
        <Step inputMethod={this.updateStep} />
      </div>
    );
  }
}

export default Counter;

// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);

//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>
//         </div>
//     );
// }

// export default Counter;
