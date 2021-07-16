import "./volunteer.css";
import HeroImage from "../../assets/images/home_hero.jpg";
function Volunteer() {
  return (
    <div className="volunteer_container">
      <div className="volunteer_hero">
        <img src={HeroImage} alt="" />
        <div className="volunteer_hero_text">
          <h2>Volunteer</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>

      {/* VOLUNTEER REQ SECTION*/}
      <div>
        <h2>Volunteer Requitment Forms </h2>
        <p>
          Fill in the form below to volunteer for FJSS Group. You will be
          contacted when we receive your application.
        </p>

        <form className="volunteer_req_form">
          <div className="volunteer_req_form_row">
            <input placeholder="First Name" />
            <input placeholder="LastName" />
          </div>
          <div className="volunteer_req_form_row">
            <input placeholder="Email" />
            <input placeholder="Date of Birth(dd/mm/yyy)" />
          </div>
          <input placeholder="Where did you hear about us?" />
          <textArea placeholder="Skillsets or Area of interest" />
          <div className="volunteer_req_form_bottom">
            <p>Checkbox</p>
            <div className="volunteer_check_group">
              <input type="radio" />{" "}
              <p>
                {" "}
                By ticking this, I acknowledge that the information I've given
                is accurate.
              </p>
            </div>

            <p>
              * Please note that all personal information on this application
              form is highly confidential. It will only be used for the purpose
              for which it was collected and won’t be disclosed to any other
              parties. Read more in our privacy policy.
            </p>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Volunteer;
