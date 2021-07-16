import "./contact.css";
import HeroImage from "../../assets/images/home_hero.jpg";
import gallery1 from "../../assets/images/gallery1.png";
function Contact() {
  return (
    <div className="contact_container">
      <div className="contact_hero">
        <img src={HeroImage} alt="" />
        <div className="contact_hero_text">
          <h2>Contact</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
