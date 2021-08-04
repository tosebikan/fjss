import HeroImage from "../../assets/images/home_hero.jpg";
import "./shop.css";

// import gallery1 from "../../assets/images/gallery1.png";
import { FiSearch } from "react-icons/fi";
import { products, news } from "../../helpers/data";
import { Link } from "react-router-dom";

// const products = [
//   {
//     title: "Scottish History: The West Lothian Connection",
//     type: "Ebook",
//     price: 5.0,
//     image: prod1
//   },
//   {
//     title: "Scottish History: The West Lothian Connection ",
//     type: "Ebook",
//     price: 5.0,
//     image: prod2
//   },
//   {
//     title: "Scottish History: The West Lothian Connection",
//     type: "Ebook",
//     price: 5.0,
//     image: prod1
//   }
// ];

function Shop() {
  return (
    <div className="shop_container">
      <div className="shop_hero">
        <img src={HeroImage} alt="" />
        <div className="shop_hero_text">
          <h2>Shop</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>

      <div className="shop">
        <div className="shop_menu">
          <form className="shop_form">
            <div className="shop_form_row">
              <input placeholder="search" />
              <FiSearch className="shop_icon" />
            </div>
            <div className="shop_range_row">
              <label>Filter by price</label>
              <input type="range" />
            </div>
            <div className="shop_form_button_row">
              <button>Filter </button>
              <p>Price: $0 -$5.00</p>
            </div>
          </form>

          <div className="shop_menu_products">
            <h2>Top Products</h2>
            <div className="shop_menu_card">
              <div className="shop_menu_card_column">
                <img src={products[0].image} alt="" />
                <p> $5.00</p>
              </div>
              <p className="menu_card_text">
                Scottish History: The West Lothian Connection (Ebook){" "}
              </p>
            </div>
          </div>

          <div className="shop_menu_news">
            <h2>Latest News</h2>
            <Link to={{ pathname: "/news-details", state: { el: news[1] } }}>
              <div className="shop_menu_news_card">
                <img src={news[1].images[0]} alt="" />
                <div className="shop_menu_news_card_column">
                  <p className="shop_menu_news_date"> 21 Feb 2021</p>
                  <p className="menu_news_card_text">{news[1].title}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="shop_main">
          <div className="shop_main_top">
            <p>
              Showing all <strong>4</strong> results{" "}
            </p>
            <FiSearch className="shop_main_icon" />
          </div>

          <div className="shop_main_products">
            {products.map(el => (
              <div className="shop_main_card">
                <img src={el.image} alt="" />
                <p>{el.title}</p>
                <p className="shop_main_price">${el.price.toFixed(2)} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
