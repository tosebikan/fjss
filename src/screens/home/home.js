import "./home.css";
import HeroImage from "../../assets/images/home_hero.jpg";
function Home() {
  return (
    <div className="home_container">
      <div className="home_hero_container">
        <img src={HeroImage} alt="" className="home_hero" />
        <h1>For A Fair Just And Inclusive Scotland</h1>
      </div>

      {/* COUNTDOWN SECTION*/}
      <div className="home_countdown">
        <h3>Countdown to the next event: </h3>
        <div>
          <p>20 hrs</p>
          <p>19 mins</p>
          <p>60 secs</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
