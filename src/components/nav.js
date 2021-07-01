import { NavLink } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <div className="nav">
      <ul className="nav_group">
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" exact>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact>
            About
          </NavLink>
        </li>
        <li>
          Our work
          <ul>
            <li>
              <NavLink to="/policy" exact>
                Policy Development Input Support
              </NavLink>
            </li>
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
            <li>
              <NavLink to="/projects" exact>
                Projects
              </NavLink>
            </li>
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
        <li>
          Resources
          <ul>
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
        <li>
          Get involved
          <ul>
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
        <li>
          Media
          <ul>
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
        <li>
          <NavLink to="/events" exact>
            Events
          </NavLink>
          <ul>
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
