import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class Forms extends Component {
  state = {
    ingredient: ""
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    // if (!err) {
    //   // clear form
    this.setState({
      ingredient: ""
    });
    this.props.onSubmit(this.state);
    // }
  };
  render() {
    return (
      <form>
        <TextField
          name="ingredient"
          hintText="Ingredient"
          floatingLabelText="Ingredient"
          value={this.state.ingredient}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}

export default Forms;
