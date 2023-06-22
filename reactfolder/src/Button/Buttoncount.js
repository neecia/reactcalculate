import React, { useState } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = (n) => {
    setCount(prevCount => prevCount + Number(n));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => increment(1)}>Increment</button>
    </div>
  );
};

export default Counter;
//버튼을 클릭할 때 마다 카운트가 올라감 