import React from "react";

const Step = (props) => {
  let step = this.inputStep.value;

  return (
    <div>
      <span>Krok:</span>
      <input
        ref={(data) => {
          this.inputStep = data;
        }}
        onChange={() => props.inputMethod(step)}
        type="number"
      />
    </div>
  );
};

export default Step;
