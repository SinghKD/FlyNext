import React from 'react'
import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

const Subscribe = () => {
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    //   }, []);
      
    return(
        <div>
            <div className='subscribe section'>
                <div  className='sectionContainer container'>
                    <h2>Subscribe to Newsletters and get the latest offers</h2>
                    <div className='inputDiv flex'>
                        <input type="text" placeholder='Enter your email address' />
                        <button className='btn'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;