import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import withLazyLoader from '../hoc/LazyLoader';
import "bootstrap/dist/css/bootstrap.css";

const LoginForm = React.lazy(() => import("./Login"));
const Header = React.lazy(() => import("./Header"));
const RegisterForm = React.lazy(() => import("./Register"));
const SampleForm = withLazyLoader(() => import("./SampleForm"));
const MultiFormFields = React.lazy(() => import("./MultiFormFields"));
const SampleComponent = React.lazy(() => import("./pubsub/SampleComponent"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading…</div>}>
      <div className="container">
        <Header />
      </div>
      <div className="container-fluid">
        <Switch>
          <Route path="/" exact component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/multiCheckbox" component={MultiFormFields} />
          <Route path="/dynamicForm" component={SampleForm} />
          <Route path="/pubsub" component={SampleComponent} />
        </Switch>
      </div>
    </Suspense>
  </BrowserRouter>
);

export default App;
