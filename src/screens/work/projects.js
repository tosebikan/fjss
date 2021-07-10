import "./project.css";
import HeroImage from "../../assets/images/home_hero.jpg";
function Projects() {
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

      <div className="project_complete">
        <div className="project_complete_left">
          <h2>Complete Projects</h2>
          <p className="project_complete_title">
            History Book - The West Lothian Connection
          </p>
          <p className="project_complete_body">
            The FJSS Group successfully completed the history book project and
            the book was launched virtually and colourfully on 29 October 2020.
          </p>
          <button>Read more </button>
        </div>

        <div className="project_complete_right">
          <img src={HeroImage} alt="" />
        </div>
      </div>

      {/* ONGOING PROJECTS*/}
      <div className="ongoing_projects">
        <h2>Ongoing projects</h2>

        <div className="ongoing_projects_section">
          <div className="ongoing_projects_group">
            <img src={HeroImage} alt="" />
            <p className="ongoing_projects_title">
              Task Force For Justice Sector Reforms
            </p>
            <p className="ongoing_projects_body">
              The Task Force has now produced a Framework for Justice Sector
              Reforms in Scotland.
            </p>
            <button>Read more</button>
          </div>
          <div className="ongoing_projects_group">
            <img src={HeroImage} alt="" />
            <p className="ongoing_projects_title">
              Task Force For Justice Sector Reforms
            </p>
            <p className="ongoing_projects_body">
              The Task Force has now produced a Framework for Justice Sector
              Reforms in Scotland.
            </p>
            <button>Read more</button>
          </div>
          <div className="ongoing_projects_group">
            <img src={HeroImage} alt="" />
            <p className="ongoing_projects_title">
              Task Force For Justice Sector Reforms
            </p>
            <p className="ongoing_projects_body">
              The Task Force has now produced a Framework for Justice Sector
              Reforms in Scotland.
            </p>
            <button>Read more</button>
          </div>
        </div>
      </div>

      {/* UPCOMING PROJECTS*/}
      <div className="upcoming_projects">
        <h2>Upcoming projects</h2>

        <div className="ongoing_projects_section">
          <div className="ongoing_projects_group">
            <img src={HeroImage} alt="" />
            <p className="ongoing_projects_title">
              Task Force For Justice Sector Reforms
            </p>
            <p className="ongoing_projects_body">
              The Task Force has now produced a Framework for Justice Sector
              Reforms in Scotland.
            </p>
            <button>Read more</button>
          </div>
          <div className="ongoing_projects_group">
            <img src={HeroImage} alt="" />
            <p className="ongoing_projects_title">
              Task Force For Justice Sector Reforms
            </p>
            <p className="ongoing_projects_body">
              The Task Force has now produced a Framework for Justice Sector
              Reforms in Scotland.
            </p>
            <button>Read more</button>
          </div>
          <div className="ongoing_projects_group">
            <img src={HeroImage} alt="" />
            <p className="ongoing_projects_title">
              Task Force For Justice Sector Reforms
            </p>
            <p className="ongoing_projects_body">
              The Task Force has now produced a Framework for Justice Sector
              Reforms in Scotland.
            </p>
            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
