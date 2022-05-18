import HeroImage from "../../assets/images/home_hero.jpg";
import { IoTimeOutline, IoLocationSharp } from "react-icons/io5";
import "./upcoming_events.css";
import { events } from "../../helpers/data";
import { Link } from "react-router-dom";

function UpcomingEvents() {
  let upcoming = events.filter(el => el.status === "pending");
  return (
    <div className="upcomingEvents_container">
      <div className="upcoming_events_hero">
        <img src={HeroImage} alt="" />
        <div className="upcoming_events_hero_text">
          <h2>Events</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>

      <div className="upcoming_events_group">
        {upcoming.length === 0 && (
          <p style={{ color: "gray" }}>There are no upcoming events</p>
        )}
        {upcoming.map(el => (
          <div className="upcoming_events_card">
            <div className="upcoming_events_card_left">
              <div>
                <div className="upcoming_events_date">
                <p className="upcoming_events_bold">{el?.startDate}</p>
                </div>
                <p className="upcoming_events_text">{el.title}</p>
                <div className="row">
                <IoTimeOutline className="event_icon" />
                  <p>
                    {" "}
                    {el.startTime} - {el.endTime}{" "}
                  </p>{" "}
                </div>
                <div className="row">
                <IoLocationSharp className="event_icon" /> <p>{el.type}</p>
                </div>
              </div>

              <div>
              <Link to={{ pathname: "/event-details", state: { el } }}>
                <button className="upcoming_events_card_button">
                  Read more
                </button>
                </Link>
              </div>
            </div>

            <div className="upcoming_events_card_right">
              <img src={el?.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;
