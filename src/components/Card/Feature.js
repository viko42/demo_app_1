import React from "react";
import PropTypes from "prop-types";

import {
  FeatureContainer,
  FeatureHeader,
  FeatureImg,
  FeatureDescription
} from "./styled";

function FeatureCard(props) {
  return (
    <FeatureContainer withBgLine={props.withBgLine}>
      <FeatureHeader>
        <FeatureImg>
          <img src={props.iconBg} alt="iconBg" />
        </FeatureImg>
        <h1>{props.title}</h1>
      </FeatureHeader>
      <FeatureDescription>
        <span>{props.description}</span>
      </FeatureDescription>
    </FeatureContainer>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  withBgLine: PropTypes.bool,
  iconBg: PropTypes.string
};

FeatureCard.defaultProps = {
  title: "Pixel perfect output",
  description:
    "Crisp, pixel-perfect landing pages without bothering your developers"
};

export default FeatureCard;
