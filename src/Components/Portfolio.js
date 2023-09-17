import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return (
    <div className='Portfolio'>
      <div className='portfolio-title' >
        <h1>My Recent <strong style={{ color: 'purple' }} >Works</strong></h1>
      </div>
      <p style={{ fontSize: '0.9rem', fontFamily: 'ralewaym' }}>
        Here are a few projects I've worked recently.
      </p>

      <div className='container' >
        <div className='cards'>

          <div className='image-section img-one'></div>

          <div className='content'>
            <h1 className='card-title'>Netflix Project</h1>
            <p className='card-description'>
              Full Stack developer, Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='btns'  >
              <button className='btn1' >Hire me</button>
              <button className='btn2' >more {">"}</button>
            </div>
          </div>
        </div>

        <div className='cards'>

          <div className='image-section img-two'></div>

          <div className='content'>
            <h1 className='card-title'>Weather Project</h1>
            <p className='card-description'>
              Full Stack developer, Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='btns'  >
              <button className='btn1' >Hire me</button>
              <button className='btn2' >more {">"}</button>
            </div>
          </div>
        </div>

        <div className='cards'>

          <div className='image-section img-three'></div>

          <div className='content'>
            <h1 className='card-title'>Spotify Project</h1>
            <p className='card-description'>
              Full Stack developer, Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='btns'  >
              <button className='btn1' >Hire me</button>
              <button className='btn2' >more {">"}</button>
            </div>
          </div>
        </div>

      </div>
      <div className='container' >
        <div className='cards'>

          <div className='image-section img-one'></div>

          <div className='content'>
            <h1 className='card-title'>Netflix Project</h1>
            <p className='card-description'>
              Full Stack developer, Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='btns'  >
              <button className='btn1' >Hire me</button>
              <button className='btn2' >more {">"}</button>
            </div>
          </div>
        </div>

        <div className='cards'>

          <div className='image-section img-two'></div>

          <div className='content'>
            <h1 className='card-title'>Weather Project</h1>
            <p className='card-description'>
              Full Stack developer, Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='btns'  >
              <button className='btn1' >Hire me</button>
              <button className='btn2' >more {">"}</button>
            </div>
          </div>
        </div>

        <div className='cards'>

          <div className='image-section img-three'></div>

          <div className='content'>
            <h1 className='card-title'>Spotify Project</h1>
            <p className='card-description'>
              Full Stack developer, Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='btns'  >
              <button className='btn1' >Hire me</button>
              <button className='btn2' >more {">"}</button>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Portfolio