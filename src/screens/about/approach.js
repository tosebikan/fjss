import "./approach.css";
import HeroImage from "../../assets/images/home_hero.jpg";
import approach1 from "../../assets/images/approach1.jpg";
import heritage from "../../assets/images/heritage.jpg";
function Approach() {
  return (
    <div className="approach_container">
      <div className="approach_hero">
        <img src={HeroImage} alt="" />
        <div className="approach_hero_text">
          <h2>Our Approach</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>

      {/*TOP SECTION */}

      <div className="approach_top">
        <p>
          Our signature approach involves engaging the system. We do this
          through holding regular meetings, workshops, seminars and conferences
          to discuss key policies that inform justice delivery in Scotland. We
          run regular open forums where invited speakers address topical issues
          affecting justice delivery to our communities. We jointly run focus
          surgeries with local elected leaders to address specific issues
          affecting our communities. We research on key issues such as
          representation in elected offices and make key recommendations to
          oversight bodies and political leaders. We explore the role of history
          plays in shaping modern-day inequality and highlight the historical
          links to inequality, racial injustice, and racial prejudice.
        </p>
      </div>

      {/* APPROACH SECTION*/}

      <div className="approach">
        <div className="approach_row">
          <div className="approach_row_left">
            <h2>Collaborations</h2>
            <p>
              Collaborations Our main approach involves engaging the key
              stakeholders in the Scottish justice system through regular
              meetings and conferences to discuss key the polices that inform
              justice delivery in Scotland. For the past 18 months the FJSS
              Group has been running a monthly open forum, the Justice Forum
              where invited speakers address topical issues affecting our
              communities such as community relations and racially motivated
              antisocial incidents. The issues discussed also look at historical
              links to inequality, the Scottish justice system , the law in
              Scotland and how it affects issues around opportunity, employment,
              immigration, settlement, social housing and the forum also gathers
              the views from the audiences.
            </p>
          </div>
          <div className="approach_row_right">
            <img src={approach1} alt="" />
          </div>
        </div>
        <div className="approach_row">
          <div className="approach_row_right">
            <img src={approach1} alt="" />
          </div>
          <div className="approach_row_left">
            <h2>Delivering Lasting Events</h2>
            <p>
              In June 2019 the FJSS Group hosted the first-ever grassroots-led
              Justice Conference in Scotland that brought together key
              stakeholders in the justice system. One of the major outcomes of
              the justice conference was the establishment of the Justice Sector
              Reforms Task Force chaired by Sir Geoff Palmer. In August 2019 the
              FJSS Group launched the first-ever Community Stakeholders Meeting
              jointly hosted with the Home Office and now takes place every
              three months.
            </p>
          </div>
        </div>
        <div className="approach_row">
          <div className="approach_row_left">
            <p>
              On 27th February 2020, the FJSS Group launched the Heritage
              Lecture Series with Sir Geoff Palmer as the keynote speaker at the
              well-attended inaugural lecture. The lecture series is a
              high-level platform to engage great minds such as historians,
              academics, politicians, policymakers and public individuals with
              an interest in the history of injustice and inequality and how
              best to address it and create a better, prosperous society.
            </p>
          </div>
          <div className="approach_row_right">
            <img src={heritage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Approach;
