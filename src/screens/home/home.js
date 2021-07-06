import "./home.css";
import HeroImage from "../../assets/images/home_hero.jpg";
import HomeAbout from "../../assets/images/homeAbout.png";

function Home() {
  return (
    <div className="home_container">
      <div className="home_hero_container">
        <img src={HeroImage} alt="" className="home_hero" />
        <h1>For A Fair Just And Inclusive Scotland</h1>

        {/* COUNTDOWN SECTION*/}
        <div className="home_countdown">
          <h3>Countdown to the next event: </h3>
          <div className="home_countdown_timer">
            <p>20hrs</p>
            <p>19mins</p>
            <p>60secs</p>
          </div>
        </div>
      </div>

      {/* HOME ABOUT SECTION*/}
      <div className="home_about">
        <div className="home_about_left">
          <p className="home_about_title">
            <em>About us</em>
          </p>
          <h2 className="home_about_topic">
            Reforming The Scottish Justice System
          </h2>
          <p className="home_about_body">
            The Fair Justice System for Scotland Group (FJSS Group) is a
            grassroots-led legal charity based in West Calder, West Lothian. The
            organisation works towards creating greater equality and diversity
            in the Scottish justice system.
          </p>
          <button className="home_about_button">Read more</button>
        </div>

        <div>
          <img src={HomeAbout} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
