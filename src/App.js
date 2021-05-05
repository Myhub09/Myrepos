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
import { Switch, Route, useLocation } from "react-router-dom";

// Animation
import { AnimatePresence } from "framer-motion"; // AnimatePresence détecte lorsqu'il y a un changement de page et permet de faire une animation de sortie sur les élements.

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
      <FooterSection />
    </div>
  );
}

export default App;
