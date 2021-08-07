import * as React from "react";
import "./news.css";
import HeroImage from "../../assets/images/home_hero.jpg";
// import gallery1 from "../../assets/images/gallery1.png";
import { Link } from "react-router-dom";
import { news } from "../../helpers/data";
import { FiSearch } from "react-icons/fi";

function News() {
  const [data, setData] = React.useState(news);
  const [newsModal, setNewsModal] = React.useState(false);
  let placeholder = news;

  const searchNews = e => {
    let text = e.target.value;
    let searched = placeholder.filter(
      el =>
        el.title.toLowerCase().includes(text.toLowerCase()) ||
        el.date.toLowerCase().includes(text.toLowerCase())
    );

    setData(searched);
  };

  return (
    <div className="news_container">
      <div className="news_hero">
        <img src={HeroImage} alt="" />
        <div className="news_hero_text">
          <h2>News</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>

      <div className="news_modal">
        <div className="news_modal_group">
          <h2>Categories</h2>
          <ul className="news_filter_list">
            <li>Community</li>
            <li>Covid</li>
            <li>Lectures</li>
            <li>Forums</li>
            <li>Conference</li>
            <li>Summits</li>
            <li>Meetings</li>
            <li>Seminar</li>
          </ul>
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
            <input placeholder="search" onChange={e => searchNews(e)} />
            <button>
              <FiSearch className="footer_icon" />
            </button>
          </form>
        </div>
      </div>

      <div className="news_card_container">
        {data.map(el => (
          <div className="news_card">
            <img src={el.images[0]} alt="" />
            <div className="news_card_info">
              <p className="news_card_date">{el.date}</p>
              <p className="news_card_title">{el.title}</p>

              <p className="news_card_body">
                {el.text[0]?.slice(0, 100)}
                {el.text[0]?.length > 0 ? "..." : ""}
              </p>

              <Link to={{ pathname: "/news-details", state: { el } }}>
                <button className="news_card_button">Read more</button>{" "}
              </Link>
              <div className="news_card_hr" />
              <div className="news_card_bottom">
                <div>
                  <p>Ignitious Ocansey</p>
                </div>
                <div className="news_card_comments">
                  <p> 0</p>
                  <p>Comments</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {data.length === 0 && (
        <p className="news_empty">There are no available news</p>
      )}
    </div>
  );
}

export default News;
