import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Router } from "react-router";

// import { HashLink as Link } from "react-router-hash-link";

import "./App.css";
import Header from "../Header/Header";
import Suggestion from "../Suggestion/Suggestion";
import Plan from "../Plan/Plan";
import Ingredients from "../Ingredients/Ingredients";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      // <Router>
      //   <div className="App">
      //     <Header />
      //     <Switch>
      //       <Route exact path="/" component={Suggestion} />
      //       <Route path="/plan" component={Plan} />
      //       <Route path="/ingredients" component={Ingredients} />
      //     </Switch>
      //     <Footer />
      //   </div>
      // </Router>
      <div className="App">
        <Header />
        <Suggestion />
        <Plan />
        <Ingredients />
        <Footer />
      </div>
    );
  }
}

export default App;
