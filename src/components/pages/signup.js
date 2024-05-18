// SignUp.js

import React from 'react';
import './signUp.css';

function SignUp() {
  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="input-group">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input type="password" id="confirm_password" name="confirm_password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
