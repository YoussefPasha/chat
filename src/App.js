import React, { Component } from "react";
import { Route, BrowserRouter, Switch, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as ChatActions from "./store/actions/chatActions";
import Auth from "./components/pages/Auth";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  componentDidMount() {
    this.props.setupSocket();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Auth}></Route>
            <Route path="/signup" component={Auth}></Route>
            <Route
              path="/"
              render={(props) => {
                if (!this.props.token) {
                  return <Redirect to="/login" />;
                } else {
                  return <h1>Root</h1>;
                }
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
