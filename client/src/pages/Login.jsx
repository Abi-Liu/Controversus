import React, { useState } from "react";

const Login = () => {
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
      await axios.post("http://localhost:8000/auth/signup", {
        userName,
        password,
      });
      alert("Registration Complete! Login Now.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-center p-8 drop-shadow-lg">
      <h1 className="text-3xl mb-2">Login</h1>
      <form className="flex flex-col items-center" onSubmit={onSubmit}>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="text-center rounded-full focus:outline-0 border-solid border-2 p-2 px-8 m-3"
        />
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="text-center rounded-full focus:outline-0 border-solid border-2 p-2 px-8 m-3"
        />
        <button
          className="bg-red-400 rounded-full p-2 px-10 text-slate-50 mt-3"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
