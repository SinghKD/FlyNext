import React from "react";
import Gotham from "../../assets/gotham.png";
import BW from "../../assets/bw.png";
import Gondor from "../../assets/gondor.png"
import Vormir from "../../assets/vormir.png"
import Thanos from "../../assets/thanos.png"
import Aragorn from "../../assets/aragorn.png"
import KD from "../../assets/kd.png"
import GT from "../../assets/gt.png"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const travelers = [
  {
    id: 1,
    destinationImage: Gotham,
    travelerImage: BW,
    travelerName: "Bruce Wayne",
    socialLink: "@notBatman",
  },
  {
    id: 2,
    destinationImage: Gondor,
    travelerImage: Aragorn,
    travelerName: "Aragorn",
    socialLink: "@theKingIsBack",
  },
  {
    id: 3,
    destinationImage: Vormir,
    travelerImage: Thanos,
    travelerName: "Thanos",
    socialLink: "@stoneEnthusiast",
  },
  {
    id: 4,
    destinationImage: GT,
    travelerImage: KD,
    travelerName: "Karan",
    socialLink: "@karandeep_0201",
  },
];

const Travellers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="travelers">
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>Top Travelers of the month</h2>

        <div className="travelersContainer grid">
          {travelers.map((x) => (
            <div data-aos='fade-up' data-aos-duration='2500' className="singleTraveler">
              <img className="destinationImage" src={x.destinationImage} />
              <div className="travelerDetails">
                <div className="travelerPicture">
                  <img src={x.travelerImage} className="travelerImage" />
                </div>
                <div className="travelerName">
                  <span>{x.travelerName}</span>
                  <p>{x.socialLink}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Travellers;
