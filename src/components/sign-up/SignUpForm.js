import React, { useState } from "react";

export const SignUpForm = () => {
  const defaultForm = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formInfo, setformInfo] = useState({ defaultForm });
  console.log(formInfo);

  const { displayName, email, password, confirmPassword } = formInfo;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformInfo({ ...formInfo, [name]: value });
  };

  return (
    <div>
      <h1>SignUpForm</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault;
        }}
      >
        <label>Name</label>
        <input
          type="text"
          name="displayName"
          required
          onChange={handleChange}
          value={displayName}
        ></input>
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
        ></input>
        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          onChange={handleChange}
          value={password}
        ></input>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          required
          onChange={handleChange}
          value={confirmPassword}
        ></input>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};
