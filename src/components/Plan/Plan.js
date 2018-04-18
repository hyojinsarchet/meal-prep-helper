import React, { Component } from "react";
import "./Plan.css";
import Form from "./Form";
import Table from "./Table";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

class Plan extends Component {
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
        <div className="Plan">
          <h2 className="plan-title">Weekly Meal Plan</h2>
          <Form
            onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]
              })
            }
          />
          <Table
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            handleChange={this.handleChange}
            stopEditing={this.stopEditing}
            data={this.state.data}
            header={[
              {
                name: "Day",
                prop: "day"
              },
              {
                name: "Meal Type",
                prop: "mealType"
              },
              {
                name: "Meal Name",
                prop: "mealName"
              }
            ]}
          />
          {/* <p>{JSON.stringify(this.state.fields, null, 2)}</p> */}
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Plan;

// I took this React Youtube classes to learn React Form and Table:
// https://www.youtube.com/watch?v=FDzF2nHUexQ&list=PLN3n1USn4xllZIJyrGvCu5ihs2GoMtk1Q
