import React, { Component } from "react";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import Card from "material-ui/Card";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export class TimeSlot extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <AppBar title="Select Your time Slot" />
        <div className="wraper">
          <Card zDepth={3} style={styles.cardStyle} className="card">
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
              <RadioButton
                value="light"
                label="10:00 - 10:30 AM"
                style={styles.radioButton}
              />
            </RadioButtonGroup>
            <RadioButtonGroup>
              <RadioButton
                value="light"
                label="10:30 - 11:00 AM"
                style={styles.radioButton}
              />
            </RadioButtonGroup>
            <RadioButtonGroup>
              <RadioButton
                value="light"
                label="11:00 - 11:30 AM"
                style={styles.radioButton}
              />
            </RadioButtonGroup>
          </Card>
        </div>
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={this.continue}
        />
        <FlatButton
          label="Back"
          primary={false}
          style={styles.button}
          onClick={this.back}
        />
      </MuiThemeProvider>
    );
  }
}

const styles = {
  block: {
    maxWidth: 250
  },
  radioButton: {
    marginBottom: 16
  },
  cardStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative",
    width: 500,
    margin: 20
  }
};
export default TimeSlot;
