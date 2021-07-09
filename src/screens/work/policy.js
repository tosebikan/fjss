import "./policy.css";
import HeroImage from "../../assets/images/home_hero.jpg";
function Policy() {
  return (
    <div className="policy_container">
      <div className="policy_hero">
        <img src={HeroImage} alt="" />
        <div className="policy_hero_text">
          <h2>Policy Development input Support</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>
    </div>
  );
}

export default Policy;
