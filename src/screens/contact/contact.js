import "./contact.css";
import HeroImage from "../../assets/images/home_hero.jpg";
// import gallery1 from "../../assets/images/gallery1.png";
import { IoLocation } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { GrMail } from "react-icons/gr";
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

      {/* CONTACT INFO SECTION*/}
      <div className="contact_info">
        <h2>Get in touch</h2>
        <div className="contact_cards">
          <div className="contact_card" style={{ backgroundColor: "#FC6A01" }}>
            <IoLocation className="contact_icon" />
            <h4> Our Location</h4>
            <p className="contact_body">
              Justice House 24-26 Main Street, West Calder, West Lothain, EH55
              8DR{" "}
            </p>
          </div>
          <div className="contact_card" style={{ backgroundColor: "#E768FC" }}>
            <MdPhoneInTalk className="contact_icon" />
            <h4>Phone Number</h4>
            <p className="contact_body">(+44) 131 2851 013</p>
          </div>
          <div className="contact_card" style={{ backgroundColor: "#62B1FA" }}>
            <GrMail className="contact_icon" />
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

      {/* CONTACT INFO SECTION*/}
      <div className="contact_form_container">
        <p className="contact_form_title">Inquiry</p>
        <h2 className="contact_form_subTitle">Leave A Message</h2>
        <p className="contact_form_body">
          {" "}
          Please use this form to get in touch; your inquiry will be directed to
          the right person.
        </p>

        <form className="contact_form">
          <div className="contact_form_row">
            <input placeholder="Your Name*" />
            <input placeholder="Your Email*" />
          </div>
          <input placeholder="How did you hear about us?" />
          <input placeholder="Subject*" />
          <textArea placeholder="Leave a Messsage*" />
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
