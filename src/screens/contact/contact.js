import * as React from "react";
import "./contact.css";
import HeroImage from "../../assets/images/home_hero.jpg";
// import gallery1 from "../../assets/images/gallery1.png";
import { IoLocation } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { GrMail } from "react-icons/gr";
// import axios from "axios";
// import emailjs from "emailjs-com";

function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [response, setResponse] = React.useState("");

  const sendMail = async e => {
    e.preventDefault();

    console.log({ name, email, message });
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      alert("please enter required fields");
      return;
    }

    setLoading(true);

    let template_params = {
      from_name: name,
      to_name: "FJSS GROUP",
      message: message,
      to: "tosebikan@gmail.com",
      from_mail: email
    };

    window.emailjs
      .send("service_fvgdzom", "template_8nhhvzo", template_params)
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setMessage("");
          setName("");
          setEmail("");
          setResponse("Mail sent successfully!");
          setTimeout(() => setResponse(""), 3000);
        },
        function(error) {
          console.log("FAILED...", error);
          setLoading(false);
          setResponse("FAILED..., please try again later");
          setTimeout(() => setResponse(""), 3000);
        }
      );
  };

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
          <div
            className="contact_card_mid"
            style={{ backgroundColor: "#62B1FA" }}
          >
            <GrMail className="contact_icon" />
            <h4>Email Addresses</h4>
            <p className="contact_title">General enquiries: </p>
            <p className="contact_body">
              <a href="mailto:info@fjssgroup.org">info@fjssgroup.org</a>
            </p>

            <p className="contact_title">Legal issues enquiries: </p>
            <p className="contact_body">
              {" "}
              <a href="mailto:legalservices@fjssgroup.org">
                legalservices@fjssgroup.org
              </a>
            </p>

            <p className="contact_title">Events: </p>
            <p className="contact_body">
              {" "}
              <a href="mailto:Events@fjssgroup.org">Events@fjssgroup.org</a>
            </p>

            <p className="contact_title">Volunteer service: </p>
            <p className="contact_body">
              {" "}
              <a href="mailto:volunteerservices@fjssgroup.org">
                volunteerservices@fjssgroup.org
              </a>
            </p>

            <p className="contact_title">Projects: </p>
            <p className="contact_body">
              {" "}
              <a href="mailto:Projects@fjssgroup.org">Projects@fjssgroup.org</a>
            </p>

            <p className="contact_title">support enquiries:</p>
            <p className="contact_body">
              {" "}
              <a href="mailto:foodsupport@fjssgroup.org">
                foodsupport@fjssgroup.org{" "}
              </a>
            </p>
          </div>
          <div className="contact_card" style={{ backgroundColor: "#E768FC" }}>
            <MdPhoneInTalk className="contact_icon" />
            <h4>Phone Number</h4>
            <p className="contact_body">(+44) 131 2851 013</p>
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

        <form className="contact_form" onSubmit={sendMail}>
          <div className="contact_form_row">
            <input
              placeholder="Your Name*"
              required
              name="user_name"
              value={name}
              type="text"
              onChange={e => setName(e.target.value)}
            />
            <input
              placeholder="Your Email*"
              required
              name="user_email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <input placeholder="How did you hear about us?" />
          <input placeholder="Subject*" />
          <textarea
            placeholder="Leave a Messsage*"
            required
            name="message"
            value={message}
            type="text"
            onChange={e => setMessage(e.target.value)}
          />
          {loading ? (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
              alt=""
              style={{
                width: 100,
                height: 100,
                objectFit: "contain",
                alignSelf: "center"
              }}
            />
          ) : (
            <button>Send Message</button>
          )}
          {response && <p>{response}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
