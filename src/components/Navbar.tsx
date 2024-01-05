import { useState } from "react";

interface Props {
  sections: string[];
}

function Navbar({ sections }: Props) {
  const [currSection, setCurrSection] = useState(-1);

  return (
    <>
      <nav
        id="navbar"
        className="nav flex-column m-5 fs-4"
        style={{ fontFamily: "Syne" }}
      >
        <h1 className="m-0 display-2 fw-bold pb-2">grace do</h1>
        {sections.map((sections, index) => (
          <a
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
      </nav>
    </>
  );
}

export default Navbar;
