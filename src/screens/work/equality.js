import "./policy.css";
import HeroImage from "../../assets/images/home_hero.jpg";
function Equality() {
  return (
    <div className="equality_container">
      <div className="policy_hero">
        <img src={HeroImage} alt="" />
        <div className="policy_hero_text">
          <h2>Equality Diversity and Inclusion</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>
      {/*POLICY DEV */}
      <div className="policy_dev">
        <h2>Equality Diversity and Inclusion</h2>
        <p>
          Equality, diversity, and inclusiveness is what the FJSS Group exists
          for. The organisation has remained true to its founding values and
          objectives through the various initiatives that it is involved with
          such as carefully selected programs and activities. Programs such as
          the Heritage Debate Series and the High Schools Debate Series all
          highlight historical injustice that laid the foundations for modern
          day inequality. Racial prejudice and racial discrimination are what
          breeds the lack of racial equality that exists in society today, a
          daily challenge that our community is faced with, and our work
          highlights those challenges encountered by our communities when they
          are trying to access opportunities and services. The FJSS Group works
          with organisation that desire to achieve greater equality, diversity,
          and inclusion by providing them with advice, support as well as
          highlight their good initiatives as a way of promoting their best
          practices.
        </p>
      </div>
    </div>
  );
}

export default Equality;
