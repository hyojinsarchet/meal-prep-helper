import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Suggestion from "../Suggestion/Suggestion";
// import Plan from "../Plan/Plan";
import Ingredients from "../Ingredients/Ingredients";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Suggestion />
        {/* <Plan /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
