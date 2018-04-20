import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import "./App.css";
import Header from "../Header/Header";
import Suggestion from "../Suggestion/Suggestion";
import Plan from "../Plan/Plan";
import Ingredients from "../Ingredients/Ingredients";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Suggestion />
        <Plan />
        <Ingredients />
        <Footer />

        <Link
          to="/plan#plan"
          scroll={el =>
            el.scrollIntoView({ behavior: "instant", block: "end" })
          }
        >
          Plan
        </Link>
        <Link
          to="/ingredients#ingredients"
          scroll={el =>
            el.scrollIntoView({ behavior: "instant", block: "end" })
          }
        >
          Ingredients
        </Link>
      </div>
    );
  }
}

export default App;
