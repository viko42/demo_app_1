import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "./styled";

function Button(props) {
  return <ActionButton>{props.children}</ActionButton>;
}

Button.propTypes = {
  children: PropTypes.string
};

Button.defaultProps = {
  children: "Text"
};

export default Button;
