import React, { Component } from "react";
import { Route, BrowserRouter, Switch, Link  , Redirect} from "react-router-dom";
import { connect } from "react-redux";
import * as ChatActions from "./store/actions/chatActions";
import Auth from './components/pages/Auth';
class App extends Component {
  componentDidMount() {
    this.props.setupSocket();
  }
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (this.props.socket) {
              this.props.socket.send(
                JSON.stringify({
                  type: "Hello",
                  date: "world",
                })
              );
            }
          }}
        >
          {" "}
          Send Message
        </button>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Auth}></Route>
            <Route path="/signup" component={Auth}></Route>
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
