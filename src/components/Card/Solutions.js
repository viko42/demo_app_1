import React from "react";
import PropTypes from "prop-types";

import { SolutionsContainer } from "./styled";

function SolutionCard(props) {
  return (
    <SolutionsContainer fullSize={props.fullSize}>
      <img alt="icon" src={props.icon} />
      <span>{props.description}</span>
    </SolutionsContainer>
  );
}

SolutionCard.propTypes = {
  description: PropTypes.string,
  fullSize: PropTypes.bool
};

SolutionCard.defaultProps = {
  description: "Build MVPs for your web app as fast as you can design",
  fullSize: false
};

export default SolutionCard;
