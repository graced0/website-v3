import Navbar from "./components/NavBar";

function App() {
  let navNames = ["visual media", "projects", "résumé"];

  return (
    <>
      <div className="fixed-top">
        <Navbar sections={navNames} />
      </div>
      <div>
        <body>
          <p className="pt-5 text-center bg-light">
            {" "}
            hey, my name is grace do.
          </p>
        </body>
      </div>
    </>
  );
}

export default App;
