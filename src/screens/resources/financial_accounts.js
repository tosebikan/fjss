import "./reports.css";
import { FiChevronDown } from "react-icons/fi";
import HeroImage from "../../assets/images/home_hero.jpg";
function FinancialAccounts() {
  return (
    <div className="reports_container">
      <div className="policy_hero">
        <img src={HeroImage} alt="" />
        <div className="policy_hero_text">
          <h2>Financial Accounts</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>

      <div className="reports_download">
        <div className="report_group">
          <h2>The Framework for Justice Reform in Scotland July 2020</h2>
          <FiChevronDown className="report_group_icon" />
        </div>
        <button>Downloads</button>
      </div>
    </div>
  );
}

export default FinancialAccounts;
