import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginForm from "./Login";
import Header from "./Header";
import RegisterForm from "./Register";
import SampleForm from "./SampleForm";
import MultiFormFields from "./MultiFormFields";
import "bootstrap/dist/css/bootstrap.css";

const App = props => (
  <BrowserRouter>
    <div className="container">
      <Header />
    </div>
    <div className="container-fluid">
      <Switch>
        <Route path="/" exact component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/multiCheckbox" component={MultiFormFields} />
        <Route path="/dynamicForm" component={SampleForm} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
