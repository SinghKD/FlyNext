import React, {useEffect} from 'react'
import { RxCalendar } from 'react-icons/rx';
import { BsShieldCheck, BsBookmarkCheck } from 'react-icons/bs'
import Aos from "aos";
import "aos/dist/aos.css";

const Info = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
      
    return(
        <div className='info section'>
            <div className='infoContainer container'>
                <div className='titleDiv flex'>
                    <h2  data-aos='fade-right' data-aos-duration='2500' >Travel and make memories around the globe</h2>
                    <button data-aos='fade-left' data-aos-duration='2500' className='btn'>
                        View All
                    </button>
                </div>

                <div className='cardsDiv grid'>
                    <div data-aos='fade-up' data-aos-duration='2500' className='singleCard grid'>
                        <div className='iconDiv flex'>
                            <RxCalendar className='icon'/>
                        </div>
                        <span className='cardTitle'>Book and Sit Back</span>
                        <p>You can also contact us via phone or email to book your flight ticket!</p>
                    </div>

                    <div data-aos='fade-up' data-aos-duration='3500' className='singleCard grid'>
                        <div className='iconDiv flex colorOne'>
                            <BsShieldCheck className='icon'/>
                        </div>
                        <span className='cardTitle'>Smart Travel Checklist</span>
                        <p>You can also contact us via phone or email to book your flight ticket!</p>
                    </div>

                    <div data-aos='fade-up' data-aos-duration='4500' className='singleCard grid'>
                        <div className='iconDiv flex colorTwo'>
                            <BsBookmarkCheck className='icon'/>
                        </div>
                        <span className='cardTitle'>Maximum savings</span>
                        <p>You can also contact us via phone or email to book your flight ticket!</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Info;