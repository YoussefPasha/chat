import React from "react";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import auth from "./store/reducers";
function App() {
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

const mapStateToProps = (state) => ({
  ...state.auth,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(App);
