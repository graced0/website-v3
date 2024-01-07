import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  let navNames = ["about", "visual media", "projects"];

  return (
    <>
      <div>
        <body className="d-flex"> 
          <div className="bg-white">
            <Navbar sections={navNames} />
          </div>
          <div className="flex-grow-1 content-container"> 
            <Content />
          </div>
        </body>
      </div>
    </>
  );
}

export default App;