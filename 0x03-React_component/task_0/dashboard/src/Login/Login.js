import logo from '../assets/holberton_logo.jpg';
import './Login.css';
import { getFooterCopy, getFullYear } from '../utils/utils.js'
import React from 'react';

function Login() {
  return (
    <React.Fragment>
      <div className='App-body'>
      <p>Login to access the full dashboard</p>
      <div className='formName'>
        <label htmlFor='email'>Email: </label>
        <input name='email' type='email' id='email'></input>
        <label htmlFor='password'>Password: </label>
        <input name='password' type='password' id='password'></input>
        <button>OK</button>
      </div>
      </div>
    </React.Fragment>
  );
}


export default Login;
