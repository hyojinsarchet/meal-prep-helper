import React, { Component } from "react";
import "./Ingredients.css";
import Forms from "./Forms";
import Tables from "./Tables";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import injectTapEventPlugin from "react-tap-event-plugin";

// injectTapEventPlugin();

class Ingredients extends Component {
  state = {
    data: [],
    editIdx: -1
  };

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((x, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      data: state.data.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="Ingredients">
          <h2 className="ingredient-title">Shopping List</h2>
          <p>- Add the ingredients you need to buy for upcoming week!</p>
          <div className="forms-tables">
            <Forms
              onSubmit={submission =>
                this.setState({
                  data: [...this.state.data, submission]
                })
              }
            />
            <hr />
            <Tables
              handleRemove={this.handleRemove}
              startEditing={this.startEditing}
              editIdx={this.state.editIdx}
              handleChange={this.handleChange}
              stopEditing={this.stopEditing}
              data={this.state.data}
              header={[
                {
                  name: "Ingredient",
                  prop: "ingredient"
                }
              ]}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Ingredients;
