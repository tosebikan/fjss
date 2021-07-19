import "./contact.css";
import HeroImage from "../../assets/images/home_hero.jpg";
// import gallery1 from "../../assets/images/gallery1.png";
import { FiChevronDown } from "react-icons/fi";
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

      <div className="contact_info">
        <h2>Get in touch</h2>
        <div className="contact_cards">
          <div className="contact_card" style={{ backgroundColor: "#FC6A01" }}>
            <FiChevronDown />
            <h4> Our Location</h4>
            <p className="contact_body">
              Justice House 24-26 Main Street, West Calder, West Lothain, EH55
              8DR{" "}
            </p>
          </div>
          <div className="contact_card" style={{ backgroundColor: "#E768FC" }}>
            <FiChevronDown />
            <h4>Phone Number</h4>
            <p className="contact_body">(+44) 131 2851 013</p>
          </div>
          <div className="contact_card" style={{ backgroundColor: "#62B1FA" }}>
            <FiChevronDown />
            <h4>Email Addresses</h4>
            <p className="contact_title">General enquiries: </p>
            <p className="contact_body">info@fjssgroup.org</p>
            <p className="contact_title">Legal issues enquiries: </p>
            <p className="contact_body">legalservices@fjssgroup.org</p>
            <p className="contact_title">support enquiries: </p>
            <p className="contact_body">foodsupport@fjssgroup.org</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
