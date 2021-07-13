import "./donate.css";
import give from "../../assets/images/give.jpg";

const amounts = [5, 10, 15, 20];
function Donate() {
  return (
    <div className="donate_container">
      <div className="donate_hero">
        <img src={give} alt="" />
        {/*<div className="donate_hero_text">
          <h2>Legal Services</h2>
          <p>FJSS GROUP</p>
        </div>*/}
      </div>
      <div className="donate_title">
        <h2>
          Donate To FJSS Group To Help Improve The Scottish Justice System
        </h2>
        <p>
          The FJSS Group is the main voice for Justice Sector Reforms in the
          Scottish justice system. Our work is mainly self funded and we will
          greatly appreciate your support to our work.
        </p>
      </div>

      {/* DONATE AMOUNT SECTION*/}
      <div className="donate_amount_container">
        <div className="donate_amount_group">
          {amounts.map(el => (
            <button> ${el}</button>
          ))}
        </div>

        <form className="donate_form">
          <input placeholder="custom amount" />
        </form>
      </div>

      {/*DONATE DETAILS SECTION */}

      <div className="donate_details_container">
        <h2>Donate</h2>
        <form className="donate_details_form">
          <div className="donate_form_row">
            <input placeholder="FirstName" className="required" />
            <input placeholder="Last Name" />
          </div>
          <div className="donate_form_column">
            <input placeholder="Address" />
            <input placeholder="Address" />
          </div>
          <div className="donate_form_row">
            <input placeholder="Country" />
            <input placeholder="City" />
          </div>
          <div className="donate_form_row">
            <input placeholder="State / Province / Region" />
            <input placeholder="Postal / Zip code" />
          </div>
        </form>
      </div>

      {/* DONATE PAYMENT METHOD*/}

      <div className="donate_method">
        <h2>Payment</h2>
        <p>Choose your payment method</p>
        <form className="donate_method_form">
          <div className="donate_method_row">
            <input type="radio" />
            <p>Offline Donation</p>
          </div>
          <div className="donate_method_row">
            <input type="radio" />
            <p>Paypal</p>
          </div>
        </form>
      </div>

      {/*DONATE TERMS SECTION */}
      <div className="donate_terms">
        <h2>Terms and Conditions</h2>
        <p>
          Your personal data will be used to process your donation, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
        <form className="donate_terms_form">
          <div className="donate_terms_row">
            <input type="radio" />
            <p> Yes, I am happy for you to contact me via email or phone.</p>
          </div>
        </form>
      </div>

      <button className="donate_button">Donate Now</button>
    </div>
  );
}

export default Donate;
