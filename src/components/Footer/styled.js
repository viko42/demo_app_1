import styled from "styled-components";
import screensSize from "../screens";

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 130px;
  justify-content: space-between;
  align-items: center;
  background-color: #fbfbfb;
  overflow: hidden;
  @media (max-width: ${screensSize.medium}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  width: 250px;
  height: 50px;
  object-fit: contain;
  flex: 1;
  @media (max-width: ${screensSize.medium}) {
    margin: 10px;
  }
`;
export const Links = styled.ul`
  flex: 2;
  display: flex;
  justify-content: center;
  @media (max-width: ${screensSize.small}) {
    flex-direction: column;
    padding: 0px;
  }
  list-style-type: none;
  li {
    padding: 15px 0px;
    width: 130px;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
    user-select: none;
    &:hover {
      background-color: #eceff7;
      cursor: pointer;
    }
    &:active {
      background-color: #dbdde4;
    }
  }
`;
export const FaceImg = styled.img`
  flex: 1;
  width: 90px;
  height: 100px;
  object-fit: contain;
  margin-top: 30px;
  @media (max-width: ${screensSize.medium}) {
    display: inherit;
  }
  @media (min-width: ${screensSize.medium}) and (max-width: ${screensSize.large}) {
    display: none;
  }
`;
