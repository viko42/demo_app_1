import React from "react";
import PropTypes from "prop-types";

import { SectionScheduleContainer, ScheduleContainer } from "./styled";
import SectionTitle from "../../components/Sections/Title";

function SectionSchedule(props) {
  return (
    <SectionScheduleContainer>
      <SectionTitle text={props.title} color={"inherit"} id="schedule" />
      <ScheduleContainer>
        <span>
          Schedule a call and we'll show you how you could become a
          design-to-code rockstar using VanGoux.
        </span>
        <button>Schedule a call with us</button>
      </ScheduleContainer>
    </SectionScheduleContainer>
  );
}

SectionSchedule.propTypes = {
  title: PropTypes.string
};

SectionSchedule.defaultProps = {
  title: "Don’t know how to work with code?"
};

export default SectionSchedule;
