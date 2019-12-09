import React from "react";
import PropTypes from "prop-types";

import { SectionContainer, SolutionsContainer } from "./styled";
import SectionTitle from "../../components/Sections/Title";
import CardContainer from "../../components/Card/Container";
import SolutionsCard from "../../components/Card/Solutions";

import { solutionCards } from "../../data";

function SectionSteps(props) {
  return (
    <SectionContainer>
      <SectionTitle text={props.title} id="solutions" />
      <SolutionsContainer>
        {solutionCards.map((data, key) => (
          <CardContainer
            fullSize
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xlg={6}
            key={key}
          >
            <SolutionsCard fullSize {...data} />
          </CardContainer>
        ))}
      </SolutionsContainer>
    </SectionContainer>
  );
}

SectionSteps.propTypes = {
  title: PropTypes.string
};

SectionSteps.defaultProps = {
  title: "What can you do with VanGoux"
};

export default SectionSteps;
