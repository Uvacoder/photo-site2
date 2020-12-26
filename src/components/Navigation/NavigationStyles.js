import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  margin: 1.5vw auto;
  padding-right: 3vw;
  padding-left: 3vw;
  width: 90%;
  display: inline-flex;
  align-items: center;
  color: #a6a6a6;
  font-size: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  margin-left: 12px;
  text-decoration: none;
  &:visited {
    color: #a6a6a6;
  }
  &:hover,
  :active {
    color: #333;
  }
`;

export const StyledNavLogo = styled.img`
  max-width: 210px;
`;

export const StyledLeftSpan = styled.span``;

export const StyledCenterSpan = styled.span`
  margin: 0 auto;
`;

export const StyledRightSpan = styled.span``;
