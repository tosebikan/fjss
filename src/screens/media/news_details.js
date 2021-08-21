import * as React from "react";
import HeroImage from "../../assets/images/home_hero.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import axios from "axios";
// import { FiSearch } from "react-icons/fi";

import "./news_details.css";
function NewsDetails(props) {
  let news = props.location.state.el;
  console.log({ news });
  const [fName, setFName] = React.useState("");
  const [lName, setLName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const handlePost = async event => {
    event.preventDefault();

    let payload = {
      author: `${fName} ${lName}`,
      text: message,
      news_info: news.id
    };
    console.log({ payload });
    //
    await axios
      .post("https://fjss-admin.herokuapp.com/comments", payload, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        console.log({ res });
        setFName("");
        setLName("");
        setMessage("");
        setSuccess("Sent!, your comment will be visible once approved");
        setTimeout(() => setSuccess(""), 3000);
      })
      .catch(err => {
        console.log({ err });
      });
  };
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
          <img src={news.thumbnail.url} alt="" />
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
          <img src={el.url} alt="" />
        ))}
      </div>
      {/*NEWS TAGS */}
      <div className="news_details_info_tags">
        <div className="news_details_info_row">
          <p>Tags:</p>
          <p> {news.tags}</p>
        </div>

        <div className="news_details_info_row">
          <p>Share:</p>
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
          {news.comments.map(el => {
            let approved = el.approved;
            if (approved) {
              return (
                <div className="news_details_comment" key={el.id}>
                  <img
                    src={
                      el.image?.url
                        ? el.image?.url
                        : "https://res.cloudinary.com/dx9nvxad3/image/upload/v1629552242/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws_qdj2z3.jpg"
                    }
                    alt=""
                  />
                  <div className="news_details_comment_info">
                    <p className="news_details_comment_title">{el.author}</p>
                    <p className="news_details_comment_date">
                      21 February, 2021
                    </p>
                    <p className="news_details_comment_text">{el.text}</p>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      <div className="news_details_section">
        <h2>Leave a Reply</h2>
        <p>Your email address will not be published. *</p>
        <form className="news_details_section_form">
          <div className="news_form_row">
            <input
              placeholder="First Name *"
              type="text"
              value={fName}
              onChange={e => setFName(e.target.value)}
            />
            <input
              placeholder="Last Name *"
              type="text"
              value={lName}
              onChange={e => setLName(e.target.value)}
            />
          </div>
          <textarea
            placeholder="Your comment *"
            onChange={e => setMessage(e.target.value)}
            value={message}
          />
          <div className="news_details_check">
            <input type="checkbox" id="saveName" />
            <label htmlFor="saveName">
              {" "}
              Save my name, email and website in this browser for the next time
              I comment
            </label>
          </div>
          <button onClick={handlePost}>Post comment</button>
          <p>{success}</p>
        </form>
      </div>
    </div>
  );
}

export default NewsDetails;
