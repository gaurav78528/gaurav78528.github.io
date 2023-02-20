import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/contact/Contact";
import Project from "./components/project/Project";
import Tools from "./components/tools/Tools";
// import Resume from "./components/resume/Resume";
import "./app.css";
import GitHubStats from "./components/githubStats/GitHubStats";
// import GitHubCalendar from "react-github-calendar";

function App() {
  return (
    <div>
      <Navbar />
      <>
        <Home />
        <About />
        <Skills />
        <Tools />
        <Project />
        <GitHubStats />
        <Contact />
      </>
    </div>
  );
}

export default App;
