import React from 'react'
import './hero.css'
import {HiPencil} from 'react-icons/hi'
import {RiMastercardFill} from 'react-icons/ri'
import {TiTick} from 'react-icons/ti'
import {RxDragHandleDots1} from 'react-icons/rx'
import paymentImage from '../asset/Screen-az.png'

const Hero = () => {
  return (
    
    <div className='hero-container'>
      <div className='hero-wrapper'>
      {/* card number */}
      
      <div>
        <div className='card-number'>Card Number</div>
        <div className='card-wrapper'>
         <p> Enter the 16-digit card number on the card </p>
          <div className='pencil-wrap'>
            <HiPencil className='pencil-icon' />
            <div  className='edit' >edit</div>
          </div>
        </div>
      </div>
      {/* mastercard */}
      <div>
       
        <div className='mastercard-section'>
         <div className='mastercard-wrapper'>
          
          <div className='mastercard-wrap'>
          <RiMastercardFill className='mastercard-icon' />
          <span className='mastercard-number'> 2412  -  7512  -  3412  -  3456 </span>
          </div>
          
          <div className='tick-icon'><TiTick /></div>
          </div> 
        </div>
      </div>
      {/* cvv number */}
      <div className='cvv-section'>
        
        <div className='cvv-number'>CVV Number</div>
        <div className='cvv-wrapper'>
          <div className='text'>Enter the 3 or 4 digit number of the card</div>
          <div className='cvv-border'>
          <span className='text-in-cvv'>327</span>   <RxDragHandleDots1 className='dot-icon' />
          </div>
        </div>
      </div>
      {/* expiry date */}
      <div className='expiry-section'>
        
        <div className='expiry-date'>Expiry date</div>
        <div className='expiry-wrapper'>
          <div className='text'>Enter the expiration date of the card</div>
          <div className='expiry-border'>
          <div className='first-border'>09 </div>  <span className='slash'> / </span> <div className='second-border'>22</div>
        </div>
        </div>
      </div>
      {/* password */}
      <div className='password-section'>
        
        <div className='password'>Password</div>
        <div className='password-wrapper'>
          <div className='text'>Enter your dynamic password</div>
          <div className='password-border'>
            <div className='star'>*****</div>
            <div> <RxDragHandleDots1 className='dot-icon' /></div>
          </div>
        </div>
      </div>
      {/* pay now */}
      <div className='paynow-btn-section'>
        <button className='paynow-btn'>Pay Now</button>
      </div>
      </div>
      {/* second section/ image */}
      <div className='payment-img-wrapper'>
        <img src={paymentImage} alt="" />
      </div>
        
      </div>
  )
}

export default Hero