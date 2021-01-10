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
    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("is-active");
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
      </nav>
    );
  }
}
