import React from "react";
import PropTypes from "prop-types";

import { SectionContainer, StepsContainer } from "./styled";
import StepCard from "../../components/Card/Step";
import CardContainer from "../../components/Card/Container";

import SectionTitle from "../../components/Sections/Title";
import { stepCards } from "../../data";

function StepContainer(props) {
  return (
    <CardContainer shift justifyContent={props.justifyContent}>
      <StepCard {...props.data} />
    </CardContainer>
  );
}

StepContainer.propTypes = {
  justifyContent: PropTypes.string,
  data: PropTypes.object
};

function SectionSteps(props) {
  return (
    <SectionContainer>
      <SectionTitle text={props.title} id="steps" />
      <StepsContainer>
        <StepContainer justifyContent={"flex-start"} data={stepCards[0]} />
        <StepContainer data={stepCards[1]} />
        <StepContainer justifyContent={"flex-end"} data={stepCards[2]} />
      </StepsContainer>
    </SectionContainer>
  );
}

SectionSteps.propTypes = {
  title: PropTypes.string
};

SectionSteps.defaultProps = {
  title: "how vangoux works?"
};

export default SectionSteps;
