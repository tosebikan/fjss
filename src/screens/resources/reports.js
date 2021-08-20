import * as React from "react";
// import { saveAs } from "file-saver";
import "./reports.css";
import { FiChevronDown } from "react-icons/fi";
import HeroImage from "../../assets/images/home_hero.jpg";
import { apiFunctions } from "../../helpers/api";

function Reports() {
  const [reports, setReports] = React.useState([]);
  const [currReport, setCurrReports] = React.useState(0);

  React.useEffect(() => {
    setCurrReports(0);
    fetchReports();
  }, []);

  const fetchReports = async () => {
    let res = await apiFunctions.getReports();
    setReports(res);

    console.log("report", res);
  };

  // const save = (url, title) => {
  //   // saveAs(url, title);
  //   fetch(url)
  //     .then(response => response.blob())
  //     .then(blob => {
  //       // setFetching(false);
  //       const blobURL = URL.createObjectURL(blob);
  //       const a = document.createElement("a");
  //       a.href = blobURL;
  //       a.style = "display: none";
  //
  //       if (title && title.length) a.download = title;
  //       document.body.appendChild(a);
  //       a.click();
  //     })
  //     .catch(err => console.log(err));
  // };

  let currentReport = reports[currReport];
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
          <h2>{currentReport?.title}</h2>
          <FiChevronDown className="report_group_icon" />
        </div>
        <a
          href={`${process.env.PUBLIC_URL}/justicereforms.pdf`}
          target="_blank"
          rel="noreferrer"
          download
        >
          <button>Download</button>
        </a>
      </div>
    </div>
  );
}

export default Reports;
