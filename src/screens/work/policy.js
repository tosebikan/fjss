import "./policy.css";
import HeroImage from "../../assets/images/home_hero.jpg";
function Policy() {
  return (
    <div className="policy_container">
      <div className="policy_hero">
        <img src={HeroImage} alt="" />
        <div className="policy_hero_text">
          <h2>Policy Development input Support</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>
      {/*POLICY DEV */}
      <div className="policy_dev">
        <h2>Policy Development and Support</h2>
        <p>
          The FJSS Group provides policy development input and support to
          institutions and organisations that do not have adequate BAME
          representation in their key decision-making structures. This helps the
          organisations to bridge the racial equality gap through the input they
          get from our policy experts. In 2020 the organisation commenced
          working with the Scottish Government to provide them with essential
          BAME input in their policy development processes and give BAME people
          a voice in policy and key decision making. The work with the Scottish
          Government is focused on the justice sector, ensuring issues are
          raised in the right arena for change, and providing a platform for
          public consultation and engagement to represent these unheard voices.
          There is scope to expand this work to cover other areas of the
          Scottish Government departments.
        </p>
      </div>
    </div>
  );
}

export default Policy;
