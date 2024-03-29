import React from 'react'

const Login = () => {
  return (
    <>
      <h1 className='text-center my-4'>Log In</h1>
      <form className="w-75 mx-auto mb-5">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </>
  )
}

export default Login