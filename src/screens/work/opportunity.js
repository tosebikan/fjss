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
          volunteer and gain experience while improving their skills in fields
          that they would otherwise struggle to gain access to. The organisation
          is 99% volunteer driven and most of the volunteers in our teams are
          highly qualified and skilled individuals with excellent qualifications
          from several disciplines such Legal, IT, Business and Marketing,
          Project and Events Management, Media and Photography, Health and
          Psychology, History and Literature, Science and Research as well as
          Engineering. Our organisation provides these dedicated volunteers with
          a real time opportunity to showcase their skills, and gain experience
          of running life changing programs and departments in an environment
          that enriches and rewards their contributions. The organisation
          provides mentoring and personal development support of high standard
          to the volunteers most of whom join as graduates looking for work
          experience and this creates a win-win scenario for the volunteers and
          the organisation.
        </p>
      </div>
    </div>
  );
}

export default Opportunity;
