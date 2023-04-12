import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({});

  function handleChange(event) {
    const { value, id } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }
  console.log(formData);
  return (
    <div>
      <h1>Register</h1>
      <form>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
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
      </form>
    </div>
  );
};

export default Register;
