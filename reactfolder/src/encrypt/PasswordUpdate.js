import React, { useState} from 'react';
import CryptoJS from 'crypto-js';

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

//   npm install crypto-js 를 설치하여 import CryptoJS from 'crypto-js'를 import 하였다. 