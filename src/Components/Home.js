import { useState, useEffect } from 'react';
import './Home.css'
import './Navbar.css'
import Lottie from 'lottie-react';
import animationData from '../Animation/animation_lkque6et.json'
import avatar from '../images/Picsart_23-09-05_17-23-44-994.png'
import Tilt from "react-parallax-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { PiHandshake } from 'react-icons/pi'
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';




const Home = () => {



  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 2) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (

    <div className="home-container">

      <section className="gradient-section" style={{ background: `linear-gradient(${angle}deg, lightblue, #7d7df8)` }}>

        <div className='left' >
          <div className='svg-container1'>
            <Lottie animationData={animationData} />
          </div>
          <div className='box' >
            <h1 className='title' >Hi, I'M Amal V</h1>
            <p className='description' >Full Stack developer, Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <div className='buttons'  >
              <NavLink to="/contact" style={{textDecoration:'none'}}>
              <button className='button1' >Contact me</button>
              <button className='button2' >more {">"}</button></NavLink>
              
            </div>

            <div className='rowtext'>
              <h6 className='reviewsn'>12.5K</h6>
              <h6 className='customersn'>3.1K</h6>
              <h6 className='completedn'>300</h6>
            </div>

            <div className='rowtextp' >
              <p className='reviewsp'>Reviews</p>
              <p className='customersp'>Customers</p>
              <p className='completedp'>Completed Projects</p>
            </div>


          </div>

        </div>


        <div className='right'>
          <div className='svg-container'>
            <Lottie animationData={animationData} />
          </div>
        </div>


      </section>


      <section className='section-introduction'>

        <div className='home-container2'>

          <div className='introduction-content'>

            <div className='text-content'>
              <h1 className='title-introduction'>LET ME <strong style={{ color: 'purple' }} >INTRODUCE</strong> MYSELF</h1>
              <p className='description-introduction-line1'>I'm passionate Full Stack web developer having an experience of web applications with <strong>React.js</strong> and <strong>Next.js</strong> Framework</p>
              <p className='description-introduction-line2'>Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving a complex and challenging real-world problems.</p>
            </div>
            <div className='Image-container' >
              <Tilt>
                <img src={avatar} className='avatar' alt='Avatar' />
              </Tilt>
            </div>

          </div>

        </div>
      </section>



      <footer className="footer">
        <div className='footer-card'>
          <div class="home-card">
            <div className='home-card-content'>
              <div className='home-card-item'>
                <h1>Start a project</h1>
              </div>
              <div className='home-card-item'>
                <p>Interested In Collaborating With Me? Let's get in touch</p>
              </div>
              <div className='home-card-item'>

                  <button style={{ border: '2px solid #5BE9B9' }}>
                    <h3>Lets do this</h3>
                    <PiHandshake className='handshakeicon' />
                  </button>

              </div>
            </div>
          </div>
        </div>
        <div className='introduction-content2'>
          <h1>FIND ME ON</h1>
          <p>Feel free to <strong>connect</strong> with me</p>
          <a rel="noreferrer" href="https://m.facebook.com/profile.php?id=100010112358900">
            <FontAwesomeIcon className='apps' icon={faFacebookF}></FontAwesomeIcon></a>
          <a rel="noreferrer" href="https://www.twitter.com/ImZeke7">
            <FontAwesomeIcon className='apps' icon={faXTwitter}></FontAwesomeIcon></a>
          <a rel="noreferrer" href="https://www.instagram.com/mr__g">
            <FontAwesomeIcon className='apps' icon={faInstagram}></FontAwesomeIcon></a>
          <a rel="noreferrer" href="https://github.com/amalvelloth">
            <FontAwesomeIcon className='apps' icon={faGithub}></FontAwesomeIcon></a>
        </div>
        <div className="footer-content">

          <p>Designed and Developed by AMAL.V</p>

          <h3>Made with <span>React</span><FontAwesomeIcon className='react-icon' icon={faReact}></FontAwesomeIcon></h3>

          <p>Copyright &copy; 2023 . All rights reserved.</p>

        </div>
      </footer>


    </div>

  )
}

export default Home