import React from 'react'
import './Contact.css'
import { AiFillInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { ReactComponent as TestSvgIcon } from "../SVG/Phone.svg"
import { ReactComponent as TestSvgIcon2 } from "../SVG/Mail.svg"


function Contact() {
  return (
    <div className='Contact'>
      <div className='Left' >
        <div className='contact-box' >
          <h6 className='getintouch' >GET IN TOUCH</h6>
          <h1 className='contact-title'>Contact</h1>
          <p className='contact-para' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore id sequi aliquid. Ducimus a, commodi quidem ratione eveniet sit accusantium quis. Quod nulla facere ipsum.</p>

          <TestSvgIcon2 style={{ marginRight: '1rem', marginBottom: '-4rem', fill: '#7777FF', width: '32px' }} />
          <div className='mail' >

            <h6>SAY HI!</h6>
            <h2 style={{ fontFamily: 'ubuntu' }} >amalv414@gmail.com</h2>
          </div>

          <div className='phone' >

            <h6>LET'S TALK</h6>
            <div className='phone-title' >
              <TestSvgIcon style={{ marginTop: '-0.42rem', fill: '#7777FF', height: '32px', width: '32px' }} />
              <h2 style={{ fontFamily: 'ubuntu' }} >9876543210</h2>
            </div>
          </div>

          <div className='socialapps' >
            <h6 className='social' >STAY CONNECTED</h6>
            <a rel="noreferrer" href="https://m.facebook.com/profile.php?id=100010112358900">
              <BsFacebook size='1.5rem' className='fb' /></a>
            <a rel="noreferrer" href="https://www.instagram.com/mr__g">
              <AiFillInstagram size='1.5rem' className='insta' /></a>
            <a rel="noreferrer" href="https://www.twitter.com/ImZeke7">
              <BsTwitter size='1.5rem' className='twitter' /></a>
          </div>
        </div>
      </div>

      <div className='card-form' >
        <div className='form-content' >
          <h1 style={{ padding: '2rem 0' }} >Send a Message</h1>
          <div className='form-text' >
            <h3 className='form-name' >Name*</h3>
            <div className='form-text1' >
              <input className="form-controln" placeholder='First' name="Text" />
              <input className="form-controln" placeholder='Last' name="Text" />
            </div>
          </div>
          <div className='form-text2' >
            <h3 className='form-name' >Subject<span>*</span></h3>
            <input className="form-control" name="Text" />
          </div>
          <div className='form-text3' >
            <h3 className='form-name' >Email*</h3>
            <input className="form-control" name="Text" />
          </div>
          <div className='form-text4' >
            <h3 className='form-name' >Message*</h3>
            <input className="form-controlm" name="Text" />
          </div>

          <button className='msg-btn' >Send Message</button>
        </div>

      </div>
    </div>
  )
}

export default Contact