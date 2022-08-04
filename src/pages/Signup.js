import React from 'react';
import './signup.css';

const Signup = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <h1 className='title'>CREATE AN ACCOUNT</h1>
        <form>
          <input placeholder="first name" />
          <input placeholder="last name" />
          <input placeholder="email" />
          <input placeholder="username" />
          <input placeholder="password" />
          <input placeholder="confirm password" />
          <span className='agreement'>
            By creating an account, I agree to the processing of my personal data
            in accordance with the <b>Privacy Policy</b>.
          </span>
          <button>CREATE</button>
        </form>
      </div>
    </div>
  )
}

export default Signup;