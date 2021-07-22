import "./people.css";
import HeroImage from "../../assets/images/home_hero.jpg";
function People() {
  return (
    <div className="people_container">
      <div className="people_hero">
        <img src={HeroImage} alt="" />
        <div className="people_hero_text">
          <h2>Our People</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>
    </div>
  );
}

export default People;
