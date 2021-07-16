import "./news.css";
import HeroImage from "../../assets/images/home_hero.jpg";
import gallery1 from "../../assets/images/gallery1.png";
function News() {
  return (
    <div className="news_container">
      <div className="news_hero">
        <img src={HeroImage} alt="" />
        <div className="news_hero_text">
          <h2>News</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>

      <div className="news_menu_container">
        <div className="news_menu">
          <p>Categories</p>
          <p>Popular tags</p>
          <p>Archives</p>
        </div>
        <div className="news_form_container">
          <form className="news_search_form">
            <input placeholder="search" />
            <button>S</button>
          </form>
        </div>
      </div>

      <div className="news_card_container">
        <div className="news_card">
          <img src={gallery1} alt="" />
          <div className="news_card_info">
            <p className="news_card_date">21 Feb, 2021</p>
            <p>FJSS Group Food Support</p>
            <p>Serving our community is core to FJSS Group’s goals</p>
            <button>Read more</button>
            <div className="news_card_hr" />
            <div>
              <div>
                <p>Ignitious Ocansey</p>
              </div>
              <div>
                <p> 0</p>
                <p>Comments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
