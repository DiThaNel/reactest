import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Bootstrap
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages
import Index from "views/Index.js";
import AboutPage from "views/Pages/AboutPage.js";
import LandingPage from "views/Pages/LandingPage.js";
import ContactPage from "views/Pages/ContactPage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/index"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/contact-page"
          render={(props) => <ContactPage {...props} />}
        />
        <Route
          path="/about-page"
          render={(props) => <AboutPage {...props} />}
        />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
