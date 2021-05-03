import React from "react";

const Counter = ({ number, onIncrement, onDecrement, onTest, String }) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrement}>증가 (+)</button>
      <button onClick={onDecrement}>감소 (-)</button>
      <button onClick={onTest}>test</button>
      <h1>{String}</h1>
    </div>
  );
};

Counter.defaultProps = {
  number: 0,
  testS: "null",
};

export default Counter;
