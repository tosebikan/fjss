import * as React from "react";
import "./volunteer.css";
import HeroImage from "../../assets/images/home_hero.jpg";

function Volunteer() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [confirm, setConfirm] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [response, setResponse] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();

    console.log({ firstName, lastName, dob, email, message });
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      dob.length === 0
    ) {
      alert("Please enter required fields");
      return;
    }

    if (confirm === false) {
      alert("Please acknowledge accurate information is given ");
      return;
    }

    let dobString = dob.replace("/", "-");

    setLoading(true);

    let template_params = {
      from_name: firstName,
      last_name: lastName,
      to_name: "FJSS GROUP",
      message: message,
      to: "tosebikan@gmail.com",
      from_mail: email,
      dob: dob
    };

    window.emailjs
      .send("service_fvgdzom", "template_p8qmg1s", template_params)
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setMessage("");
          setFirstName("");
          setLastName("");
          setDob("");
          setEmail("");

          setConfirm(false);
          setResponse("Mail sent successfully!");
          setTimeout(() => setResponse(""), 3000);
        },
        function(error) {
          console.log("FAILED...", error.response);
          setLoading(false);
          setResponse("FAILED..., please try again later");
        }
      );
  };

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

        <form className="volunteer_req_form" onSubmit={handleSubmit}>
          <div className="volunteer_req_form_row">
            <input
              placeholder="First Name*"
              value={firstName}
              type="text"
              required
              onChange={e => setFirstName(e.target.value)}
            />
            <input
              placeholder="Last Name*"
              value={lastName}
              type="text"
              required
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <div className="volunteer_req_form_row">
            <input
              placeholder="Email*"
              value={email}
              type="email"
              required
              onChange={e => setEmail(e.target.value)}
            />
            <input
              placeholder="Date of Birth(dd/mm/yyy)*"
              value={dob}
              type="text"
              required
              onChange={e => setDob(e.target.value)}
            />
          </div>
          <input placeholder="Where did you hear about us?" />
          <textarea
            placeholder="Skillsets or Area of interest*"
            value={message}
            type="text"
            required
            onChange={e => setMessage(e.target.value)}
          />
          <div className="volunteer_req_form_bottom">
            <p>Checkbox</p>
            <div className="volunteer_check_group">
              <input
                type="radio"
                value={confirm}
                onChange={() => setConfirm(!confirm)}
              />{" "}
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
            {loading ? (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
                alt=""
                style={{
                  width: 100,
                  height: 100,
                  objectFit: "contain",
                  alignSelf: "center"
                }}
              />
            ) : (
              <button>Submit</button>
            )}
            {response && <p>{response}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Volunteer;
