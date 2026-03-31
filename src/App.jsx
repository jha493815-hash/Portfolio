import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navabar from "./Component/Navbar";

import Hero from "./Component/Hero";
import About from "./Component/About";
import Resume from "./Component/Resume";
import Skills from "./Component/Skills";
import Project from "./Component/Project";
import Services from "./Component/Service";
import Contact from "./Component/Contact";

function App() {
  return (
  
      <div className="app">
        <Navabar />

        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="home"><Hero /></section>
                  <section id="about"><About /></section>
                  <section id="resume"><Resume /></section>
                  <section id="skills"><Skills /></section>
                  <section id="projects"><Project /></section>
                  <section id="services"><Services /></section>
                  <section id="contact"><Contact /></section>
                </>
              }
            />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
