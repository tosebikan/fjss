import "./about.css";
import HeroImage from "../../assets/images/home_hero.jpg";
import HomeAbout from "../../assets/images/homeAbout.png";
import client1 from "../../assets/images/client1.png";
import client2 from "../../assets/images/client2.png";
import Slider from "react-slick";

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
  {
    url: client1
  },
  {
    url: client2
  },
  {
    url: client1
  },
  {
    url: client2
  },
  {
    url: client1
  }
];
function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "slider_style",
    autoplay: true,
    autoplaySpeed: 2000,
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

      <div className="about_info">
        <div>
          <p>
            {" "}
            The Fair Justice System for Scotland Group (FJSS Group) is a
            grassroots-led legal charity based in West Calder, West Lothian. The
            organisation has established itself as one of the leading voices for
            justice sector reforms necessary to create greater equality,
            diversity and representative employment and appointments in the
            Scottish justice system. The FJSS Group advocates for a justice
            system reflective of the diversity of modern-day Scottish society
            and our work is geared to influence justice delivery policy in
            Scotland through informing the processes of policy formulation and
            development by engaging with the key policy and decision-makers in
            the Scottish Government and key agencies.
          </p>

          <p>
            Currently the FJSS Group works closely with the key stakeholders in
            the justice system including the Scottish Government, the Judicial
            Institute for Scotland, the Scottish Courts and Tribunal Service,
            Police Scotland, the Scottish Parliament, the Law Society of
            Scotland, HM Inspectorates across all the disciplines (Prison
            Service Scotland, Constabulary and Crown Prosecution), Scottish
            Police Authority and Public Appointments. This connects our work
            with the key policies and process that shape the Scottish justice
            system and the Scottish Government’s wider community and social
            justice outcomes.{" "}
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
              <img src={el.url} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default About;
