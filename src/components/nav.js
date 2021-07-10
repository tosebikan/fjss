import { NavLink } from "react-router-dom";
import "./nav.css";
import { FiChevronDown } from "react-icons/fi";
import Logo from "../assets/images/logo.png";

function Nav() {
  return (
    <div className="nav">
      <ul className="nav_group">
        <li className="logo_container">
          <NavLink to="/" exact>
            <img src={Logo} alt="" className="logo" />
          </NavLink>
        </li>
        <li className="sub_title">
          <NavLink to="/contact" exact>
            Contact
          </NavLink>
        </li>
        <li className="sub_title">
          <NavLink to="/about" exact>
            About
          </NavLink>
        </li>
        <li className="sub_title">
          <span className="sub_title_group">
            Our work <FiChevronDown />
          </span>
          <ul className="sub_nav">
            <NavLink to="/policy" exact>
              <li>
                <p> Policy Development Input Support </p>
              </li>
            </NavLink>

            <li>
              <NavLink to="/equality" exact>
                Equality Diversity and Inclusion
              </NavLink>
            </li>
            <li>
              <NavLink to="/legal" exact>
                Legal Services
              </NavLink>
            </li>

            <NavLink to="/projects" exact>
              <li> Projects </li>
            </NavLink>

            <li>
              <NavLink to="/strategic" exact>
                Strategic Partnerships
              </NavLink>
            </li>
            <li>
              <NavLink to="/community" exact>
                Community Engagements
              </NavLink>
            </li>
            <li>
              <NavLink to="/opportunity" exact>
                Creating Opportunities
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="sub_title">
          <span className="sub_title_group">
            Resources
            <FiChevronDown />
          </span>

          <ul className="sub_nav">
            <li>
              <NavLink to="/reports" exact>
                Reports
              </NavLink>
            </li>
            <li>
              <NavLink to="/links" exact>
                Links
              </NavLink>
            </li>
            <li>
              <NavLink to="/info" exact>
                Helpful information
              </NavLink>
            </li>
            <li>
              <NavLink to="/financial-accounts" exact>
                Financial Accounts
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="sub_title">
          <span className="sub_title_group">
            Get involved
            <FiChevronDown />
          </span>

          <ul className="sub_nav">
            <li>
              <NavLink to="/donate" exact>
                Donate
              </NavLink>
            </li>
            <li>
              <NavLink to="/volunteer" exact>
                Volunteer
              </NavLink>
            </li>
            <li>
              <NavLink to="/fund-raising" exact>
                Fundraising
              </NavLink>
            </li>
            <li>
              <NavLink to="/jobs" exact>
                Jobs
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="sub_title">
          <span className="sub_title_group">
            Media
            <FiChevronDown />
          </span>

          <ul className="sub_nav">
            <li>
              <NavLink to="/gallery" exact>
                Gallery (Photo and videos)
              </NavLink>
            </li>
            <li>
              <NavLink to="/podcast" exact>
                Podcast
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" exact>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" exact>
                News
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="sub_title">
          <NavLink to="/events" exact>
            <span className="sub_title_group">
              Events
              <FiChevronDown />
            </span>
          </NavLink>
          <ul className="sub_nav">
            <li>
              <NavLink to="/upcoming_events" exact>
                Upcoming Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/past-events" exact>
                Past Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/speak" exact>
                Speak at our Events
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
