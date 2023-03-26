import React, { useState } from "react";
import './Captcha.css'

const Captcha = () => {
  // Generate random number for the captcha
  const [captchaNumber, setCaptchaNumber] = useState(
    Math.floor(Math.random() * 1000)
  );

  // User's input for the captcha
  const [captchaInput, setCaptchaInput] = useState("");

  // Error message to be displayed if user's input is incorrect
  const [errorMessage, setErrorMessage] = useState("");

  // Function to generate a new captcha number
  const generateCaptchaNumber = () => {
    setCaptchaNumber(Math.floor(Math.random() * 1000));
    setCaptchaInput("");
    setErrorMessage("");
  };

  // Function to handle user's input and validate the captcha
  const handleCaptchaInput = (e) => {
    const input = e.target.value;
    setCaptchaInput(input);
    if (input.length === 3) {
      if (parseInt(input) === captchaNumber) {
        setErrorMessage("");
      } else {
        setErrorMessage("Incorrect captcha, please try again.");
      }
    }
  };

  return (
    <div>
      <label htmlFor="captcha">Please enter the captcha:</label>
      <div>
        <span>{captchaNumber}</span>
        <button onClick={generateCaptchaNumber}>New captcha</button>
      </div>
      <input
        type="text"
        name="captcha"
        value={captchaInput}
        onChange={handleCaptchaInput}
        maxLength="3"
      />
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default Captcha;
