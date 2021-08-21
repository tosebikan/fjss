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
          The FJSS Group provides policy development input and support to the
          Scottish Government, key institutions, and local authorities as well
          as other organisations that do not have adequate BAME representation
          in their key decision-making structures. This helps these
          organisations to bridge the racial equality and diversity gap through
          the input they get from our policy development experts. In 2020 the
          organisation commenced working with the Scottish Government to provide
          them with essential BAME policy development input to the Justice
          Department. This helps the Scottish Government to meet its race
          equality outcomes while proving the BAME commutates across Scotland
          with an essential voice in policy and key decision making. The work
          with the Scottish Government is focused on the wider cross justice
          sector, ensuring issues are raised in the right arena for change, and
          providing a great platform for public consultation and engagement.
          There is scope to expand this work to cover other areas of the
          Scottish Government structures beyond the Justice Department.
        </p>
      </div>
    </div>
  );
}

export default Policy;
