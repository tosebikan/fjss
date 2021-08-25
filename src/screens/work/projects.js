import * as React from "react";
import "./project.css";
import HeroImage from "../../assets/images/home_hero.jpg";
// import { projects } from "../../helpers/data";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { apiFunctions } from "../../helpers/api";
import StyledMarkdown from "../../components/styled_markdown";

function Projects(props) {
  const [loading, setLoading] = React.useState(true);
  const [projects, setProjects] = React.useState([]);
  let goto = props.location.state.goto;
  console.log({ goto });
  const currRef = React.useRef();
  const compRef = React.useRef();

  React.useEffect(() => {
    fetchProjects();
    //eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (goto === "current" && currRef.current) {
      currRef.current.scrollIntoView();
      return;
    }

    if (goto === "completed" && compRef.current) {
      compRef.current.scrollIntoView();
    }
  }, [projects]);

  let storage = {};

  const fetchProjects = async () => {
    setLoading(true);
    let res = await apiFunctions.getProjects();
    setProjects(res);
    storage.projects = res;
    setLoading(false);

    // console.log(projects);
  };

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
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ],
    className: "project_slider2",
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  // console.log({ completed, ongoing, upcoming });

  return (
    <div className="projects_container">
      <div className="project_hero">
        <img src={HeroImage} alt="" />
        <div className="project_hero_text">
          <h2>Projects</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>

      {loading && <p className="empty_media_text">Loading...</p>}

      {/*PROJECTS COMPLETE SECTIOn*/}

      {completed && (
        <div className="completed_projects" ref={compRef}>
          <Slider {...settings}>
            {completed.map(el => (
              <div className="project_complete" key={el.id}>
                <div className="project_complete_left">
                  <h2>Completed Projects</h2>

                  <p className="project_complete_title">{el.title}</p>
                  {/*<p className="project_complete_body">
                {el.text?.[0].slice(0, 100)}...
              </p>*/}
                  <div className="short_markdown_row">
                    <StyledMarkdown content={el.text.slice(0, 50)} />
                    <p>...</p>
                  </div>
                  <Link to={{ pathname: "project-details", state: { el } }}>
                    <button>Read more </button>
                  </Link>
                </div>

                <div className="project_complete_right">
                  <img src={el.image.url} alt="" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}

      {/* ONGOING PROJECTS*/}
      {ongoing.length > 0 && (
        <div className="ongoing_projects" ref={currRef}>
          <h2>Ongoing projects</h2>

          <Slider {...settings2}>
            {ongoing.map(el => (
              <div className="ongoin_group" key={el.id}>
                <div className="ongoing_projects_group">
                  <img src={el.image.url} alt="" />
                  <p className="ongoing_projects_title">{el.title}</p>
                  {/*<p className="ongoing_projects_body">
                  {el.text.map(el => el.slice(0, 30))}...
                </p>*/}
                  <div className="short_markdown_row">
                    <StyledMarkdown content={el.text.slice(0, 100)} />
                    {/*<p>...</p>*/}
                  </div>
                  <Link to={{ pathname: "project-details", state: { el } }}>
                    <button>Read more</button>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}

      {/* UPCOMING PROJECTS*/}
      {upcoming.length > 0 && (
        <div className="upcoming_projects">
          <h2>Upcoming projects</h2>

          <div className="ongoing_projects_section">
            {upcoming.map(el => (
              <div className="ongoing_projects_group" key={el.id}>
                <img src={el.image.url} alt="" />
                <p className="ongoing_projects_title">{el.title}</p>
                {/*<p className="ongoing_projects_body">
                {el.text.map(el => el.slice(0, 100))}...
              </p>*/}
                <div className="short_markdown_row">
                  <StyledMarkdown
                    content={el.text.slice(0, 100)}
                    className="short_richtext"
                  />
                  {/*<p>...</p>*/}
                </div>
                <Link to={{ pathname: "project-details", state: { el } }}>
                  <button>Read more</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
