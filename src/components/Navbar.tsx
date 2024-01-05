import { useState } from "react";

interface Props {
  sections: string[];
}

function Navbar({ sections }: Props) {
  const [currSection, setCurrSection] = useState(-1);

  return (
    <>
      <h1>grace do</h1>
      <nav className="nav flex-lg-column float-start">
        {sections.map((sections, index) => (
          <a
            id={"#scrollspy" + index}
            href={"#scrollspy" + index}
            className={
              currSection === index
                ? "nav-item active link-offset-3"
                : "nav-item link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-25-hover"
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
