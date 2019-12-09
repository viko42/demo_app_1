import React from "react";
import PropTypes from "prop-types";

import { JobsContainer } from "./styled";

function FeatureCard(props) {
  return (
    <JobsContainer>
      <h1>{props.title}</h1>
      <span>{props.description}</span>
    </JobsContainer>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

FeatureCard.defaultProps = {
  title: "UX engineers",
  description: "Build MVPs for your web app as fast as you can design"
};

export default FeatureCard;
