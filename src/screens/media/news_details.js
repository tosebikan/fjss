import HeroImage from "../../assets/images/home_hero.jpg";
import gallery1 from "../../assets/images/gallery1.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import "./news_details.css";
function NewsDetails(props) {
  let news = props.location.state.el;
  return (
    <div className="newsDetails_container">
      <div className="news_details_hero">
        <img src={HeroImage} alt="" />
        <div className="news_details_hero_text">
          <h2>News</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>

      {/*<div className="news_details_menu_container">
        <div className="news_details_menu">
          <p>Categories</p>
          <p>Popular tags</p>
          <p>Archives</p>
        </div>
        <div className="news_details_form_container">
          <form className="news_details_search_form">
            <input placeholder="search" />
            <button>
              <FiSearch className="footer_icon" />
            </button>
          </form>
        </div>
      </div>*/}

      {/*NEWS DETAILS*/}
      <div className="news_details_info">
        <div className="news_details_info_top">
          <img src={news.images[0]} alt="" />
          <div className="news_details_info_text_group">
            <h2>FJSS Group Food Support</h2>
            <p>
              Serving our community is core to FJSS Group’s goals. Our food
              support program has been waxing strong. We have and continue to
              serve those in need during this challenging times. Our food
              support brings hope to all those that have been affected by the
              corona virus.
            </p>
          </div>
        </div>
      </div>
      {/*NEWS IMAGES*/}
      <div className="news_details_info_images">
        {news.images.map(el => (
          <img src={el} alt="" />
        ))}
      </div>
      {/*NEWS TAGS */}
      <div className="news_details_info_tags">
        <div className="news_details_info_row">
          <p>Tags:</p>
          <p> Uncategorized</p>
        </div>

        <div className="news_details_info_row">
          <p>Share</p>
          <div className="news_icons">
            <FaFacebook className="news_icon" />
            <FaTwitter className="news_icon" />
            <FaInstagram className="news_icon" />
            <FaLinkedin className="news_icon" />
          </div>
        </div>
      </div>

      <div className="news_details_comments">
        <h2> Comment section</h2>
        <div className="news_details_comment_group">
          <div className="news_details_comment">
            <img src={gallery1} alt="" />
            <div className="news_details_comment_info">
              <p className="news_details_comment_title">Lance</p>
              <p className="news_details_comment_date">21 February, 2021</p>
              <p className="news_details_comment_text">
                Thank you FJSS Group for the friendly and helpful services. Your
                support team is wonderful.
              </p>
            </div>
            <button>Reply</button>
          </div>
        </div>
      </div>

      <div className="news_details_section">
        <h2>Leave a Reply</h2>
        <p>Your email address will not be published. *</p>
        <form className="news_details_section_form">
          <div className="news_form_row">
            <input placeholder="First Name *" type="text" />
            <input placeholder="Last Name *" type="text" />
          </div>
          <textarea placeholder="Your comment *" />
          <div className="news_details_check">
            <input type="checkbox" id="saveName" />
            <label htmlFor="saveName">
              {" "}
              Save my name, email and website in this browser for the next time
              I comment
            </label>
          </div>

          <button>Post comment</button>
        </form>
      </div>
    </div>
  );
}

export default NewsDetails;
