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
          Our Legal Services Department provides legal advice and legal
          representation to BAME who cannot afford to pay for legal fees or have
          no confidence in available services that lack racial diversity and
          understanding of their situations. The legal representation is mainly
          focused on employment and immigration issues where most people of BAME
          background have challenges at workplaces and regularising their stay
          in the United Kingdom. The organisation provides legal advice without
          prejudice on matters that our committed team of volunteers have
          competence in. This advice does not stop our communities from seeking
          alternative advice where they feel need to do so but our main priority
          is to support our communities who cannot afford to get this service
          elsewhere. Our service makes a huge difference to BAME people who
          benefit from team composed of a cross-section of people of diverse
          skills and backgrounds who offer their expertise to those who need it
          most. This mix of experience makes the legal services department a
          real hub of activity as the teams go through their caseloads with
          exceptional commitment and dedication.
        </p>
      </div>
    </div>
  );
}

export default Legal;
