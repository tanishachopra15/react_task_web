import React from 'react'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <div className='hero-section'>
        <div className='navbar'>
          <div className='navbar-menu'>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
          </div>
          <div className='logo'>Landing</div>
          <button className='btn-bn'>Buy now</button>
        </div>
        <div className='hero-text-box'>
          <div className='hero-text-title'>Introduce Your Product Quickly & Effectively</div>
          <div className='hero-text-body'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</div>
        </div>
        <div className='button'>
          <button className='btn'>Purchase UI kit</button>
          <button className='btn'>Learn more</button>
        </div>
      </div>
      <div className='mobile-login'>
        <div className='mobile-content'>
          <div className='text-box'>
            <div className='text-title'>Light, Fast & Powerful</div>
            <div className='text-body'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</div>
          </div>
          <div className='title-body-content'>
            <div className='title-body'>
              <div className='title'>Title Goes Here</div>
              <div className='body'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </div>
            </div>
            <div className='title-body'>
              <div className='title'>Title Goes Here</div>
              <div className='body'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </div>
            </div>
          </div>
        </div>
        <img src='../../Images/mobile_login_image.png' className='mobile-img' alt=''></img>
      </div>
      <div className='intro-section'>
        <img src='../../Images/intro_image_1.png' alt=''></img>
        <div className='text-box'>
          <div className='text-title'>Light, Fast & Powerful</div>
          <div className='text-body'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</div>
        </div>
      </div>
      <div className='intro-section'>
        <img src='../../Images/intro_image_2.png' alt=''></img>
        <div className='text-box'>
          <div className='text-title'>Light, Fast & Powerful</div>
          <div className='text-body'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</div>
        </div>
      </div>
      <div className='intro-section'>
        <img src='../../Images/intro_image_3.png' alt=''></img>
        <div className='text-box'>
          <div className='text-title'>Light, Fast & Powerful</div>
          <div className='text-body'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</div>
        <button className='btn-pn'>Purchase Now</button>

        </div>
      </div>
    </div >
  )
}

export default LandingPage