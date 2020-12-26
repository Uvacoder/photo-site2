import { Link } from "react-router-dom";
import {
  StyledCenterSpan,
  StyledLeftSpan,
  StyledNav,
  StyledNavLink,
  StyledNavLogo,
  StyledRightSpan,
} from "./NavigationStyles";
import logo from "../../logo.png";

const Navigation = () => {
  return (
    <StyledNav id="navContainer">
      <StyledLeftSpan>
        <Link to="/">
          <StyledNavLogo src={logo} alt="logo" />
        </Link>
      </StyledLeftSpan>
      <StyledCenterSpan>Capturing the emotions of the Earth</StyledCenterSpan>
      <StyledRightSpan>
        <StyledNavLink className="item" to="/nostalgia">
          Nostalgia
        </StyledNavLink>
        <StyledNavLink className="item" to="/joy">
          Joy
        </StyledNavLink>
        <StyledNavLink className="item" to="/despair">
          Despair
        </StyledNavLink>
        <StyledNavLink className="item" to="/tranquility">
          Tranquility
        </StyledNavLink>
        <StyledNavLink className="item" to="/about">
          About
        </StyledNavLink>
      </StyledRightSpan>
    </StyledNav>
  );
};

export default Navigation;
