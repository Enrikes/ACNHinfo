import React, { useState } from 'react';
import axios from 'axios';
import RegisterButton from './registerButton';

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
    if (e.target[0].value === '' || e.target[1].value === '') {
    } else {
      try {
        const resp = await axios.post('/createUser', {
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
    if (e.target[0].value === '' || e.target[1].value === '') {
      console.log('Please enter some in here');
    } else {
      try {
        const resp = await axios.post('/login', {
          username: username,
          password: password,
        });
        console.log(resp.data);
        console.log(resp);
        if (resp.status === 200) {
          setLoginMode(true);
          setLoginSuccess(true);
          window.localStorage.setItem('isLoggedIn', true);
        }
      } catch (error) {
        //Sends a login info incorrect message.
        setIncorrectLogin(false);
        return error.response.data;
      }
    }
  }
  return (
    <div className='login-wrapper'>
      {!registration ? (
        //Register an account
        <div className='login-container'>
          {!duplicateInfo ? <p id='red'>Username already exists.</p> : ''}
          <div className='form-container'>
            <form className='form' onSubmit={handleRegistration}>
              <label for='username'>Username</label>
              <input type='text' id='username'></input>
              <label for='password'>Password</label>
              <input type='password' id='password'></input>
              <button id='login-submit' type='submit'>
                Create Account
              </button>
              <p>Already have an account?</p>
              <button
                id='login-submit'
                type='button'
                onClick={handleRegistrationClick}
              >
                Login existing account
              </button>
            </form>
          </div>
        </div>
      ) : (
        //Login to existing account
        <div className='login-container'>
          {!incorrectLogin ? (
            <p id='red'>Incorrect username or password</p>
          ) : (
            ''
          )}
          <div className='form-container'>
            <form className='form' onSubmit={handleLogin}>
              <label htmlFor='username'>Username</label>
              <input type='text' id='username'></input>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password'></input>
              <button id='login-submit' type='submit'>
                Login
              </button>
            </form>
            <h1 id='register'>Need an account?</h1>
            <RegisterButton registerClick={handleRegistrationClick} />
          </div>
        </div>
      )}
    </div>
  );
}
