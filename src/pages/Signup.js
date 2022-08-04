import React from 'react'

const Signup = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <Title>CREATE AN ACCOUNT</Title>
        <form>
          <input placeholder="first name" />
          <input placeholder="last name" />
          <input placeholder="email" />
          <input placeholder="username" />
          <input placeholder="password" />
          <input placeholder="confirm password" />
          <Agreement>
            By creating an account, I agree to the processing of my personal data
            in accordance with the <b>Privacy Policy</b>.
          </Agreement>
          <Button>CREATE</Button>
        </form>
      </div>
    </div>
  )
}

export default Signup