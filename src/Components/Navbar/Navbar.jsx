import React, { useState } from 'react'
import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs'
import { AiOutlineGlobal } from 'react-icons/ai'
import { CgMenuGridO } from 'react-icons/cg'
import flightLogo from '../../assets/flight-logo.png'


const Navbar = () => {

    const [active, setActive] = useState('navBarMenu');

    const showNavBar = () => {
        setActive('navBarMenu showNavBar');
    };
     
    const removeNavBar = () => {
        setActive('navBarMenu');
    };


    const [navBg, addnavBG] = useState('navBarTwo');

    const addBg = () => {
        if(window.scrollY >= 10)
            addnavBG('navBarTwo navbar_with_bg');   
        else
            addnavBG('navBarTwo');
    }
    window.addEventListener('scroll', addBg);

    return(
        <div className='navBar flex'>
            <div className='navBarOne flex'>
                <div>
                    <SiConsul className='icon'/>
                </div>
               
                <div className='atb flex'>
                <div className='none flex'>
                    <li className='flex'> <BsPhoneVibrate className='icon'/> Support</li>
                    {/* <span className='title'>FlyNext</span> */}
                    <li className='flex'> <AiOutlineGlobal className='icon'/> Languages</li>
                </div>
                    <span>Sign In</span>
                    <span>Sign Out</span>

                </div>
            </div>

            <div className={navBg}>
                <div className='logoDiv'>
                    <img src={flightLogo} className='logo'/>
                </div>

                <div className={active}>
                    <ul className='menu flex'>
                        <li onClick={removeNavBar} className='listItem'>Home</li>
                        <li onClick={removeNavBar}className='listItem'>About</li>
                        <li onClick={removeNavBar}className='listItem'>Offers</li>
                        <li onClick={removeNavBar}className='listItem'>Destinations </li>
                        <li onClick={removeNavBar}className='listItem'>Contact</li>
                    </ul>
                    <button onClick={removeNavBar} className='btn flex btnOne' > Contact </button>
                </div>
                {/* <button className='btn flex btnTwo' > Contact </button> */}
                <div onClick={showNavBar} className='toggleIcon'><CgMenuGridO className='icon'/></div>
            </div>
        </div>

        
    )
}

export default Navbar;