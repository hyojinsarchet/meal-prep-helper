import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="header-title">Meal Prep Helper</h1>
        <div className="header-links">
          {/* <Link
            to="/plan#plan"
            scroll={el =>
              el.scrollIntoView({ behavior: "instant", block: "end" })
            }
          >
            Plan
          </Link>
          <Link smooth to="/ingredients#ingredients">
            Ingredients
          </Link> */}

          {/* <Link to="/" className="header-home">
            Home
          </Link> */}
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

// trying to follow this 'react router hash link' but it's not working yet:
// https://github.com/rafrex/react-router-hash-link
