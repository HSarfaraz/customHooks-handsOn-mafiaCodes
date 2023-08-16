import React, { useState } from "react";

const useCounter = (initialState = 0) => {
  const [count, setCount] = useState(initialState);

  const incrementCount = (val = 1) => {
    setCount(count + val);
  };

  const decrementCount = (val = 1) => {
    setCount(count - val);
  };

  return { count, incrementCount, decrementCount };
};

export default useCounter;
