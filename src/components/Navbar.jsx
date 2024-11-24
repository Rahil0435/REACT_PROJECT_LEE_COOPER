import React from 'react'
import './Navbar.css'
import Login from '../pages/Login';
import Britain from '../pages/Britain';

function Navbar() {
 
  return (
    <>
      <nav className="menu">
        <ul>
        <li >
            <a href="/britain">COLLECTIONS</a>
            </li>
          <li>
            <a href="/home">
              <img src="https://static.wixstatic.com/media/3b78a8_acb13bb2eb38454b972bf68fc72cfbbd~mv2.png/v1/fill/w_124,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%202022.png"/>
            </a>
          </li>
          <li>
            <a href="#">OUR STORY</a>
          </li>
          <li><a href='/login'>L</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar