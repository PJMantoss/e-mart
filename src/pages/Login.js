import React from 'react'

const Login = () => {
  return (
    <>
      <h1 className='text-center my-4'>Log In</h1>
      <form className="w-75 mx-auto mb-5">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            By creating an account, I agree to the processing of my personal data
            in accordance with the <b>Privacy Policy</b>.
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </>
  )
}

export default Login