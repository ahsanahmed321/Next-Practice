import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../Store/actions/authActions";
import { Button } from "react-bootstrap";
class App extends React.Component {
  static getInitialProps({ store }) {}

  state = {};

  onChangeAddHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  constructor(props) {
    super(props);
  }

  render() {
    {
      console.log(this.state);
    }

    return (
      <div>
        <label>Username</label>
        <input
          name="username"
          onChange={e => this.onChangeAddHandler(e)}
          type="text"
        ></input>

        <label>Password</label>
        <input
          name="password"
          onChange={e => this.onChangeAddHandler(e)}
          type="text"
        ></input>

        <button onClick={() => this.props.loginUser(this.state)}>
          sign in
        </button>
        <Button variant="danger">hello</Button>
        <h1>{this.props.counter}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  loginUser: loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
