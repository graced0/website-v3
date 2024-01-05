import { useState } from "react";

interface Props {
  sections: string[];
}

function Navbar({ sections }: Props) {
  const [currSection, setCurrSection] = useState(-1);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        fontFamily: "Syne",
      }}
      className="nav-text"
    >
      <h1 className="display-2 fw-bold">grace do</h1>
      <nav className="navbar-text navbar-default">
        <div className="nav flex-column fs-4 p-0">
          {sections.map((sections, index) => (
            <a
              href={"#" + sections}
              className={
                currSection === index
                  ? "nav-item link-offset-3 pt-3 link-dark"
                  : "nav-item link-offset-3-hover link-underline-dark link-underline-opacity-0 link-underline-opacity-25-hover pt-3 link-dark"
              }
              key={sections}
              onClick={() => setCurrSection(index)}
            >
              {sections}
            </a>
          ))}
        </div>
      </nav>
      <footer className="fs-5" style={{ marginTop: "auto" }}>
        © 2019 - 2024
      </footer>
    </div>
  );
}

export default Navbar;
