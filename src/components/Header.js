import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Header = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
      Login
    </Link>
    <Link className="navbar-brand" to="/register">
      Register
    </Link>
    <Link className="navbar-brand" to="/multiCheckbox">
      Multiple Field Array
    </Link>
    <Link className="navbar-brand" to="/dynamicForm">
      Dynamic Form
    </Link>
    <Link className="navbar-brand" to="/pubsub">
      PubSub Component
    </Link>
  </nav>
);

export default Header;
