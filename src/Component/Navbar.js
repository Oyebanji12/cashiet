import React from 'react'
import './navbar.css'
import logo from '../asset/img-source-removebg-preview.png'

const Navbar = () => {
  return (
    // navbar
    <div className='nav-wrapper'>
        <div className='img-wrapper'>
          <img src={logo} alt="logo" className='logo' />
          <div className='logo-text'><span className='ace-coin'>AceCoin</span>Pay</div>
        </div>
        <div className='btn-wrapper'>
          <button  className='btn-0'>0</button>
          <button className='btn-1'>1</button>
          <button className='btn-dash'>:</button>
          <button className='btn-1'>1</button>
          <button className='btn-9'>9</button>
        </div>

    </div>
  )
}

export default Navbar