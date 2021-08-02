import "./people.css";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

import HeroImage from "../../assets/images/home_hero.jpg";
import getInvolved from "../../assets/images/getinvolved.jpg";
import { people } from "../../helpers/data";

function People() {
  return (
    <div className="people_container">
      <div className="people_hero">
        <img src={HeroImage} alt="" />
        <div className="people_hero_text">
          <h2>Our People</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>

      <div className="people_images">
        {people.map(el => (
          <div className="people_card">
            <img src={el.url} alt="" />
            <div className="people_info">
              <h4>{el.name}</h4>
              <p>{el.position}</p>
              {/*<div className="people_socials">
                <FaFacebook className="people_icon" />
                <FaTwitter className="people_icon" />
                <FaLinkedin className="people_icon" />
              </div>*/}
            </div>
          </div>
        ))}
      </div>

      <div className="people_footer">
        <img src={getInvolved} alt="" className="people_footer_image" />
        <div className="people_footer_info">
          <h2>Become a Volunteer</h2>
          <button>Get involved</button>
        </div>
      </div>
    </div>
  );
}

export default People;
