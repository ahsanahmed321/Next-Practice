import Navbar from "./navbar";
import Head from "next/head";
import { Button } from "reactstrap";
import setAuthToken from "../utils/set-auth-token";

const layout = props => {
  var loggedIn = false;

  if (typeof window !== "undefined") {
    if (localStorage.getItem("token")) {
      var token = localStorage.getItem("token");
      setAuthToken(token);
      loggedIn = true;
    }
  }

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />
      </Head>
      <Navbar loggedIn={loggedIn} />
      <div className="container">{props.children}</div>
    </div>
  );
};
export default layout;
