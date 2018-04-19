import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import "./Plan.css";

class Form extends Component {
  state = {
    day: "",
    dayError: "",
    mealType: "",
    mealTypeError: "",
    mealName: "",
    mealNameError: ""
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      dayError: "",
      mealTypeError: "",
      mealNameError: ""
    };

    if (this.state.day.length < 3) {
      isError = true;
      errors.dayError = "Day should be at least 3 characters.";
    }

    if (this.state.mealType.length < 3) {
      isError = true;
      errors.mealTypeError = "Meal Type should be at least 3 characters.";
    }

    if (this.state.mealName.length < 2) {
      isError = true;
      errors.mealNameError = "Meal Type should be at least 2 characters.";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      // clear form
      this.setState({
        day: "",
        dayError: "",
        mealType: "",
        mealTypeError: "",
        mealName: "",
        mealNameError: ""
      });
      this.props.onSubmit(this.state);
    }
  };
  render() {
    return (
      <form className="form">
        <TextField
          name="day"
          hintText="Day"
          floatingLabelText="Day"
          value={this.state.day}
          onChange={e => this.change(e)}
          errorText={this.state.dayError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="mealType"
          hintText="Meal Type"
          floatingLabelText="Meal Type"
          value={this.state.mealType}
          onChange={e => this.change(e)}
          errorText={this.state.mealTypeError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="mealName"
          hintText="Meal Name"
          floatingLabelText="Meal Name"
          value={this.state.mealName}
          onChange={e => this.change(e)}
          errorText={this.state.mealNameError}
          floatingLabelFixed
        />
        <br />
        <RaisedButton
          className="button"
          label="Submit"
          onClick={e => this.onSubmit(e)}
          primary
        />
      </form>
    );
  }
}

export default Form;
