import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({});

  function handleChange(event) {
    const { value, id } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/auth/signup", { formData });
      alert("Registration Complete! Login Now.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="userName"
          value={formData.userName}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
