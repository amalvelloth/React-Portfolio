import React, { Component } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
/*import { BiChevronDown } from 'react-icons/bi'*/


const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelector('.menu li');
        const selected = dropdown.querySelector('.selected');

        select.addEventListener('click', () => {
            select.classList.toggle('select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerText = option.innerText;
                select.classList.remove('select-clicked');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open');

                options.forEach(option => {
                    option.classList.remove('active');
                });

                option.classList.add('active');
            });
        });
    });


class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    



    render() {
        return (
            <>
                <nav>
                    
                    <svg className='logo' id="logo-85" width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="ccustom" fill-rule="evenodd" clip-rule="evenodd" d="M10 0C15.5228 0 20 4.47715 20 10V0H30C35.5228 0 40 4.47715 40 10C40 15.5228 35.5228 20 30 20C35.5228 20 40 24.4772 40 30C40 32.7423 38.8961 35.2268 37.1085 37.0334L37.0711 37.0711L37.0379 37.1041C35.2309 38.8943 32.7446 40 30 40C27.2741 40 24.8029 38.9093 22.999 37.1405C22.9756 37.1175 22.9522 37.0943 22.9289 37.0711C22.907 37.0492 22.8852 37.0272 22.8635 37.0051C21.0924 35.2009 20 32.728 20 30C20 35.5228 15.5228 40 10 40C4.47715 40 0 35.5228 0 30V20H10C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM18 10C18 14.4183 14.4183 18 10 18V2C14.4183 2 18 5.58172 18 10ZM38 30C38 25.5817 34.4183 22 30 22C25.5817 22 22 25.5817 22 30H38ZM2 22V30C2 34.4183 5.58172 38 10 38C14.4183 38 18 34.4183 18 30V22H2ZM22 18V2L30 2C34.4183 2 38 5.58172 38 10C38 14.4183 34.4183 18 30 18H22Z" fill="black"></path></svg>
                    

                    <div className='navbar'>
                        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>

                            <NavLink to="/home" className='home'>
                                <li>Home</li>
                            </NavLink>
                            <NavLink to="/about" className='about'>
                                <li>About</li>
                            </NavLink>
                            <NavLink to="/portfolio" className='portfolio'>
                                <li>Portfolio</li>
                            </NavLink>
                            <NavLink to="/contact" className='contact'>
                                <li>Contact</li>
                            </NavLink>

                            <button className='github-star'>
                                <a rel="noreferrer" href="https://github.com/amalvelloth/React-Portfolio">
                                <FontAwesomeIcon className='facodebranch' icon={faCodeBranch}></FontAwesomeIcon>
                                <FontAwesomeIcon className='fastar' icon={faStar}></FontAwesomeIcon></a>
                            </button>

                            {/*<button className='github-icon'>
                                <h1>GitHub</h1><BiChevronDown style={{fontSize:'1.2rem'}}/>
                            </button>*/}


                            <div className='dropdown'>
                                <div className='select'>
                                    <span className='selected'>GitHub</span>
                                    <div className='caret'></div>
                                </div>
                                <ul className='menu'>
                                    <li className='active'>Profile</li>
                                    <li>Repositories</li>
                                </ul>
                            </div>

                            

                        </ul>
                    </div>



                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ?
                            "fas fa-times" : "fas fa-bars"}>
                        </i>
                    </div>


                </nav>
            </>
        )
    }
}

export default Navbar