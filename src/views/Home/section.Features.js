import React from "react";
import PropTypes from "prop-types";

import { SectionContainer, FeaturesContainer } from "./styled";
import FeatureCard from "../../components/Card/Feature";
import CardContainer from "../../components/Card/Container";

import SectionTitle from "../../components/Sections/Title";
import { featureCards } from "../../data";

function FeatureContainer(props) {
  return (
    <CardContainer shift justifyContent={props.justifyContent}>
      <FeatureCard {...props.data} />
    </CardContainer>
  );
}

FeatureContainer.propTypes = {
  justifyContent: PropTypes.string,
  data: PropTypes.object
};

function SectionFeatures(props) {
  return (
    <SectionContainer>
      <SectionTitle text={props.title} id="features" />
      <FeaturesContainer>
        <FeatureContainer
          justifyContent={"flex-start"}
          data={featureCards[0]}
        />
        <FeatureContainer data={featureCards[1]} />
        <FeatureContainer justifyContent={"flex-end"} data={featureCards[2]} />
      </FeaturesContainer>
    </SectionContainer>
  );
}

SectionFeatures.propTypes = {
  title: PropTypes.string
};

SectionFeatures.defaultProps = {
  title: "Features"
};

export default SectionFeatures;
