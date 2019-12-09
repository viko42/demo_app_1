import React from "react";

import PropTypes from "prop-types";

import SectionSteps from "./section.Steps";
import SectionStory from "./section.Story";

import SectionSolutions from "./section.Solutions";
import SectionSchedule from "./section.Schedule";
import SectionJobs from "./section.Jobs";
import SectionFeatures from "./section.Features";
import { SectionsContainer } from "./styled";

class Sections extends React.Component {
  static Steps = SectionSteps;
  static Story = SectionStory;
  static Solutions = SectionSolutions;
  static Schedule = SectionSchedule;
  static Jobs = SectionJobs;
  static Features = SectionFeatures;

  render() {
    return <SectionsContainer>{this.props.children}</SectionsContainer>;
  }
}

Sections.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
};

export default Sections;
