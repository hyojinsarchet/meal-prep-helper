import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="header-title">Meal Prep Helper</h1>
        <div className="header-links">
          <a href="#plan" className="header-plan">
            Meal Plan
          </a>
          <a href="#ingredients" className="header-ingredients">
            Ingredients
          </a>
        </div>
      </div>
    );
  }
}

export default Header;

// trying to follow this 'react router hash link' but it's not working yet:
// https://github.com/rafrex/react-router-hash-link
