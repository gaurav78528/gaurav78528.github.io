import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
