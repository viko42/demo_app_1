import React from "react";
import PropTypes from "prop-types";

import { SectionContainer, JobsContainer } from "./styled";
import SectionTitle from "../../components/Sections/Title";
import CardContainer from "../../components/Card/Container";
import JobsCard from "../../components/Card/Jobs";

import { jobCards } from "../../data";

function SectionJobs(props) {
  return (
    <SectionContainer>
      <SectionTitle text={props.title} id="jobs" />
      <JobsContainer>
        {jobCards.map((data, key) => (
          <CardContainer xs={12} sm={12} md={12} lg={6} xlg={4} key={key}>
            <JobsCard {...data} />
          </CardContainer>
        ))}
      </JobsContainer>
    </SectionContainer>
  );
}

SectionJobs.propTypes = {
  title: PropTypes.string
};

SectionJobs.defaultProps = {
  title: "Who is VanGoux for"
};

export default SectionJobs;
