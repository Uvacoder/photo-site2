import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  StyledCenterSpan,
  StyledHamburger,
  StyledLeftSpan,
  StyledNav,
  StyledNavLink,
  StyledNavLogo,
  StyledRightSpan,
} from "./NavigationStyles";
import logo from "../../logo.png";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.collapse = this.collapse.bind(this);
  }

  collapse() {
    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("is-active");
  }

  render() {
    return (
      <StyledNav id="navContainer">
        <StyledLeftSpan>
          <Link to="/">
            <StyledNavLogo src={logo} alt="logo" />
          </Link>
        </StyledLeftSpan>
        <StyledHamburger
          className="hamburger hamburger--collapse"
          type="button"
          onClick={this.collapse}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </StyledHamburger>
        <StyledCenterSpan>Capturing the emotions of the Earth</StyledCenterSpan>

        <StyledRightSpan>
          <StyledNavLink
            className="item"
            activeClassName="active"
            to="/nostalgia"
          >
            Nostalgia
          </StyledNavLink>
          <StyledNavLink className="item" activeClassName="active" to="/joy">
            Joy
          </StyledNavLink>
          <StyledNavLink
            className="item"
            activeClassName="active"
            to="/despair"
          >
            Despair
          </StyledNavLink>
          <StyledNavLink
            className="item"
            activeClassName="active"
            to="/tranquility"
          >
            Tranquility
          </StyledNavLink>
          <StyledNavLink className="item" activeClassName="active" to="/about">
            About
          </StyledNavLink>
        </StyledRightSpan>
      </StyledNav>
    );
  }
}
