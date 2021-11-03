import "./App.css";
import logo from "./logo.svg";

import { withTranslation } from "react-i18next";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <ScrollToTop>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </ScrollToTop>
      <Footer></Footer>
    </Router>
  );
}

export default withTranslation()(App);
