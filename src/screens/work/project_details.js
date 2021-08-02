/* @flow weak */

import React from "react";
import HeroImage from "../../assets/images/home_hero.jpg";
import "./project_details.css";

const ProjectDetails = props => {
  let data = props.location.state.el;
  console.log({ data });
  return (
    <div className="project_details_container">
      <div className="policy_hero">
        <img src={HeroImage} alt="" />
        <div className="policy_hero_text">
          <h2>Projects</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>

      {/*project info*/}
      <div className="project_details_info">
        <div className="project_details_info_left">
          <img src={data.image} alt="" />
        </div>
        <div className="project_details_info_right">
          <h2>{data.title}</h2>
          {data.text.map((el, id) => (
            <p key={id}>{el}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
