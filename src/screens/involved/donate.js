import * as React from "react";
import "./donate.css";
import give from "../../assets/images/give.jpg";

function Donate() {
  const inputRef = React.createRef(null);
  const [amount, setAmount] = React.useState(0);
  const amounts = [5, 10, 15, 20];
  const [fName, setFName] = React.useState("");
  const [lName, setLName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [address2, setAddress2] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [postal, setPostal] = React.useState("");
  const [paymentType, setPaymentType] = React.useState("");
  const [paymentError, setPaymentError] = React.useState("");

  const donate = e => {
    e.preventDefault();
    if (amount === "") return;
    if (paymentType === "") {
      setPaymentError("Please enter all required fields*");
      return;
    }

    let payload = {
      fName,
      lName,
      address,
      address2,
      country,
      city,
      state,
      postal
    };

    console.log(payload);
  };

  return (
    <div className="donate_container">
      <div className="donate_hero">
        <img src={give} alt="" />
      </div>
      <div className="donate_title">
        <h2>Donate</h2>
        <p>
          The FJSS Group is a small charity organisation undertaking very
          important work. We are still largely self-funded and we would greatly
          appreciate your kind donation. Kindly follow the simple steps if you
          would like to donate towards our work.
        </p>
      </div>

      {/* DONATE AMOUNT SECTION*/}
      <div className="donate_amount_container">
        <div className="donate_amount_group">
          {amounts.map((el, id) => (
            <button
              onClick={() => {
                setAmount(el);
                setPaymentError("");
                inputRef.current.value = "";
              }}
              className={amount === el ? "selected" : "amount_button"}
              key={id}
            >
              ${el}
            </button>
          ))}
        </div>

        <form className="donate_form">
          <input
            placeholder="custom amount"
            type="number"
            min="1"
            onChange={e => {
              setAmount(e.target.value);
              setPaymentError("");
            }}
            ref={inputRef}
          />
        </form>
      </div>

      {/*DONATE DETAILS SECTION */}

      <form>
        <div className="donate_details_container">
          <h2>Donate</h2>
          <div className="donate_details_form">
            <div className="donate_form_row">
              <input
                placeholder="FirstName"
                value={fName}
                required
                onChange={e => {
                  setFName(e.target.value);
                  setPaymentError("");
                }}
              />
              <input
                placeholder="Last Name"
                value={lName}
                required
                onChange={e => {
                  setLName(e.target.value);
                  setPaymentError("");
                }}
              />
            </div>
            <div className="donate_form_column">
              <input
                placeholder="Address"
                value={address}
                required
                onChange={e => {
                  setAddress(e.target.value);
                  setPaymentError("");
                }}
              />
              <input
                placeholder="Address2"
                value={address2}
                onChange={e => {
                  setAddress2(e.target.value);
                  setPaymentError("");
                }}
              />
            </div>
            <div className="donate_form_row">
              <input
                placeholder="Country"
                value={country}
                required
                onChange={e => {
                  setCountry(e.target.value);
                  setPaymentError("");
                }}
              />
              <input
                placeholder="City"
                value={city}
                required
                onChange={e => {
                  setCity(e.target.value);
                  setPaymentError("");
                }}
              />
            </div>
            <div className="donate_form_row">
              <input
                placeholder="State / Province / Region"
                value={state}
                required
                onChange={e => {
                  setState(e.target.value);
                  setPaymentError("");
                }}
              />
              <input
                placeholder="Postal / Zip code"
                value={postal}
                required
                onChange={e => {
                  setPostal(e.target.value);
                  setPaymentError("");
                }}
              />
            </div>
          </div>
        </div>

        {/* DONATE PAYMENT METHOD*/}
        <div className="donate_method">
          <h2>Payment</h2>
          <p>Choose your payment method</p>
          <div className="donate_method_form">
            <div className="donate_method_row">
              <input
                type="radio"
                name="donate"
                onChange={() => setPaymentType("offline")}
              />
              <p>Offline Donation</p>
            </div>
            <div className="donate_method_row">
              <input
                type="radio"
                name="donate"
                onChange={() => setPaymentType("donate")}
              />
              <p>Paypal</p>
            </div>
          </div>
        </div>

        {/*DONATE TERMS SECTION */}
        <div className="donate_terms">
          <h2>Terms and Conditions</h2>
          <p>
            Your personal data will be used to process your donation, support
            your experience throughout this website, and for other purposes
            described in our privacy policy.
          </p>
          <div className="donate_terms_form">
            <div className="donate_terms_row">
              <input type="radio" />
              <p> Yes, I am happy for you to contact me via email or phone.</p>
            </div>
          </div>
        </div>
        {paymentError.length > 0 && <p className="error">{paymentError}</p>}
        <button className="donate_button" onClick={donate}>
          Donate Now
        </button>
      </form>
    </div>
  );
}

export default Donate;
