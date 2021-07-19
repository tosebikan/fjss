import "./about.css";
import HeroImage from "../../assets/images/home_hero.jpg";
function About() {
  return (
    <div className="about_container">
      <div className="about_hero">
        <img src={HeroImage} alt="" />
        <div className="about_hero_text">
          <h2>Contact</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>
    </div>
  );
}

export default About;
