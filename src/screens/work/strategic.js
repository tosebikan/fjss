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
      </div>
    </div>
  );
}

export default Strategic;
