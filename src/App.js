import React from "react";

// Global Style
import GlobalStyle from "./components/GlobalStyle.js";

// Import Pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
import FooterSection from "./components/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Home />
      <FooterSection />
    </div>
  );
}

export default App;
