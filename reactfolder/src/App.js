import React, { useState} from 'react';
import CryptoJS from 'crypto-js';
// import Button from './Button/Button'; // Assuming Button is another component

// const CalculatorContainer = () => {
//   const [value, setValue] = useState(0);

//   const handleNumberClick = useCallback((btn) => {
//     if (btn === '1') {
//       setValue(prevValue => prevValue + Number(btn));
//     }
//   }, []);
  

//   const handleClearClick = useCallback((btn) => {
//     if (btn === '2') {
//       setValue(0);
//     }
//   }, []);

//   return (
//     <div>
//       <div>{value}</div>
//       <Button handleClearClick={() => handleNumberClick(1)} />
//       <Button handleNumberClick={() => handleClearClick(1)} />
//       {/* More buttons as needed */}
//     </div>
//   );
// };

// export default CalculatorContainer;

// function App() {
//   // Button Text
//   const [buttonText, setButtonText] = useState('Hello World');

//   // This function will be called when the button is clicked
//   const handleClick = () => {
//     setButtonText('Goodbye, World!');
//   };

//   return (
//     <div style={{ padding: 30 }}>
//       <button onClick={handleClick} style={{ padding: '10px 30px' }}>
//         {/* Button Text */}
//         {buttonText}
//       </button>
//     </div>
//   );
// }

// export default App;
//hello world를 good bye world로 바꿔줌 


// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const increment = (n) => {
//     setCount(prevCount => prevCount + Number(n));
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => increment(1)}>Increment</button>
//     </div>
//   );
// };

// export default Counter;
//버튼을 클릭할 때 마다 카운트가 올라감 

// const App = () => {

//   const [count, setCount] = useState(0);


//   const handleClick = (event) => {
//     console.log(event.target);
//     console.log(event.currentTarget);
//   };

//   return (
//     <div>
//         <a href="https://wonyoung2257.tistory.com/3" onclick="console.log('The link was clicked.'); return false">
//        Click me
//         </a>
//     </div>
//   );
// };

// export default App;
//페이지를 넘기려고 할 때의 코드 


//   const [count, setCount] = useState(0);


//   const handleClick = (event) => {
//     console.log(event.target);
//     console.log(event.currentTarget);
//   };

//   return (
//     <div>
//         <a href="https://jeonghwan-kim.github.io/dev/2022/03/29/react-form-and-formik.html" onclick="console.log('The link was clicked.'); return false">
//        Click me
//         </a>
//     </div>
//   );
// };

// export default App;

//로그인 폼 만들려고 할 때 참고 페이지 

// function PasswordUpdate() {
//   const [password, setPassword] = useState("");

//   const handleChange = ({ target: { value } }) => setPassword(value);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`변경된 패스워드: ${password}`);
//   };

//   const handleClick = (event) => {
//     console.log(event.target);
//     console.log(event.currentTarget);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="password"
//         name="password"
//         value={password}
//         onChange={handleChange}
//       />
//       <button onClick={handleClick} style={{ padding: '10px 30px' }}>Click Me</button>
//       <button type="submit">비밀번호 변경</button>
//     </form>
//   );
// }

// const App = () => {
//   const [count, setCount] = useState(0);

//   // You can use your count state somewhere in this component.
//   // For now, I'll just return the PasswordUpdate component:

//   return (
//     <div>
//       <PasswordUpdate />
//       {/* Use your count state somewhere here if needed */}
//     </div>
//   );
// };

// export default App;
//클릭하여 패스워드 변경 


// function PasswordUpdate() {
//   const [password, setPassword] = useState("");

//   const handleChange = ({ target: { value } }) => setPassword(value);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const ciphertext = CryptoJS.AES.encrypt(password, 'secret key 123').toString();
//     alert(`변경된 패스워드: ${ciphertext}`);
//   };

//   const handleClick = (event) => {
//     console.log(event.target);
//     console.log(event.currentTarget);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="password"
//         name="password"
//         value={password}
//         onChange={handleChange}
//       />
//       <button type="submit">비밀번호 변경</button>
//     </form>
//   );
// }

// export default PasswordUpdate;
//패스워드 평문을 암호문으로 
// npm install crypto-js 를 설치하여 import CryptoJS from 'crypto-js'를 import 하였다. 


function PasswordUpdate() {
  const [password, setPassword] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const [isPasswordEncrypted, setIsPasswordEncrypted] = useState(false);
  const [isPasswordDecrypted, setIsPasswordDecrypted] = useState(true);

  const handleChange = ({ target: { value } }) => 
  setPassword(value);

  const handleEncrypt = (event) => {
    event.preventDefault();
    const encrypted = CryptoJS.AES.encrypt(password, 'secret key 123').toString();
    alert(`암호화된 패스워드: ${ciphertext}`);
    setCiphertext(encrypted);
    setIsPasswordEncrypted(true);
    setIsPasswordDecrypted(false);
  };

  const handleDecrypt = () => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    alert(`원래 패스워드: ${originalText}`);
    setIsPasswordEncrypted(false);
    setIsPasswordDecrypted(true);
  };

  return (
    <form onSubmit={handleEncrypt}>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button type="submit">비밀번호암호화</button>
      <button onClick={handleDecrypt} type="button">원래비밀번호</button>
    </form>
  );
}

export default PasswordUpdate;
//비밀번호 암호화 복호화 성공 

