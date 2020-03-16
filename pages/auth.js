import axios from "axios";
import { useState } from "react";
import Layout from "../components/layout";
import setAuthToken from "../utils/set-auth-token";

const signup = () => {
  const [state, setState] = useState("");

  var onChangeAddHandler = e => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

  var onSignupHandler = () => {
    axios
      .post("http://localhost:5000/auth/signup", state)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  var onSigninHandler = () => {
    axios
      .post("http://localhost:5000/auth/signin", state)
      .then(res => {
        var token = "Bearer " + res.data;
        console.log(token);
        localStorage.setItem("token", token);
        setAuthToken(token);
        console.log(axios.defaults.headers.common["Authorization"]);
      })
      .catch(err => console.log(err));
  };

  return (
    <Layout>
      <label>Username</label>
      <input
        onChange={e => onChangeAddHandler(e)}
        name="username"
        type="text"
      ></input>
      <label>Password</label>
      <input
        onChange={e => onChangeAddHandler(e)}
        name="password"
        type="text"
      ></input>
      <button onClick={onSignupHandler}>Sign Up</button>
      <button onClick={onSigninHandler}>Sign In</button>
    </Layout>
  );
};

export default signup;
