import HeroImage from "../../assets/images/home_hero.jpg";
import "./shop.css";
import prod1 from "../../assets/images/prod1.jpg";
import prod2 from "../../assets/images/prod2.jpg";
import gallery1 from "../../assets/images/gallery1.png";
import { FaFacebook } from "react-icons/fa";

const products = [
  {
    title: "Scottish History: The West Lothian Connection",
    type: "Ebook",
    price: 5.0,
    image: prod1
  },
  {
    title: "Scottish History: The West Lothian Connection ",
    type: "Ebook",
    price: 5.0,
    image: prod2
  }
];

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
              <FaFacebook className="shop_icon" />
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
                <img src={prod1} alt="" />
                <p> $5.00</p>
              </div>
              <p className="menu_card_text">
                Scottish History: The West Lothian Connection (Ebook){" "}
              </p>
            </div>
          </div>

          <div className="shop_menu_news">
            <h2>Latest News</h2>
            <div className="shop_menu_news_card">
              <img src={prod1} alt="" />
              <div className="shop_menu_news_card_column">
                <p className="shop_menu_news_date"> 21 Feb 2021</p>
                <p className="menu_news_card_text">FJSS Group Food Support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="shop_main">
          <div className="shop_main_top">
            <p>
              Showing all <strong>4</strong> results{" "}
            </p>
            <FaFacebook className="shop_main_icon" />
          </div>

          <div className="shop_main_products">
            <div className="shop_main_card">
              <img src={prod2} alt="" />
              <p>Scottish History: The West Lothian Connection</p>
              <p>$5.00 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
