import "./footer.css";
import Logo from "../assets/images/logo2.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footer_left">
          <img src={Logo} alt="" />
          <p>For a Fair Just and Inclusive Scotland</p>
          <div className="footer_icons">
            <FaFacebook className="footer_icon" />
            <FaTwitter className="footer_icon" />
            <FaInstagram className="footer_icon" />
            <FaLinkedin className="footer_icon" />
          </div>
        </div>
        <div className="footer_middle">
          <h2>Contact Information</h2>
          <p>
            Justice House, 24 - 26 Main Street, West Calder, West Lothian, EH55
            8DR
          </p>
          <p>+44 131 - 285 - 1013 </p>
          <p>info@fjssgroup.org</p>
          <p>Charity No. : SC042868</p>
        </div>
        <div className="footer_right">
          <h2>Top News</h2>
          <div className="footer_news_section">
            <div className="footer_news_group">
              <img src={Logo} alt="" />
              <div>
                <p className="footer_news_title">Global Refugee Forum Geneva</p>
                <p className="footer_news_date">2019-12-18 12:16</p>
              </div>
            </div>
            <div className="footer_news_group">
              <img src={Logo} alt="" />
              <div>
                <p className="footer_news_title">Global Refugee Forum Geneva</p>
                <p className="footer_news_date">2019-12-18 12:16</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <p>© 2020 FJSS Group. All rights reserved.</p>
        <Link to="/privacy" style={{ color: "#fff" }}>
          <p>Privacy Policy</p>
        </Link>
        <Link to="/shop" style={{ color: "#fff" }}>
          <p>Shop</p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
