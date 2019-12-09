import React from "react";
import PropTypes from "prop-types";
import { ContainerStyled } from "./styled";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Layout(props) {
  return (
    <ContainerStyled>
      <Navbar />
      {props.children}
      <Footer />
    </ContainerStyled>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
};

export default Layout;
