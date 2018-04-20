import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="header-title">Meal Prep Helper</h1>
        <div className="header-links">
          <Link to="/" className="header-home">
            Home
          </Link>
          <Link to="/plan" className="header-plan">
            Meal Plan
          </Link>
          <Link to="/ingredients" className="header-ingredients">
            Ingredients
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
