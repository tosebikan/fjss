import "./jobs.css";
import HeroImage from "../../assets/images/home_hero.jpg";
import opp from "../../assets/images/opp.png";
function Jobs() {
  return (
    <div className="jobs_container">
      <div className="jobs_hero">
        <img src={HeroImage} alt="" />
        <div className="jobs_hero_text">
          <h2>Jobs</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>

      <div className="jobs_opp">
        <div className="jobs_opp_left">
          <h2>Opportunities for representation on NHS Boards</h2>
          <img src={opp} alt="" />
        </div>
        <div className="jobs_opp_right">
          <p className="jobs_opp_right_title">Upload your resume</p>
          <div className="jobs_opp_upload">
            <p>Upload pdf/png file</p>
            <div className="jobs_upload_container">UP</div>
          </div>
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
