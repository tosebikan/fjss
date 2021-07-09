import "./policy.css";
import HeroImage from "../../assets/images/home_hero.jpg";
function Opportunity() {
  return (
    <div className="opportunity_container">
      <div className="policy_hero">
        <img src={HeroImage} alt="" />
        <div className="policy_hero_text">
          <h2>Creating opportunities</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>
      {/*POLICY DEV */}
      <div className="policy_dev">
        <h2> Creating Opportunity</h2>
        <p>
          The FJSS Group creates opportunities for people of BAME background to
          volunteer and gain experience that they would otherwise struggle to
          gain elsewhere. The organisation is 99% volunteer driven and most of
          the volunteers in o0ur teams are professionals with excellent
          qualifications from several disciplines such Legal, IT, Business and
          Marketing, Project Management, Health and Psychology, History and
          Literature and Science and Research. This provides these professionals
          with a real time opportunity to showcase their skills, gain experience
          of running real programs and departments in an environment that
          enriches and rewards their contributions. The organisation provides
          mentoring and personal development of an extremely high standards to
          the volunteers most of whom join as graduates looking for work
          experience and this creates a win-win scenario for the volunteers and
          the organisation.
        </p>
      </div>
    </div>
  );
}

export default Opportunity;
