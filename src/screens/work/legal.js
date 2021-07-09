import "./policy.css";
import HeroImage from "../../assets/images/home_hero.jpg";
function Legal() {
  return (
    <div className="legal_container">
      <div className="policy_hero">
        <img src={HeroImage} alt="" />
        <div className="policy_hero_text">
          <h2>Legal Services</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>
      {/*POLICY DEV */}
      <div className="policy_dev">
        <h2>Legal Services</h2>
        <p>
          Legal Services The FJSS Group has a legal services department that
          performs several functions including providing legal advice and legal
          representation to BAME communities. The focus of the legal
          representation is employment and immigration issues where most people
          of BAME background have challenges at workplaces and in regularising
          their stay in the United Kingdom. The organisation provides legal
          advice without prejudice on matters that our committed team of
          volunteers have competence in, and this advice does not stop our
          communities from seeking alternative advice where they feel need to do
          so. Our main priority is to provide legal support to members of our
          community who can not afford to get this anywhere else, and this has
          made a huge difference to many people. The legal services team at FJSS
          is a cross-section of people who have retired but still want to offer
          their expertise to those who need it and those who are still in the
          process of going through the various stages of their legal
          professional development. This mix of experience makes the legal
          services department real a hub of activity as the teams go through
          their case loads with excellent commitment and dedication.
        </p>
      </div>
    </div>
  );
}

export default Legal;
