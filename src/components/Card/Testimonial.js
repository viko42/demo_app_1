import React from "react";
import PropTypes from "prop-types";

import FemaleAvatar from "../../assets/images/testimonial-picture-female@2x-fs8.png";
import MaleAvatar from "../../assets/images/testimonial-picture-male@2x-fs8.png";

import {
  ContainerStyled,
  Header,
  Avatar,
  Titles,
  Title,
  JobTitle,
  Description
} from "./styled";

import ScrollAnimation from "react-animate-on-scroll";

const images = {
  male: MaleAvatar,
  female: FemaleAvatar
};

function Testimonial(props) {
  return (
    <ScrollAnimation animateIn="bounceInRight" animateOut="bounceInRight">
      <ContainerStyled>
        <Header>
          <Avatar>
            <img src={images[props.avatar]} alt="avatar" />
          </Avatar>
          <Titles>
            <Title>{props.title}</Title>
            <JobTitle>{props.jobTitle}</JobTitle>
          </Titles>
        </Header>
        <Description>{props.description}</Description>
      </ContainerStyled>
    </ScrollAnimation>
  );
}

Testimonial.propTypes = {
  title: PropTypes.string,
  jobTitle: PropTypes.string,
  description: PropTypes.string,
  avatar: PropTypes.string
};

Testimonial.defaultProps = {
  title: "John Doe",
  jobTitle: "CEO, PrettyDopeDesigns",
  description:
    "Our senior frontend developer was 70% faster in building React.js components thanks to VanGoux!",
  avatar: "male"
};

export default Testimonial;
