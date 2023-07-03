import React, { useEffect } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import Aos from "aos";
import "aos/dist/aos.css";

const Search = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="search container section">
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="sectionContainer grid"
      >
        <div className="btns flex">
          <div className="singleBtn">
            <span>Economy</span>
          </div>

          {/* <div className="btns flex"> */}
            <div className="singleBtn">
              <span>First Class</span>
            </div>
          {/* </div> */}
          {/* <div className="btns flex"> */}
            <div className="singleBtn">
              <span>Business Class</span>
            </div>
          {/* </div> */}
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="searchInputs flex"
        >
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>Destination</h4>
              <input type="text" placeholder="Enter destination" />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon" />
            </div>
            <div className="texts">
              <h4>Travelers</h4>
              <input type="number" placeholder="Add Guests" />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Fly Out</h4>
              <input type="date" placeholder="Add Date" />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Fly In</h4>
              <input type="date" placeholder="Add Date" />
            </div>
          </div>
          <button className="btn flex">Find Flights</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
