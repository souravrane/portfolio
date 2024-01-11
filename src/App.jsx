import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/portfolio";
import Timeline from "./components/Timeline";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App ">
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
