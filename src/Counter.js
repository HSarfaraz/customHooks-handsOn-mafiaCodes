import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import useCounter from "./hooks/useCounter";

function Counter() {
  // const [count, setCount] = useState(0);
  // const incrementCount = () => {
  //   setCount(count + 1);
  // };

  // const decrementCount = () => {
  //   setCount(count - 1);
  // };

  const { count, incrementCount, decrementCount } = useCounter();
  return (
    <div className="App">
      <h1>Custom hooks</h1>
      <h4>{count}</h4>
      <button onClick={() => incrementCount()}>Increment Count</button>
      <button onClick={() => decrementCount()}>Decrement Count</button>
    </div>
  );
}

export default Counter;
