import "./home.css";
import HeroImage from "../../assets/images/home_hero.jpg";
import HomeAbout from "../../assets/images/homeAbout.png";
import playLast from "../../assets/images/playlast.jpg";
import homeevent from "../../assets/images/homeevent.png";
import homeevent2 from "../../assets/images/homeevent2.png";

function Home() {
  return (
    <div className="home_container">
      <div className="home_hero_container">
        <img src={HeroImage} alt="" className="home_hero" />
        <h1>For a Fair, Just and Inclusive Scotland</h1>

        {/* COUNTDOWN SECTION*/}
        <div className="home_countdown">
          <h3>Countdown to the next event: </h3>
          <div className="home_countdown_timer">
            <p>20hrs</p>
            <p>19mins</p>
            <p>60secs</p>
          </div>
        </div>
      </div>

      {/* HOME ABOUT SECTION*/}
      <div className="home_about">
        <div className="home_about_left">
          <p className="home_about_title">
            <em>About us</em>
          </p>
          <h2 className="home_about_topic">
            Reforming The Scottish Justice System
          </h2>
          <p className="home_about_body">
            The Fair Justice System for Scotland Group (FJSS Group) is a
            grassroots-led legal charity based in West Calder, West Lothian. The
            organisation works towards creating greater equality and diversity
            in the Scottish justice system.
          </p>
          <button className="home_about_button">Read more</button>
        </div>

        <div>
          <img src={HomeAbout} alt="" />
        </div>
      </div>

      {/*TESTIMONIAL SECTION */}

      <div className="home_testimonial">
        <div className="home_testimonial_left">
          <h2>TESTIMONIALS</h2>
          <div className="home_testimonial_image_container">
            <img src={HomeAbout} alt="" className="home_testimonial_image" />
            <img src={HomeAbout} alt="" className="home_testimonial_image" />
            <img
              src={HomeAbout}
              alt=""
              className="home_testimonial_image_large"
            />
          </div>
        </div>
        <div className="home_testimonial_right">
          <p className="home_testimonial_name">Rodwell </p>
          <p className="home_testimonial_text">
            “Fair Justice system for Scotland - The people’s voice”
          </p>
        </div>
      </div>

      {/* HOME VIDEO*/}

      <div className="home_video_container">
        <img src={playLast} alt="" />
      </div>

      {/*Home Events */}

      <div className="home_events">
        <div className="home_events_left">
          <h2> Our Events </h2>
          <div className="home_events_date">
            <p>13</p>
            <p>April</p>
          </div>
          <p className="home_event_text">
            The Heritage Debate Series Statues: To topple or to repurpose? The
            greatest question of our generation
          </p>
          <div className="home_events_schedule">
            <p>7:00pm - 10:00pm</p>
            <p>Virtual Event</p>
          </div>

          <button className="home_event_button">Read more</button>
        </div>
        <div className="home_events_right">
          <img src={homeevent} alt="" className="home_event_img1" />
          <img src={homeevent2} alt="" className="home_event_img2" />
        </div>
      </div>

      {/* HOME SHOP SECTION*/}
      <div className="home_shop_container">
        <div className="home_shop_left">
          <img src={homeevent2} alt="" className="home_shop_main_img" />

          <div className="home_shop_images">
            <img src={homeevent2} alt="" />
            <img src={homeevent2} alt="" />
            <img src={homeevent2} alt="" />
          </div>
        </div>

        <div className="home_shop_right">
          <h2>Scottish History: The West Lothian Connection</h2>
          <p>
            The book further explores the historical links that West Lothian
            local authority area has with the Trans-Atlantic Slave Trade. It
            places Historical Injustice into context and how present-day
            prejudice and racial discrimination have their foundations and roots
            from slavery and enslavement of black people.
            <br /> Hardback copies available on
          </p>
          <img src={homeevent2} alt="" />
          <button className="home_shop_button">shop</button>
        </div>
      </div>

      {/* HOME HELP SECTION*/}
      <div className="home_help_container">
        <div className="home_help_circle" />
        <h3>How Can You Help?</h3>
        <p>Join the movement to make equality in the justice system reality</p>
        <div className="home_help_button_group">
          <button>Donate now</button>
          <button>Join up</button>
        </div>
      </div>

      {/*HOME NEWS SECTION*/}
      <div className="home_news_container">
        <div className="home_news_left">
          <div className="home_news_images">
            <img src={homeevent} alt="" />
            <div className="home_news_vertical_image">
              <img src={homeevent} alt="" />
              <img src={homeevent} alt="" />
            </div>
          </div>
        </div>
        <div className="home_news_right">
          <h2>LATEST NEWS</h2>
          <div className="home_news_date">
            <p>21</p>
            <p>Feb</p>
          </div>
          <p className="home_news_body">
            Serving our community is core to fjss group’s goals. [...]
          </p>
          <div className="home_new_snippet">
            <p>
              “Thank you FJSS Group for the friendly and helpful service.” Your
              food support team is wonderful. 🙏🙏 Ignitious Ocansey
            </p>
          </div>
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
