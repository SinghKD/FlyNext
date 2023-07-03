import React, { useEffect } from 'react'

import video from '../../assets/video2.mp4'
import takeoff from '../../assets/takeoff.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);


    return(
        <div className='home flex container'>
            <div className='mainText'>
                <h1 data-aos='fade-up' data-aos-duration='2500'>FlyNext</h1>
                <h2 data-aos='fade-up' data-aos-duration='2500'>Your Next Destination Awaits You</h2>
            </div>

            <div data-aos='fade-down' data-aos-duration='2500' className='homeImages flex'>
                <div className='videoDiv'>
                    <video className='video' autoPlay muted loop src={video}></video>
                </div>
                <img className='plane' src={takeoff} alt="" />
            </div>
        </div>
    )
}

export default Home;