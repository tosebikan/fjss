import * as React from "react";
// import { saveAs } from "file-saver";
import "./reports.css";
import { FiChevronDown } from "react-icons/fi";
import HeroImage from "../../assets/images/home_hero.jpg";
// import { apiFunctions } from "../../helpers/api";

const reportsArr = [
  {
    id: 1,
    title: "Equalities Workshop",
    url:
      "https://drive.google.com/file/d/1anxLyta9uMzEVcrUbv3qAdN-s7x-ZcxK/view?usp=sharing",
    directUrl:
      "https://drive.google.com/uc?export=download&id=1anxLyta9uMzEVcrUbv3qAdN-s7x-ZcxK"
  },
  {
    id: 2,
    title: "Framework For Justice Sector Reforms in Scotland",
    url:
      "https://drive.google.com/file/d/1kiCwHjjdyTVOcuBm8_T1-GY6M7W0aOjj/view?usp=sharing",
    directUrl:
      "https://drive.google.com/uc?export=download&id=1kiCwHjjdyTVOcuBm8_T1-GY6M7W0aOjj"
  }
];
function Reports() {
  const [reports, setReports] = React.useState([]);
  const [currReport, setCurrReports] = React.useState(0);
  const [reportModal, setReportModal] = React.useState(false);

  React.useEffect(() => {
    setReports(reportsArr);
    // setCurrReports(0);
    // fetchReports();
  }, []);

  // const fetchReports = async () => {
  //   let res = await apiFunctions.getReports();
  //   setReports(res);
  //
  //   console.log("report", res);
  // };

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

      {reportModal && (
        <div className="reportModal">
          {reports.map(el => (
            <p
              onClick={() => {
                setCurrReports(el.id - 1);
                setReportModal(!reportModal);
              }}
            >
              {el.title}
            </p>
          ))}
        </div>
      )}

      <div className="reports_download">
        <div
          className="report_group"
          onClick={() => setReportModal(!reportModal)}
        >
          <h2>{currentReport?.title}</h2>
          <FiChevronDown className="report_group_icon" />
        </div>
        <a href={currentReport?.directUrl} download>
          <button>Download</button>
        </a>
      </div>
    </div>
  );
}

export default Reports;
