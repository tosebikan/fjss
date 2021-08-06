import "./project.css";
import HeroImage from "../../assets/images/home_hero.jpg";
import { projects } from "../../helpers/data";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function Projects() {
  let completed = projects.filter(el => el.status === "completed");
  let ongoing = projects.filter(el => el.status === "onGoing");
  let upcoming = projects.filter(el => el.status === "upComing");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "project_slider",
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    className: "project_slider2",

    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  console.log({ completed });
  return (
    <div className="projects_container">
      <div className="policy_hero">
        <img src={HeroImage} alt="" />
        <div className="policy_hero_text">
          <h2>Projects</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>

      {/*PROJECTS COMPLETE SECTIOn*/}

      <Slider {...settings}>
        {completed.map((el, id) => (
          <div className="project_complete" key={id}>
            <div className="project_complete_left">
              <h2>Completed Projects</h2>

              <p className="project_complete_title">{el.title}</p>
              <p className="project_complete_body">
                {el.text.map(el => el.slice(0, 100))}...
              </p>
              <Link to={{ pathname: "project-details", state: { el } }}>
                <button>Read more </button>
              </Link>
            </div>

            <div className="project_complete_right">
              <img src={el.image} alt="" />
            </div>
          </div>
        ))}
      </Slider>

      {/* ONGOING PROJECTS*/}
      <div className="ongoing_projects">
        <h2>Ongoing projects</h2>

        <Slider {...settings2}>
          {/*<div className="ongoing_projects_section">*/}
          {ongoing.map((el, id) => (
            <div className="ongoin_group" key={id}>
              <div className="ongoing_projects_group" key={id}>
                <img src={el.image} alt="" />
                <p className="ongoing_projects_title">{el.title}</p>
                <p className="ongoing_projects_body">
                  {el.text.map(el => el.slice(0, 30))}...
                </p>
                <Link to={{ pathname: "project-details", state: { el } }}>
                  <button>Read more</button>
                </Link>
              </div>
            </div>
          ))}
          {/*</div>*/}
        </Slider>
      </div>

      {/* UPCOMING PROJECTS*/}
      <div className="upcoming_projects">
        <h2>Upcoming projects</h2>

        <div className="ongoing_projects_section">
          {upcoming.map((el, id) => (
            <div className="ongoing_projects_group" key={id}>
              <img src={el.image} alt="" />
              <p className="ongoing_projects_title">{el.title}</p>
              <p className="ongoing_projects_body">
                {el.text.map(el => el.slice(0, 100))}...
              </p>
              <Link to={{ pathname: "project-details", state: { el } }}>
                <button>Read more</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
