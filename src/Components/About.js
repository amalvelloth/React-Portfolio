import React from 'react'
import './About.css'
import img1 from '../images/_MG_4802 (4).jpg'
import { FaReact } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'
import { FaBootstrap } from 'react-icons/fa'
import { TbBrandRedux } from 'react-icons/tb'
import { BsGit } from 'react-icons/bs'



function About() {
  return (
    <div className='About' >

      <div className='about-title'>
        <h1>About <strong style={{color: 'purple'}} >Me</strong></h1>
      </div>
      <div class="portfolio-card">
        <div class="card-image">
          <img src={img1} alt="" />
        </div>
        <div class="card-content">
          <h2>Why choose me</h2>
          <p>Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <h2>Here is features</h2>
          <p className='list' >
            <li>Full stack developer</li>
            <li>Back and developer</li>
            <li>ui ux designer</li>
            <li>interaction designer</li>
            <li>super support</li>
          </p>
        </div>
      </div>


      <div className='skills-container' >
        <div className='skills-title' >
          <h1>Professional <strong style={{color: 'purple'}} >Skillset</strong></h1>
        </div>

        <div class="card-container">
          <div class="card">
            <div class="card_content">
              <AiFillHtml5 className='icons'/>
            </div>
          </div>
          <div class="card">
            <div class="card_content">
              <DiJavascript1 className='icons'/>
            </div>
          </div>
          <div class="card">
            <div class="card_content">
              <DiCss3 className='icons'/>
            </div>
          </div>
          <div class="card">
            <div class="card_content">
              <FaBootstrap className='icons'/>
            </div>
          </div>
          <div class="card">
            <div class="card_content">
              <TbBrandRedux className='icons'/>
            </div>
          </div>
          <div class="card">
            <div class="card_content">
              <FaReact className='icons'/>
            </div>
          </div>
          <div class="card">
            <div class="card_content">
              <BsGit className='icons'/>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default About