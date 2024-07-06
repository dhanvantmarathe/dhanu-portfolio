import React from "react";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <div id="about">
      <About />
      </div>
   
      <div id="projects">
      <Projects />
     
     </div>
     <div id="contact">
     <Contact />
     </div>
      <Footer />
    </>
  );
}

export default Home;
