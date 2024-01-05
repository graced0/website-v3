import Navbar from "./components/Navbar";
import { useWindowSize } from "@uidotdev/usehooks";

function App() {
  const windowSize = useWindowSize();
  let navNames = ["résumé", "visual media", "projects"];

  return (
    <>
      <div>
        <body className="position-relative">
          <div className="position-fixed bg-white h-100 shadow-lg">
            <Navbar sections={navNames} />
          </div>
          <div
            id="résumé"
            className="m-0 bg-info bg-opacity-50"
            style={{ height: windowSize.height }}
          >
            hey, my name is grace do.
          </div>
          <div
            id="visual media"
            className="m-0 bg-secondary bg-opacity-10"
            style={{ height: windowSize.height }}
          >
            hey, my name is grace do.
          </div>
          <div
            id="projects"
            className="m-0 bg-success bg-opacity-50"
            style={{ height: windowSize.height }}
          >
            hey, my name is grace do.
          </div>
        </body>
      </div>
    </>
  );
}

export default App;
