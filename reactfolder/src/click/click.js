import React, { useState } from 'react';

const Click = () => {

  const [count, setCount] = useState(0);


  const handleClick = (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
  };

  return (
    <div>
        <a href="https://wonyoung2257.tistory.com/3" onclick="console.log('The link was clicked.'); return false">
       Click me
        </a>
    </div>
  );
};

export default Click;