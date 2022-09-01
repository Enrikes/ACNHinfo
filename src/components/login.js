import React, { useState } from "react";
import axios from "axios";

export default function Login({ setLoginMode, setLoginSuccess }) {
  const [registration, setRegistration] = useState(true);
  const [incorrectLogin, setIncorrectLogin] = useState(true);
  const [duplicateInfo, setDuplicateInfo] = useState(true);
  function handleRegistrationClick() {
    setRegistration(!registration);
  }

  async function handleRegistration(e) {
    e.preventDefault();
    let username = e.target[0].value;
    let password = e.target[1].value;
    if (e.target[0].value === "" || e.target[1].value === "") {
    } else {
      try {
        const resp = await axios.post("/createUser", {
          username: username,
          password: password,
        });
      } catch (err) {
        setDuplicateInfo(false);
        return err.response.data;
      }
    }
  }
  async function handleLogin(e) {
    e.preventDefault();
    let username = e.target[0].value;
    let password = e.target[1].value;
    if (e.target[0].value === "" || e.target[1].value === "") {
      console.log("Please enter some in here");
    } else {
      try {
        const resp = await axios.post("/login", {
          username: username,
          password: password,
        });
        console.log(resp.data);
        console.log(resp);
        if (resp.status === 200) {
          setLoginMode(true);
          setLoginSuccess(true);
          window.localStorage.setItem("isLoggedIn", true);
          const userInfo = resp.data;
        }
      } catch (error) {
        setIncorrectLogin(false);
        return error.response.data;
      }
    }
  }
  return (
    <div className="container">
      {!registration ? (
        //Register an account
        <div className="login-container">
          {!duplicateInfo ? <p id="red">Username already exists.</p> : ""}
          <form onSubmit={handleRegistration}>
            <label for="username">Username</label>
            <input type="text" id="username"></input>
            <label for="password">Password</label>
            <input type="password" id="password"></input>
            <button type="submit">Create Account</button>
          </form>
          <button type="button" onClick={handleRegistrationClick}>
            Login existing account
          </button>
        </div>
      ) : (
        //Login to existing account
        <div className="login-container">
          {!incorrectLogin ? (
            <p id="red">Incorrect username or password</p>
          ) : (
            ""
          )}
          <form onSubmit={handleLogin}>
            <label for="username">Username</label>
            <input type="text" id="username"></input>
            <label for="password">Password</label>
            <input type="password" id="password"></input>
            <button type="submit">Login</button>
            <p>{handleLogin}</p>
          </form>
          <button type="button" onClick={handleRegistrationClick}>
            Register
          </button>
        </div>
      )}
    </div>
  );
}