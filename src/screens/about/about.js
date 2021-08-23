import "./about.css";
import HeroImage from "../../assets/images/home_hero.jpg";
import HomeAbout from "../../assets/images/homeAbout.png";

import Slider from "react-slick";

import cjs from "../../assets/images/clients/cjs.png";
import cyrenians from "../../assets/images/clients/cyrenians.jpg";
import foodbank from "../../assets/images/clients/foodbank.png";
import greatway from "../../assets/images/clients/greatway.png";
import hmips from "../../assets/images/clients/hmips.png";
import lawSociety from "../../assets/images/clients/law-society.png";
import mgs from "../../assets/images/clients/mgs.jpg";
import pilnet from "../../assets/images/clients/pilnet.jpg";
import scoac from "../../assets/images/clients/scoac.png";
import scotlandPolice from "../../assets/images/clients/scotland-police.png";
import scottishGov from "../../assets/images/clients/Scottish_Government.png";
import scottishPoliceAuth from "../../assets/images/clients/scottish-police-auth.png";
import scotishRefugeCouncil from "../../assets/images/clients/scottish-refuge-council.jpg";
import thelma from "../../assets/images/clients/thelma.png";
import unhcr from "../../assets/images/clients/unhcr.jpg";
import westLothian from "../../assets/images/clients/west-lothian-council.jpg";

const statements = [
  {
    title: "Our Mission",
    body:
      "For a fair, just, tolerant and inclusive Scotland where opportunities are defined by need and the diversity of talent."
  },
  {
    title: "Our Vision",
    body:
      "To be a leading voice for a national program of justice sector reforms that will bring the necessary changes to allow the development of a people focused community and social justice agenda in Scotland."
  },
  {
    title: "Our Values",
    body:
      "Our values are underpinned by our four C’s; Commitment to our cause, Competency in the field of our work, Consistency in our delivery of service and Continuity in terms of how we sustain our work and maintain our level of service."
  }
];

const clients = [
  cjs,
  cyrenians,
  foodbank,
  greatway,
  hmips,
  lawSociety,
  mgs,
  pilnet,
  scoac,
  scotlandPolice,
  scottishGov,
  scottishPoliceAuth,
  scotishRefugeCouncil,
  thelma,
  unhcr,
  westLothian
];
function About() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ],
    className: "about_slider",
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear"
  };

  return (
    <div className="about_container">
      <div className="about_hero">
        <img src={HeroImage} alt="" />
        <div className="about_hero_text">
          <h2>About Us</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>

      <h2 className="about_title">About Us</h2>

      <div className="about_info">
        <div>
          <p>
            {" "}
            The Fair Justice System for Scotland (FJSS) Group is a
            grassroots-led legal charity based in West Calder, West Lothian. The
            organisation has established itself as a leading voice for justice
            sector reforms necessary to create greater racial equality and
            diversity in the Scottish justice system. The FJSS Group advocates
            for employment and appointments in the justice system reflective of
            the diversity of modern-day Scottish society. Our work is geared
            towards influencing justice delivery policy in Scotland through
            informing the processes of policy formulation and development. Our
            Organisation engages with key stakeholders including policy and
            decision-makers in the Scottish Government and its agencies.
          </p>

          <p>
            Currently, the FJSS Group works closely with those key stakeholders
            in the justice system including the Scottish Government, the
            Judicial Institute for Scotland, the Scottish Courts and Tribunal
            Service, Police Scotland, the Scottish Parliament, the Law Society
            of Scotland, HM Inspectorates across all the disciplines (Prison
            Service Scotland, Constabulary and Crown Prosecution), Scottish
            Police Authority and Public Appointments. This connects our work
            with high-level policies and processes that shape the Scottish
            justice sector including the Scottish Government’s race equality and
            safer community outcomes.{" "}
          </p>
        </div>
        <div>
          <img src={HomeAbout} alt="" />
        </div>
      </div>

      {/*STATEMENTS SECTION */}

      <div className="about_statement_container">
        {statements.map((el, id) => (
          <div className="about_statement_card" key={id}>
            <p className="about_statement_title">{el.title}</p>
            <p className="about_statement_body">{el.body}</p>
          </div>
        ))}
      </div>

      {/*CLIENTS SECTION */}
      <div className="about_clients_container">
        <Slider {...settings}>
          {clients.map((el, id) => (
            <div key={id} className="about_clients">
              <img src={el} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default About;
