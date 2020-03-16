import Link from "next/link";
import setAuthToken from "../utils/set-auth-token";
import { useState } from "react";

const navbar = props => {
  const [Refresh, setRefresh] = useState("");

  const logoutHandler = () => {
    console.log(Refresh);
    localStorage.removeItem("token");
    setAuthToken();
    setRefresh({ Refresh: "refresh" });
    console.log(Refresh);
  };

  var user;
  props.loggedIn
    ? (user = (
        <a onClick={logoutHandler} className="nav-link">
          Logout
        </a>
      ))
    : (user = (
        <Link href="/auth">
          <a className="nav-link">Authentication</a>
        </Link>
      ));

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
      <div className="container">
        <a className="navbar-brand" href="#">
          Tasks
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/edit">
                <a className="nav-link">Edit</a>
              </Link>
            </li>
            <li className="nav-item">{user}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default navbar;
