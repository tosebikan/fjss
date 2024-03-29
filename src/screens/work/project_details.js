/* @flow weak */

import React from "react";
import HeroImage from "../../assets/images/home_hero.jpg";
import "./project_details.css";
import Markdown from "react-markdown";

const ProjectDetails = props => {
  let data = props.location.state.el;
  console.log({ data });
  return (
    <div className="project_details_container">
      <div className="project_hero">
        <img src={HeroImage} alt="" />
        <div className="project_hero_text">
          <h2>Projects</h2>
          <p>FJSS GROUP</p>
        </div>
      </div>

      {/*project info*/}
      <div className="project_details_info">
        <div className="project_details_info_left">
          <img src={data.image.url} alt="" />
        </div>
        <div className="project_details_info_right">
          <h2>{data.title}</h2>
          {/*{data.text.map((el, id) => (
            <p key={id}>{el}</p>
          ))}*/}
          <Markdown>{`${data.text}`}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
