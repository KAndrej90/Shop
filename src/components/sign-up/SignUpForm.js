import { async } from "@firebase/util";
import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";

export const SignUpForm = () => {
  const defaultForm = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formInfo, setformInfo] = useState({ defaultForm });

  const { displayName, email, password, confirmPassword } = formInfo;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformInfo({ ...formInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("tutu");
    if (password !== confirmPassword) {
      alert("password dont match");
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.log("user creation encountered an error", error);
    }
  };

  return (
    <div>
      <h1>SignUpForm</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
