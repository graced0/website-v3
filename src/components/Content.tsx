import "/src/style.css";
import About from "./About";
import VisualMedia from "./VisualMedia";
import Projects from "./Projects";



function Content() {
  return (
    <>
      <div id="about" 
        className="off-white" 
        style={{ minHeight: "100vh"}}
      >
        <About />
      </div>
      <div
        id="visual media"
        className="purple"
        style={{ minHeight: "100vh" }}
      >
        <VisualMedia />
      </div>
      <div
        id="projects"
        className="green"
        style={{ minHeight: "100vh" }}
      >
        <Projects />
      </div>
    </>
  );
}

export default Content;
