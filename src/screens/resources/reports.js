import { saveAs } from "file-saver";
import "./reports.css";
import { FiChevronDown } from "react-icons/fi";
import HeroImage from "../../assets/images/home_hero.jpg";
import framework from "../../assets/pdfs/Framework-for-Justice-Reforms-in-Scotland-July-2020.pdf";

function Reports() {
  const download = e => {
    e.preventDefault();
    const blob = new Blob([framework], {
      type: "application/pdf;charset=utf-8"
    });
    saveAs(blob, "Framework-for-Justice-Reforms-in-Scotland-July-2020.pdf");
  };
  return (
    <div className="reports_container">
      <div className="policy_hero">
        <img src={HeroImage} alt="" />
        <div className="policy_hero_text">
          <h2>Reports</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>

      <div className="reports_download">
        <div className="report_group">
          <h2>The Framework for Justice Reform in Scotland July 2020</h2>
          <FiChevronDown className="report_group_icon" />
        </div>
        <a
          href="../../assets/pdfs/Framework-for-Justice-Reforms-in-Scotland-July-2020.pdf"
          download="Framework-for-Justice-Reforms-in-Scotland-July-2020.pdf"
        >
          download
        </a>
        <button onClick={download}>Downloads</button>
      </div>
    </div>
  );
}

export default Reports;
