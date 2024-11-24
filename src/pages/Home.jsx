import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import img from './3b78a8_c5ec759fd26a4ddc84bd8e796.jpg';
import img1 from './a1.jpg'
import img2 from './a2.jpg'
import img3 from './a3.jpg'
import img4 from './a4.jpg'
import img5 from './a5.jpg'

function Home() {
  return (
    <>
    <Navbar/>
    <img src={img} id='main-img'></img><br></br><br></br>
    <a href="/britain">
      <h1 id='name'>INSPIRED BY BRITAIN <br></br>VIEW THE CAMPAIGN</h1></a><br></br><br></br>
    <div className='img1'>
      <img src={img1}></img>
      <img src={img2}></img>
      <img src={img3}></img>
      <img src={img4}></img>
      <img src={img5}></img>
      <div className='overlay-text1'>
        <h1>THE COOPER COLLECTION</h1>
        <p>VIEW NOW</p>
      </div>
    </div><br></br><br></br>
    <div className='img2'>
      <img src='https://static.wixstatic.com/media/3b78a8_dfbd23ef8f784f7e812964b2ef07de05~mv2.jpg/v1/fill/w_321,h_486,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3b78a8_dfbd23ef8f784f7e812964b2ef07de05~mv2.jpg'></img>
      <img src='https://static.wixstatic.com/media/3b78a8_32058e089e994aad88e3710e1bac0dc2~mv2.jpg/v1/fill/w_324,h_486,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3b78a8_32058e089e994aad88e3710e1bac0dc2~mv2.jpg'></img>
      <img src='https://static.wixstatic.com/media/3b78a8_ab49f784566d496e8f113b37af5047aa~mv2.jpg/v1/fill/w_324,h_486,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3b78a8_ab49f784566d496e8f113b37af5047aa~mv2.jpg'></img>
      <img src='https://static.wixstatic.com/media/3b78a8_25fb892e31d04dbf955f03acbaa22205~mv2.jpg/v1/fill/w_324,h_486,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3b78a8_25fb892e31d04dbf955f03acbaa22205~mv2.jpg'></img>
      <div className='overlay-text2'>
        <h1>OUR DENIM FITS</h1>
        <p>VIEW NOW</p>
      </div>
    </div>
    <br /><br /><br /><br/>
    <hr/>
    <footer>
        <img src='https://static.wixstatic.com/media/3b78a8_df29598af40b41a6b24e9dd3ed22b7a4~mv2.png/v1/fill/w_168,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/The-Cooper-Collection_Final.png'></img>
        <img src='https://static.wixstatic.com/media/3b78a8_e89524e749214c1493d8c30b1ba180fd~mv2.png/v1/fill/w_122,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/l2.png'></img>
        <img src='https://static.wixstatic.com/media/3b78a8_e0b1ee3998ed41a4ab319d6cac1a81cb~mv2.png/v1/fill/w_122,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/l3.png'></img>
        <img src='https://static.wixstatic.com/media/3b78a8_3c3058610f944d9ebbbf4f5ee6763683~mv2.png/v1/fill/w_115,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LC-workwear-Logo-web-FINAL3_edited.png'></img>
   </footer>
        <br /><br /><br /><br />
        <hr/>
        <div className="footer-links">
        <p>FACEBOOK</p>
        <p>INSTAGRAM</p>
        <p>TIKTOK</p>
        <p>TERMS & CONDITIONS</p>
        <p>CONTACTS</p>
        <p>PRIVACY & POLICY</p>
        <p>@LEECOOPER 2024</p>
    </div>
   
    </>
  )
}

export default Home