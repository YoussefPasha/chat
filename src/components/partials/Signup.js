import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="form-wrapper">
              <h1>Signup</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (this.props.socket) {
                    this.props.socket.send(
                      JSON.stringify({
                        type: "SIGNUP",
                        data: {
                          email: this.state.email,
                          password: this.state.password,
                        },
                      })
                    );
                  }
                }}
              >
                
                <div className="form-group">
                  <label>ُEmail</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  ></input>
                </div>
                <button className="btn btn-primary" type="submit">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.auth,
  ...state.chat,
});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
