import React from "react";
import PropTypes from "prop-types";

import { SectionTitleContainer } from "./styled";

function SectionTitle(props) {
  return <SectionTitleContainer {...props}>{props.text}</SectionTitleContainer>;
}

SectionTitle.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  color: PropTypes.string
};

SectionTitle.defaultProps = {
  text: "My Title"
};

export default SectionTitle;
