import React, { useState, useEffect } from 'react';

const useCounter = (direction = false) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevState) => {
        if (direction === 'down') return prevState - 1;
        else return prevState + 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [direction]);
  return counter;
};

export default useCounter;
