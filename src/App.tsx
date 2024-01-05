import Navbar from "./components/NavBar";

function App() {
  let navNames = ["visual media", "projects", "résumé"];

  return (
    <>
      <div className="position-fixed">
        <Navbar sections={navNames} />
      </div>
      <div>
        <body>
          <p
            className="m-0 text-center bg-secondary bg-opacity-10"
            style={{ paddingTop: "500px", paddingBottom: "500px" }}
          >
            hey, my name is grace do.
          </p>
          <p
            className="m-0 text-center bg-success bg-opacity-50"
            style={{ paddingTop: "500px", paddingBottom: "500px" }}
          >
            hey, my name is grace do.
          </p>
          <p
            className="m-0 text-center bg-info bg-opacity-50"
            style={{ paddingTop: "500px", paddingBottom: "500px" }}
          >
            hey, my name is grace do.
          </p>
        </body>
      </div>
    </>
  );
}

export default App;
