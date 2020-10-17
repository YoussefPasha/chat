import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import * as AuthActions from "../../store/actions/authActions";
import Login from "../partials/Login";
import Signup from "../partials/Signup";
class Auth extends Component {
  render() {
    return (
      <div>
        <div className="auth-wrapper">
          {this.props.match.params === "signup" ? <Signup /> : <Login />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.auth,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
