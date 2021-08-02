import HeroImage from "../../assets/images/home_hero.jpg";
import homeevent from "../../assets/images/homeevent.png";
import { FaInstagram } from "react-icons/fa";
import "./upcoming_events.css";
// import { events } from "../../helpers/data";
function UpcomingEvents() {
  // let upcoming = events.filter(el => el.status === "upcoming");
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
        <div className="upcoming_events_card">
          <div className="upcoming_events_card_left">
            <div>
              <div className="upcoming_events_date">
                <p>13</p>
                <p className="upcoming_events_bold"> Apr </p>
              </div>
              <p className="upcoming_events_text">
                The Heritage Debate Series Statues: To topple or to repurpose?
                The greatest question of our generation
              </p>
              <div className="row">
                <FaInstagram className="event_icon" />
                <p> 7:00 pm - 10:00 pm </p>{" "}
              </div>
              <div className="row">
                <FaInstagram className="event_icon" /> <p>Virtual Event</p>
              </div>
            </div>

            <div>
              <button className="upcoming_events_card_button">Read more</button>
            </div>
          </div>

          <div className="upcoming_events_card_right">
            <img src={homeevent} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
