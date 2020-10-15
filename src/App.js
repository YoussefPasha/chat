import React, { Component } from "react";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as ChatActions from "./store/actions/chatActions";
class App extends Component {
  componentDidMount() {
    this.props.setupSocket();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              path="/login"
              render={(props) => {
                return <h1>Login</h1>;
              }}
            ></Route>
            <Route
              path="/"
              render={(props) => {
                return <h1>Root</h1>;
              }}
            ></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.auth,
  ...state.chat,
});
const mapDispatchToProps = (dispatch) => ({
  setupSocket: () => {
    dispatch(ChatActions.setupSocket());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
