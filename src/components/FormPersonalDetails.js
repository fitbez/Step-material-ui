import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Card from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import Calendar from "react-calendar";

export class FormPersonalDetails extends Component {
  state = {
    date: new Date()
  };

  onCahnge = date => this.setState({ date });

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Pick a Date" />

          <div className="wraper">
            <Card zDepth={3} style={styles.cardStyle} className="card">
              <Calendar onChange={this.onChange} value={this.state.date} />
            </Card>
          </div>
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15
  },
  cardStyle: {
    marginTop: 20
  }
};
export default FormPersonalDetails;
