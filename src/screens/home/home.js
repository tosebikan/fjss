import * as React from "react";
import "./home.css";
import HeroImage from "../../assets/images/home_hero.jpg";
import HeroImage2 from "../../assets/images/homehero2.jpg";
import HomeAbout from "../../assets/images/homeAbout.png";
import playLast from "../../assets/images/playlast.jpg";
import homeevent from "../../assets/images/homeevent.png";
import homeevent2 from "../../assets/images/homeevent2.png";
import shop1 from "../../assets/images/shop1.png";
import shop2 from "../../assets/images/shop2.png";
import shop3 from "../../assets/images/shop3.png";
import shop4 from "../../assets/images/shop4.png";
import water from "../../assets/images/water.png";
import news2 from "../../assets/images/news2.png";
import news3 from "../../assets/images/news3.png";
import news1 from "../../assets/images/news1.jpg";
import { Link } from "react-router-dom";
import { testimonials } from "../../helpers/data";

import Slider from "react-slick";

function Home() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`10/01/${year}`) - +new Date();
    // console.log({ difference });
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());
  const [year] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  // console.log({ timerComponents });
  // console.log({ timeLeft });

  const [currSlide, setCurrSlide] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider_style",
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  const settingss = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    className: "slider2_style",
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    // rtl: true,
    afterChange: current => setCurrSlide(current)
  };

  console.log(currSlide);

  return (
    <div className="home_container">
      <div className="home_hero_container">
        <div className="home_hero">
          <Slider {...settings}>
            <div className="home_hero_group">
              <img src={HeroImage} alt="" className="hero_img" />
              <h1 className="hero_title1 slide-title">
                For a Fair, Just and Inclusive Scotland
              </h1>
            </div>
            <div className="home_hero_group">
              <img src={HeroImage2} alt="" className="hero_img" />
              <h1 className="hero_title2 slide-title">
                Creating a diverse and prosperous scotland
              </h1>
              <p className="hero_text slide-text">
                Calling all key stakeholders in the Scottish justice system;
                Senior HR executives and heads of policy and implementation with
                remit on diversity and equality; minority community led
                organisations with interest in diversity and equality in
                Scottish Justice system and the Scottish Government
              </p>
            </div>
          </Slider>
        </div>

        {/* COUNTDOWN SECTION*/}
        <div className="home_countdown">
          <h3>Countdown to the next event: </h3>

          <div className="home_countdown_timer">
            <p>{timeLeft.hours}hrs</p>
            <p>{timeLeft.minutes}mins</p>
            <p>{timeLeft.seconds}secs</p>
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
          <Link to="/about">
            <button className="home_about_button">Read more</button>
          </Link>
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
            <Slider {...settingss}>
              {testimonials.map((el, id) => (
                <div key={id}>
                  <img
                    src={el.image}
                    alt=""
                    className="home_testimonial_image"
                  />
                </div>
              ))}
            </Slider>

            <div>
              <img
                src={testimonials[currSlide].image}
                alt=""
                className="home_testimonial_image_large"
              />
            </div>
          </div>
        </div>
        <div className="home_testimonial_right">
          <p className="home_testimonial_name">
            {testimonials[currSlide].name}
          </p>
          <p className="home_testimonial_text">
            {testimonials[currSlide].text}
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

          <Link to="/upcoming_events">
            {" "}
            <button className="home_event_button">Read more</button>
          </Link>
        </div>
        <div className="home_events_right">
          <img src={homeevent} alt="" className="home_event_img1" />
          <img src={homeevent2} alt="" className="home_event_img2" />
        </div>
      </div>

      {/* HOME SHOP SECTION*/}
      <div className="home_shop_container">
        <div className="home_shop_left">
          <img src={shop1} alt="" className="home_shop_main_img" />

          <div className="home_shop_images">
            <img src={shop2} alt="" />
            <img src={shop3} alt="" />
            <img src={shop4} alt="" />
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
          <img src={water} alt="" />
          <Link to="/shop">
            <button className="home_shop_button">shop</button>
          </Link>
        </div>
      </div>

      {/* HOME HELP SECTION*/}
      <div className="home_help_container">
        <div className="home_help_circle" />
        <h3>How Can You Help?</h3>
        <p>Join the movement to make equality in the justice system reality</p>
        <div className="home_help_button_group">
          <Link to="/donate">
            {" "}
            <button>Donate now</button>
          </Link>
          <button>Join up</button>
        </div>
      </div>

      {/*HOME NEWS SECTION*/}
      <div className="home_news_container">
        <div className="home_news_left">
          <div className="home_news_images">
            <img src={news1} alt="" />
            <div className="home_news_vertical_image">
              <img src={news2} alt="" />
              <img src={news3} alt="" />
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
          <Link to="/news">
            <button>Read more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
