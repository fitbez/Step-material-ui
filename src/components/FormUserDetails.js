import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Card from "material-ui/Card";
import Divider from "material-ui/Divider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <div className="wraper">
            <Card zDepth={3} style={styles.cardStyle} className="card">
              <TextField
                hintText="Enter Your First Name"
                floatingLabelText="First Name"
                style={styles.textFieldStyle}
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
                underlineShow={false}
              />
              <Divider />
              <TextField
                hintText="Enter Your Last Name"
                floatingLabelText="Last Name"
                style={styles.textFieldStyle}
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
                underlineShow={false}
              />
              <Divider />
              <TextField
                hintText="Enter Your Email"
                floatingLabelText="Email"
                style={styles.textFieldStyle}
                onChange={handleChange("email")}
                defaultValue={values.email}
                underlineShow={false}
              />
            </Card>
          </div>
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
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
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative",
    width: 500,
    margin: 20
  },
  textFieldStyle: {
    margin: 20
  }
};
export default FormUserDetails;
