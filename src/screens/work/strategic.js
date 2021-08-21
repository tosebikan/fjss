import "./policy.css";
import HeroImage from "../../assets/images/home_hero.jpg";
function Strategic() {
  return (
    <div className="strategic_container">
      <div className="policy_hero">
        <img src={HeroImage} alt="" />
        <div className="policy_hero_text">
          <h2>Strategic Partnerships</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>
      {/*POLICY DEV */}
      <div className="policy_dev">
        <h2>Strategic Partnerships</h2>
        <p>
          Our work provides the organisation with great opportunities to form
          strong, mutually beneficial strategic partnerships with key
          institutions and organisations such as the government, agencies, local
          authorities, and institutions of higher learning. The strategic
          partnerships form the fundamental basis of most of the work that we do
          as our organisation strongly believes in a collaborative approach
          towards addressing structurally entrenched and institutionalised
          racial discrimination and racial inequality. We are always looking for
          new partnerships to enhance our impact in the work that we do because
          the problems of racial inequality and racial exclusion are so serious
          that no singular approach will resolve them. Only a collaborative and
          holistic approach will help to seriously address racial inequality and
          the lack of diversity that still exist in many state institutions and
          public organisations
        </p>
      </div>
    </div>
  );
}

export default Strategic;
