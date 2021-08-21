import "./policy.css";
import HeroImage from "../../assets/images/home_hero.jpg";
function Legal() {
  return (
    <div className="legal_container">
      <div className="policy_hero">
        <img src={HeroImage} alt="" />
        <div className="policy_hero_text">
          <h2>Projects and Events</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>
      {/*POLICY DEV */}
      <div className="policy_dev">
        <h2>Projects and Events</h2>
        <p>
          The FJSS Groups runs a series of projects and events that connect with
          the organisation’s vision and objectives. Some of the projects
          highlight the historical development of the BAME communities and their
          journey from various backgrounds connected by a shared desire for
          advancing their aspirations. Other projects provide learning
          experience for adults and young people through the themes that help
          them to understand racial diversity, inclusion, and core- existence of
          communities of diverse backgrounds. Some of our past projects include
          a published book chronicling the history of slavery and its connection
          with West Lothian, one of the sprawling local authorities in Scotland.
          Our hugely successful book the West Lothian Connection is currently
          available on Waterstones through Gardner’s Book Sales. We are
          currently undertaking the ground-breaking
        </p>
        <p>
          The events that we organise monthly help to highlight major issues and
          provide our communities with information on available opportunities
          and how to access them. The events also provide a forum where policy
          and decision makers can interact with members of the BAME community to
          exchange views and ideas on the impact of some of their policies to
          the communities and how this can be mitigated. The projects and events
          together provide fantastic opportunities for young people and adults
          to gain more experience in research and project management. In summary
          we create a lot interest in our communities on some of the topical
          issues that are addressed through the implementation of the projects
          and illustrated during our well subscribed events.
        </p>
      </div>
    </div>
  );
}

export default Legal;
