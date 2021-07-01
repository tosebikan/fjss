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
          <NavLink to="/" exact>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/" exact>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/" exact>
            Our work
          </NavLink>
          <ul>
            <li>
              <NavLink to="/" exact>
                Policy Development Input Support
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact>
                Equality Diversity and Inclusion
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact>
                Legal Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact>
                Strategic Partnerships
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact>
                Community Engagements
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact>
                Creating Opportunities
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/" exact>
            Resources
          </NavLink>
          <ul>
            <li>
              <NavLink to="/" exact>
                Reports
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact>
                Links
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact>
                Helpful information
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact>
                Financial Accounts
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/" exact>
            Get involved
          </NavLink>

          <ul>
            <li>
              <NavLink to="/" exact>
                Donate
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact>
                Volunteer
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact>
                Fundraising
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact>
                Jobs
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/" exact>
            Media
          </NavLink>
          <ul>
            <li>
              <NavLink to="/" exact>
                Gallery (Photo and videos)
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact>
                Podcast
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact>
                News
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/" exact>
            Events
          </NavLink>
          <ul>
            <li>
              <NavLink to="/" exact>
                Upcoming Events
              </NavLink>
              <NavLink to="/" exact>
                Past Events
              </NavLink>
              <NavLink to="/" exact>
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
