import "./gallery.css";
import HeroImage from "../../assets/images/home_hero.jpg";
function Podcast() {
  return (
    <div className="podcast_container">
      <div className="gallery_hero">
        <img src={HeroImage} alt="" />
        <div className="gallery_hero_text">
          <h2>Podcast</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>
    </div>
  );
}

export default Podcast;
