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
  const { cart } = React.useContext(CartContext);

  console.log("NAV CART", cart.length);

  const asideMenu = () => {
    setAside(!aside);
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
          <li className="aside_sub_title">
            <span className="aside_sub_title_group">
              About <FiChevronDown />
            </span>
            <ul className="sub_nav">
              <NavLink to="/about" exact>
                <li>
                  <p> About us</p>
                </li>
              </NavLink>
              <NavLink to="approach" exact>
                <li>
                  <p>Our Approach</p>
                </li>
              </NavLink>
              <NavLink to="/people" exact>
                <li>
                  <p>Our People</p>
                </li>
              </NavLink>
            </ul>
          </li>
          <li className="aside_sub_title">
            <span className="aside_sub_title_group">
              Our work <FiChevronDown />
            </span>
            <ul className="aside_sub_nav">
              <NavLink to="/policy" exact>
                <li>
                  <p> Policy Development Input Support </p>
                </li>
              </NavLink>

              <NavLink to="/equality" exact>
                <li>
                  <p> Equality Diversity and Inclusion </p>{" "}
                </li>
              </NavLink>

              <NavLink to="/legal" exact>
                <li>
                  {" "}
                  <p> Legal Services </p>
                </li>
              </NavLink>

              <NavLink to="/projects" exact>
                <li>
                  {" "}
                  <p> Projects </p>
                </li>
              </NavLink>

              <NavLink to="/strategic" exact>
                <li>
                  {" "}
                  <p> Strategic Partnerships </p>{" "}
                </li>
              </NavLink>

              <NavLink to="/community" exact>
                <li>
                  {" "}
                  <p> Community Engagements </p>{" "}
                </li>
              </NavLink>

              <NavLink to="/opportunity" exact>
                <li>
                  {" "}
                  <p> Creating Opportunities </p>
                </li>
              </NavLink>
            </ul>
          </li>
          <li className="aside_sub_title">
            <span className="aside_sub_title_group">
              Resources
              <FiChevronDown />
            </span>

            <ul className="aside_sub_nav">
              <NavLink to="/reports" exact>
                <li>
                  {" "}
                  <p>Reports </p>
                </li>
              </NavLink>

              <NavLink to="/links" exact>
                <li>
                  {" "}
                  <p> Links </p>
                </li>
              </NavLink>

              <NavLink to="/info" exact>
                <li>
                  {" "}
                  <p> Helpful information </p>{" "}
                </li>
              </NavLink>

              <NavLink to="/financial-accounts" exact>
                <li>
                  {" "}
                  <p> Financial Accounts </p>{" "}
                </li>
              </NavLink>
            </ul>
          </li>
          <li className="aside_sub_title">
            <span className="aside_sub_title_group">
              Get involved
              <FiChevronDown />
            </span>

            <ul className="aside_sub_nav">
              <NavLink to="/donate" exact>
                <li>
                  {" "}
                  <p> Donate </p>
                </li>
              </NavLink>

              <NavLink to="/volunteer" exact>
                <li>
                  {" "}
                  <p> Volunteer </p>{" "}
                </li>
              </NavLink>

              {/*<NavLink to="/fund-raising" exact>
              <li>
                {" "}
                <p> Fundraising </p>
              </li>
            </NavLink>*/}

              <NavLink to="/jobs" exact>
                <li>
                  {" "}
                  <p> Jobs </p>{" "}
                </li>
              </NavLink>
            </ul>
          </li>
          <li className="aside_sub_title">
            <span className="aside_sub_title_group">
              Media
              <FiChevronDown />
            </span>

            <ul className="aside_sub_nav">
              <NavLink to="/gallery" exact>
                <li>
                  {" "}
                  <p> Gallery (Photo and videos) </p>{" "}
                </li>
              </NavLink>

              {/*<NavLink to="/podcast" exact>
              <li>
                {" "}
                <p> Podcast </p>{" "}
              </li>
            </NavLink>*/}

              {/*<NavLink to="/blog" exact>
              <li>
                {" "}
                <p> Blog </p>{" "}
              </li>
            </NavLink>*/}

              <NavLink to="/news" exact>
                <li>
                  {" "}
                  <p> News </p>
                </li>
              </NavLink>
            </ul>
          </li>
          <li className="aside_sub_title">
            <NavLink to="/events" exact>
              <span className="aside_sub_title_group">
                Events
                <FiChevronDown />
              </span>
            </NavLink>
            <ul className="aside_sub_nav">
              <NavLink to="/upcoming_events" exact>
                <li>
                  {" "}
                  <p> Upcoming Events </p>
                </li>
              </NavLink>

              <NavLink to="/past-events" exact>
                <li>
                  {" "}
                  <p> Past Events </p>{" "}
                </li>
              </NavLink>

              {/*<NavLink to="/speak" exact>
              <li>
                {" "}
                <p> Speak at our Events </p>{" "}
              </li>
            </NavLink>*/}
            </ul>
          </li>
          <li className="aside_sub_title">
            <NavLink to="/shop" exact>
              <span className="aside_sub_title_group">Shop</span>
            </NavLink>
          </li>
          <li className="aside_sub_title">
            <NavLink to="/cart" exact>
              <span className="aside_sub_title_group">
                <div className="aside_sub_title_cart">
                  <FaShoppingBag className="aside_cart_icon" />
                  <p>{cart.length}</p>
                </div>
              </span>
            </NavLink>
          </li>
          <li className="aside_sub_title">
            <NavLink to="/donate" exact>
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