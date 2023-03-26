import React, { useState } from "react";
import Captcha from "./Captcha";
import "./SignupForm.css";


const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const[darkMode, setDarkMode] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={darkMode ? 'form dark' : 'form'}>
    <form onSubmit={handleSubmit}>
    <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? 'Light mode' : 'Dark mode'}
</button>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <Captcha />

      <button type="submit">Sign up</button>
      
    </form>
    </div>
  );
};

export default SignupForm;
