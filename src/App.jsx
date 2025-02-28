import React from "react";
import ScrollToTop from "./Components/ScrollToTop";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Home />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
