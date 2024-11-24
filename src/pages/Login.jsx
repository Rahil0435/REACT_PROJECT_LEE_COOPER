import React from 'react'
import './Login.css'

function Login() {
  return (
    <>
    <div className="login-box">
  <img src="https://static.wixstatic.com/media/3b78a8_acb13bb2eb38454b972bf68fc72cfbbd~mv2.png/v1/fill/w_124,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%202022.png"></img>
  <form>
    <div className="user-box">
      <input type="text" name="" required="" />
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required="" />
      <label>Password</label>
    </div>
  </form>
  <button>LOGIN</button>
</div>

</>
  )
}

export default Login