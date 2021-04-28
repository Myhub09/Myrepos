import React from "react";

// Global Style
import GlobalStyle from "./components/GlobalStyle.js";

// Import Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import PortfolioDetail from "./pages/PortfolioDetail";

// Import Nav & Footer
import Nav from "./components/Nav";
import FooterSection from "./components/Footer";

// Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
        <Route path="/portfolio/:id">
          <PortfolioDetail />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <FooterSection />
    </div>
  );
}

export default App;
