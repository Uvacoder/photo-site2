import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./hamburgers.css";

export const StyledNav = styled.nav`
  margin: 1.5vw auto;
  padding-right: 3vw;
  padding-left: 3vw;
  width: 90%;
  display: inline-flex;
  align-items: center;
  color: #a6a6a6;
  font-size: 16px;
  @media only screen and (max-width: 650px) {
    width: 80%;
    margin-top: 10%;
    display: block;
  }
`;
export const StyledHamburger = styled.button`
  display: none;
  @media only screen and (max-width: 650px) {
    display: inline;
    float: right;
  }
`;
const activeClassName = "active";
export const StyledNavLink = styled(NavLink).attrs({
  activeClassName: activeClassName,
})`
  margin-left: 12px;
  text-decoration: none;
  color: #a6a6a6;
  &:visited {
    color: #a6a6a6;
  }

  &:hover,
  &.${activeClassName} {
    color: #333;
  }
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

export const StyledNavLogo = styled.img`
  max-width: 210px;
  @media only screen and (max-width: 650px) {
    max-width: 100px;
  }
`;

export const StyledLeftSpan = styled.span``;

export const StyledCenterSpan = styled.span`
  margin: 0 auto;
  @media only screen and (max-width: 650px) {
    margin-top: 20px;
    display: block;
    font-size: 16px;
  }
`;

export const StyledRightSpan = styled.span``;
