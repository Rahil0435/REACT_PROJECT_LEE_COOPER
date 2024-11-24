import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <>
    <div className="signup">
  <h1>Signup</h1>
  <form action="" method="get" className="signup-form">
    <input
      type="text"
      name="name"
      placeholder="Name"
      id="name"
      defaultValue=""
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      id="email"
      defaultValue=""
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      id="password"
      defaultValue=""
    />
    <input
      type="password"
      name="re-password"
      placeholder="Re-Password"
      id="re-password"
      defaultValue=""
    />
    <input type="submit" defaultValue="Signup" className="login" />
    &nbsp;&nbsp;
  </form>
</div>
</>
  )
}

export default Signup