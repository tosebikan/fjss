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
  const [menuData, setMenuData] = React.useState({
    title: "All",
    data: []
  });
  let placeholder = news;

  const searchNews = e => {
    setMenuData({ title: "", data: [] });
    let text = e.target.value;
    let searched = placeholder.filter(
      el =>
        el.title.toLowerCase().includes(text.toLowerCase()) ||
        el.date.toLowerCase().includes(text.toLowerCase())
    );

    setData(searched);
  };

  const submit = e => {
    e.preventDefault();
  };

  const menu = e => {
    setNewsModal(true);

    if (e === "categories") {
      setMenuData({
        title: "Categories",
        data: [
          "Scotland",
          "Event",
          "Community",
          "FJSS",
          "Lecture",
          "Forum",
          "Conference",
          "Summit",
          "Meeting",
          "Seminar"
        ]
      });

      return;
    }

    if (e === "popular") {
      setMenuData({
        title: "Popular Tags",
        data: ["Scotland", "Event", "Community", "FJSS", "Conference", "Summit"]
      });
      return;
    }

    if (e === "archives") {
      setMenuData({
        title: "Archives",
        data: ["2021", "2020", "2019"]
      });
      return;
    }
  };

  const filterNews = e => {
    if (menuData.title === "Categories") {
      let filtered = placeholder.filter(el =>
        el.category.join(",").includes(e)
      );
      setData(filtered);
      setNewsModal(!newsModal);
      return;
    }

    if (menuData.title === "Popular Tags") {
      let filtered = placeholder.filter(el =>
        el.category.join(",").includes(e)
      );
      setData(filtered);
      setNewsModal(!newsModal);
      return;
    }

    if (menuData.title === "Archives") {
      let filtered = placeholder.filter(el => el.date.includes(e));
      setData(filtered);
      setNewsModal(!newsModal);
      return;
    }
  };

  console.log(menuData);

  const showAll = () => {
    setMenuData({
      title: "All",
      data: []
    });
    setData(placeholder);
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

      {newsModal && (
        <div className="news_modal">
          <div
            className="gallery_close_icon"
            onClick={() => setNewsModal(!newsModal)}
          >
            X
          </div>
          <div className="news_modal_group">
            {menuData && (
              <div>
                <h2>{menuData.title}</h2>
                <ul className="news_filter_list">
                  {menuData.data.map((el, id) => (
                    <li key={id} onClick={() => filterNews(el)}>
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="news_menu_container">
        <div className="news_menu">
          <p
            onClick={showAll}
            className={menuData.title === "All" ? "active_menu" : ""}
          >
            All
          </p>
          <p
            onClick={e => menu("categories")}
            className={menuData.title === "Categories" ? "active_menu" : ""}
          >
            Categories
          </p>
          <p
            onClick={e => menu("popular")}
            className={menuData.title === "Popular Tags" ? "active_menu" : ""}
          >
            Popular tags
          </p>
          <p
            onClick={e => menu("archives")}
            className={menuData.title === "Archives" ? "active_menu" : ""}
          >
            Archives
          </p>
        </div>
        <div className="news_form_container">
          <form className="news_search_form">
            <input placeholder="search" onChange={e => searchNews(e)} />
            <button onClick={submit}>
              <FiSearch className="footer_icon" />
            </button>
          </form>
        </div>
      </div>

      <div className="news_card_container">
        {data.map((el, id) => (
          <div className="news_card" key={id}>
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
