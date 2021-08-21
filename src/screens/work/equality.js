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
        <h2>Racial Equality Diversity and Inclusion</h2>
        <p>
          Racial equality, diversity, and inclusion is in essence, what the FJSS
          Group exists for. The organisation has remained true to its founding
          vision, values, and objectives through the various initiatives that we
          are involved with. We run carefully selected programs and activities
          that help to address racial inequality and lack of diversity. Programs
          such as the Heritage Lecture Series, the High Schools Debate Series
          and the Community Outreach Program all highlight historical injustice
          that laid the foundations for modern day racial inequality and
          intolerance. Racial prejudice and racial discrimination both breed the
          lack of racial equality that exists in society today, a daily
          challenge that our communities are faced with. Our work highlights
          those challenges encountered by our communities when they are trying
          to access opportunities and services. The FJSS Group works with
          organisations that desire to achieve greater racial equality,
          diversity, and inclusion in their structures and service provision by
          providing them with advice, policy support as well as highlight their
          best practices.
        </p>
      </div>
    </div>
  );
}

export default Equality;
