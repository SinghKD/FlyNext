import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import minor from '../../assets/minor.png'

const Lounge = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div data-aos='fade-left' data-aos-duration='2500' className='imgDiv'>
                    <img src={minor} alt="" />
                </div>

        <div className="textDiv">
          <h2 data-aos='fade-down' data-aos-duration='2500' >Unaccompanied Minor Lounge</h2>

          <div className="grids grid">
            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
              <span className="gridTitle">Help through the airport</span>
              <p>
                lorem ipsumb lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
              <span className="gridTitle">In-flight care</span>
              <p>
                lorem ipsumb lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
              <span className="gridTitle">Priority Boarding</span>
              <p>
                lorem ipsumb lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
              <span className="gridTitle">Chauffeur service</span>
              <p>
                lorem ipsumb lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
