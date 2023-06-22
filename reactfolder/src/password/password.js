import React, { useState} from 'react';
import CryptoJS from 'crypto-js';

function PasswordUpdate() {
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { value } }) => setPassword(value);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`변경된 패스워드: ${password}`);
  };

  const handleClick = (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button onClick={handleClick} style={{ padding: '10px 30px' }}>Click Me</button>
      <button type="submit">비밀번호 변경</button>
    </form>
  );
}