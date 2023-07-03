import React, {useEffect} from 'react'
import travel from '../../assets/travel.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Support = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);

    return(
        <div className='support container section'>
            <div className='sectionContainer'>
                <div className='titlesDiv'>
                    <small>Travel Support</small>
                    <h2>Book and travel with confidence</h2>
                    <p>Find help with your bookings and travel plans to see the world without worries</p>
                </div>
                <div className='infoDiv grid'>
                    <div className='textDiv grid'>
                        <div data-aos='fade-down' data-aos-duration='2500' className='singleInfo'>
                            <span className='number'>01</span>
                            <h4>Travel requirement for your destination</h4>
                            <p>Find help with your bookings and travel plans to visit and enjoy your most sought after destinations</p>
                        </div>

                        <div data-aos='fade-down' data-aos-duration='3500' className='singleInfo'>
                            <span className='number colorOne'>02</span>
                            <h4>Cab and driver services at arrival</h4>
                            <p>Find help with your bookings and travel plans to visit and enjoy your most sought after destinations</p>
                        </div>

                        <div data-aos='fade-down' data-aos-duration='4500' className='singleInfo'>
                            <span className='number colorTwo'>03</span>
                            <h4>Travel insurance against risks </h4>
                            <p>Find help with your bookings and travel plans to visit and enjoy your most sought after destinations</p>
                        </div>
                    </div>

                    <div data-aos='fade-left' data-aos-duration='2500' className='imgDiv'>
                        <img src={travel} alt="" />
                    </div>
                </div>
            </div>           
        </div>
    )
}

export default Support;