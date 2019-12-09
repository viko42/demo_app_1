import styled from "styled-components";
import screensSize from "../../components/screens";
import CardContainer from "../../components/Card/Container";
import whiteGlove from "../../assets/images/illustration-whiteglove@2x-fs8.png";

const theme = {
  bgSchedule: "#1968fc",
  textWhite: "#ffffff",
  buttonText: "#1968fc",
  buttonText_hover: "#ccdeff",
  buttonText_active: "#8db5ff",

  storyText: "#111111"
};

export const ContainerStyled = styled.div``;

export const Testimonials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 0px 45px;
  @media (max-width: ${screensSize.medium}) {
    padding: 0px 15px;
    flex-direction: column;
  }
`;

export const SectionsContainer = styled.div`
  min-height: 100px;
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
`;
export const SectionContent = styled.div`
  min-height: 200px;
`;

/**
 * Sections
 */

export const SectionContainer = styled.div`
  padding: 20px 45px;
  box-sizing: border-box;

  @media (max-width: ${screensSize.medium}) {
    padding: 20px 15px;
  }
`;
export const SectionScheduleContainer = styled(SectionContainer)`
  background-color: ${theme.bgSchedule};
  color: ${theme.textWhite};
  padding: 45px;
  @media (max-width: ${screensSize.medium}) {
    padding: 0px 15px;
  }
  background-image: url(${whiteGlove});
  @media (max-width: ${screensSize.medium}) {
    background-image: unset;
  }
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  background-position-y: 10px;
`;
export const StepsContainer = styled(SectionContent)`
  display: flex;
  flex-direction: row;

  padding: 20px 0px;
  @media (max-width: ${screensSize.medium}) {
    flex-direction: column;
  }
`;
export const FeaturesContainer = styled(StepsContainer)``;

export const JobsContainer = styled(SectionContent)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const SolutionsContainer = styled(SectionContent)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 40px 0px;
`;
export const StoryContainer = styled(SectionContent)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  align-items: flex-start;
  padding-top: 25px;
  p {
    font-family: Muli;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: normal;
    color: #000000;
  }
`;

export const ScheduleContainer = styled(SectionContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  span {
    font-family: Muli;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    color: #ffffff;
    max-width: 50%;
    @media (max-width: ${screensSize.large}) {
      max-width: 75%;
    }
    @media (max-width: ${screensSize.medium}) {
      max-width: unset;
    }
    margin-bottom: 30px;
  }
  button {
    background-color: #ffffff;
    text-align: center;
    color: ${theme.buttonText};
    padding: 10px 45px;
    border: 0px;
    font-family: Muli;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-transform: uppercase;
    &:hover {
      cursor: pointer;
      background-color: ${theme.buttonText_hover};
    }
    &:active {
      background-color: ${theme.buttonText_active};
    }
  }
`;
export const CardContainerStory = styled(CardContainer)`
  flex-direction: column;

  div {
    display: flex;
    &:first-child {
      flex-direction: row;
      margin-bottom: 15px;
      img {
        width: 40px;
        height: 33px;
        margin-right: 20px;
      }
      span {
        display: flex;
        align-items: center;
        font-family: Muli;
        font-size: 20px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 2;
        letter-spacing: normal;
        color: ${theme.storyText};
      }
    }
    &:last-child {
      flex-direction: column;
      margin-left: 60px;
    }
  }
`;
