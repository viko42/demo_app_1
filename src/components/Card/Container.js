import React from "react";
import PropTypes from "prop-types";

import { SectionCol } from "./styled";

function Container(props) {
  return <SectionCol {...props}>{props.children}</SectionCol>;
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
};

export default Container;
