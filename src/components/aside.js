import * as React from "react";
import { NavLink } from "react-router-dom";
import "./aside.css";
import { FiChevronDown } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import Logo from "../assets/images/logo.png";
import { FaShoppingBag } from "react-icons/fa";
import { CartContext } from "../context/cart_context";

function Aside() {
  const [aside, setAside] = React.useState(false);
  const [openSUb, setOPenSub] = React.useState(false);
  const { cart } = React.useContext(CartContext);

  console.log("NAV CART", cart.length);

  const asideMenu = () => {
    setAside(!aside);
  };

  const openSub = e => {
    console.log(document.getElementById(e).style.display);
    if (document.getElementById(e).style.display === "block") {
      document.getElementById(e).style.display = "none";
    } else {
      document.getElementById(e).style.display = "block";
    }
  };
  return (
    <div className="aside">
      <div className="mobile_header_top">
        <div className="aside_logo_container">
          <NavLink to="/" exact>
            <img src={Logo} alt="" className="logo" />
          </NavLink>
        </div>
        <div onClick={asideMenu}>
          <RiMenu2Fill className="header_menu_icon" />
        </div>
      </div>

      {aside && (
        <ul className="aside_group">
          <li className="aside_sub_title">
            <NavLink to="/contact" exact onClick={asideMenu}>
              <span className="aside_sub_title_group">Contact</span>
            </NavLink>
          </li>
          <li className="aside_sub_title" onClick={() => openSub("about")}>
            <span className="aside_sub_title_group">
              About <FiChevronDown />
            </span>
            <ul className="aside_sub_nav" id="about">
              <NavLink to="/about" exact onClick={asideMenu}>
                <li>
                  <p> About us</p>
                </li>
              </NavLink>
              <NavLink to="approach" exact onClick={asideMenu}>
                <li>
                  <p>Our Approach</p>
                </li>
              </NavLink>
              <NavLink to="/people" exact onClick={asideMenu}>
                <li>
                  <p>Our People</p>
                </li>
              </NavLink>
            </ul>
          </li>
          <li className="aside_sub_title" onClick={() => openSub("work")}>
            <span className="aside_sub_title_group">
              Our work <FiChevronDown />
            </span>
            <ul className="aside_sub_nav" id="work">
              <NavLink to="/policy" exact onClick={asideMenu}>
                <li>
                  <p> Policy Development Input Support </p>
                </li>
              </NavLink>

              <NavLink to="/equality" exact onClick={asideMenu}>
                <li>
                  <p> Equality Diversity and Inclusion </p>{" "}
                </li>
              </NavLink>

              <NavLink to="/legal" exact onClick={asideMenu}>
                <li>
                  {" "}
                  <p> Legal Services </p>
                </li>
              </NavLink>

              <NavLink to="/projects" exact onClick={asideMenu}>
                <li>
                  {" "}
                  <p> Projects </p>
                </li>
              </NavLink>

              <NavLink to="/strategic" exact onClick={asideMenu}>
                <li>
                  {" "}
                  <p> Strategic Partnerships </p>{" "}
                </li>
              </NavLink>

              <NavLink to="/community" exact onClick={asideMenu}>
                <li>
                  {" "}
                  <p> Community Engagements </p>{" "}
                </li>
              </NavLink>

              <NavLink to="/opportunity" exact onClick={asideMenu}>
                <li>
                  {" "}
                  <p> Creating Opportunities </p>
                </li>
              </NavLink>
            </ul>
          </li>
          <li className="aside_sub_title" onClick={() => openSub("resources")}>
            <span className="aside_sub_title_group">
              Resources
              <FiChevronDown />
            </span>

            <ul className="aside_sub_nav" id="resources">
              <NavLink to="/reports" exact onClick={asideMenu}>
                <li>
                  {" "}
                  <p>Reports </p>
                </li>
              </NavLink>

              <NavLink to="/links" exact onClick={asideMenu}>
                <li>
                  {" "}
                  <p> Links </p>
                </li>
              </NavLink>

              <NavLink to="/info" exact onClick={asideMenu}>
                <li>
                  {" "}
                  <p> Helpful information </p>{" "}
                </li>
              </NavLink>

              <NavLink to="/financial-accounts" exact onClick={asideMenu}>
                <li>
                  {" "}
                  <p> Financial Accounts </p>{" "}
                </li>
              </NavLink>
            </ul>
          </li>
          <li className="aside_sub_title" onClick={() => openSub("involved")}>
            <span className="aside_sub_title_group">
              Get involved
              <FiChevronDown />
            </span>

            <ul className="aside_sub_nav" id="involved">
              <NavLink to="/donate" exact onClick={asideMenu}>
                <li>
                  {" "}
                  <p> Donate </p>
                </li>
              </NavLink>

              <NavLink to="/volunteer" exact onClick={asideMenu}>
                <li>
                  {" "}
                  <p> Volunteer </p>{" "}
                </li>
              </NavLink>

              {/*<NavLink to="/fund-raising" exact onClick={asideMenu}>
              <li>
                {" "}
                <p> Fundraising </p>
              </li>
            </NavLink>*/}

              <NavLink to="/jobs" exact onClick={asideMenu}>
                <li>
                  {" "}
                  <p> Jobs </p>{" "}
                </li>
              </NavLink>
            </ul>
          </li>
          <li className="aside_sub_title" onClick={() => openSub("media")}>
            <span className="aside_sub_title_group">
              Media
              <FiChevronDown />
            </span>

            <ul className="aside_sub_nav" id="media">
              <NavLink to="/gallery" exact onClick={asideMenu}>
                <li>
                  {" "}
                  <p> Gallery (Photo and videos) </p>{" "}
                </li>
              </NavLink>

              {/*<NavLink to="/podcast" exact onClick={asideMenu}>
              <li>
                {" "}
                <p> Podcast </p>{" "}
              </li>
            </NavLink>*/}

              {/*<NavLink to="/blog" exact onClick={asideMenu}>
              <li>
                {" "}
                <p> Blog </p>{" "}
              </li>
            </NavLink>*/}

              <NavLink to="/news" exact onClick={asideMenu}>
                <li>
                  {" "}
                  <p> News </p>
                </li>
              </NavLink>
            </ul>
          </li>
          <li className="aside_sub_title" onClick={() => openSub("events")}>
            <NavLink to="/events" exact onClick={asideMenu}>
              <span className="aside_sub_title_group">
                Events
                <FiChevronDown />
              </span>
            </NavLink>
            <ul className="aside_sub_nav" id="events">
              <NavLink to="/upcoming_events" exact onClick={asideMenu}>
                <li>
                  {" "}
                  <p> Upcoming Events </p>
                </li>
              </NavLink>

              <NavLink to="/past-events" exact onClick={asideMenu}>
                <li>
                  {" "}
                  <p> Past Events </p>{" "}
                </li>
              </NavLink>

              {/*<NavLink to="/speak" exact onClick={asideMenu}>
              <li>
                {" "}
                <p> Speak at our Events </p>{" "}
              </li>
            </NavLink>*/}
            </ul>
          </li>
          <li className="aside_sub_title">
            <NavLink to="/shop" exact onClick={asideMenu}>
              <span className="aside_sub_title_group">Shop</span>
            </NavLink>
          </li>
          <li className="aside_sub_title">
            <NavLink to="/cart" exact onClick={asideMenu}>
              <span className="aside_sub_title_group">
                <div className="aside_sub_title_cart">
                  <FaShoppingBag className="aside_cart_icon" />
                  <p>{cart.length}</p>
                </div>
              </span>
            </NavLink>
          </li>
          <li className="aside_sub_title">
            <NavLink to="/donate" exact onClick={asideMenu}>
              <span className="aside_sub_title_group">
                <button className="aside_sub_title_donate">Donate</button>
              </span>
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Aside;
