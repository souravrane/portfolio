import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/portfolio";
import Timeline from "./components/Timeline";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="bg-white text-stone-900 min-h-screen font-inter max-w-5xl w-11/12 mx-auto">
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
