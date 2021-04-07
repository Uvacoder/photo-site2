import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./Navigation.css";
import logo from "../../logo.png";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const html = document.documentElement;
    html.classList.toggle("is-active");

    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("is-active");

    const mobileNav = document.querySelector(".mobile-nav");
    mobileNav.classList.toggle("is-active");
  }

  render() {
    return (
      <nav id="navContainer">
        <span>
          <Link to="/">
            <img src={logo} alt="logo" id="logo" />
          </Link>
        </span>
        <button
          className="hamburger hamburger--collapse"
          type="button"
          onClick={this.toggle}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <span className="center-span">Capturing the emotions of the Earth</span>

        <span className="right-span">
          <NavLink className="item" activeClassName="active" to="/nostalgia">
            Nostalgia
          </NavLink>
          <NavLink className="item" activeClassName="active" to="/joy">
            Joy
          </NavLink>
          <NavLink className="item" activeClassName="active" to="/despair">
            Despair
          </NavLink>
          <NavLink className="item" activeClassName="active" to="/tranquility">
            Tranquility
          </NavLink>
          <NavLink className="item" activeClassName="active" to="/about">
            About
          </NavLink>
        </span>
        <div className="mobile-nav">
          <div className="mobile-items">
            <NavLink
              className="item"
              activeClassName="active"
              to="/nostalgia"
              onClick={this.toggle}
            >
              Nostalgia
            </NavLink>
            <NavLink
              className="item"
              activeClassName="active"
              to="/joy"
              onClick={this.toggle}
            >
              Joy
            </NavLink>
            <NavLink
              className="item"
              activeClassName="active"
              to="/despair"
              onClick={this.toggle}
            >
              Despair
            </NavLink>
            <NavLink
              className="item"
              activeClassName="active"
              to="/tranquility"
              onClick={this.toggle}
            >
              Tranquility
            </NavLink>
            <NavLink
              className="item"
              activeClassName="active"
              to="/about"
              onClick={this.toggle}
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}
