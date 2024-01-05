import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  let navNames = ["résumé", "visual media", "projects"];

  return (
    <>
      <div>
        <body>
          <div className="position-fixed bg-white h-100 shadow-lg">
            <Navbar sections={navNames} />
          </div>
          <div className="content-container">
            <Content />
          </div>
        </body>
      </div>
    </>
  );
}

export default App;
