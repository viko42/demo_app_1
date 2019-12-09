import React from "react";
import PropTypes from "prop-types";

import { StepContainer } from "./styled";

function StepCard(props) {
  return (
    <StepContainer withBgLine={props.withBgLine}>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
      <span>{props.description}</span>
      <img className="stepImg" src={props.iconBg} alt="iconBg" />
    </StepContainer>
  );
}

StepCard.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  avatar: PropTypes.string,
  withBgLine: PropTypes.bool,
  iconBg: PropTypes.string
};

StepCard.defaultProps = {
  title: "Step 1",
  subTitle: "Upload Sketch",
  description: "Upload design for your site, landing page or portfolio"
};

export default StepCard;
