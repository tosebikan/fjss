import React from "react";
// import ReactMarkdown from "react-markdown";
import Markdown from "react-markdown";

const StyledMarkdown = ({ content }) => {
  return <Markdown>{`${content}`}</Markdown>;
};

export default StyledMarkdown;
