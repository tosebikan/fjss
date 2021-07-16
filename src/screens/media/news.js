import "./news.css";
import HeroImage from "../../assets/images/home_hero.jpg";
function News() {
  return (
    <div className="news_container">
      <div className="news_hero">
        <img src={HeroImage} alt="" />
        <div className="news_hero_text">
          <h2>Podcast</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>
    </div>
  );
}

export default News;
