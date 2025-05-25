import { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import Art from "./components/Art";
import Software from "./components/Software";
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

function App() {
  const fullpageRef = useRef<any>(null);
  const isTransitioning = useRef(false);
  const [nightMode, setNightMode] = useState(true);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning.current) {
        e.preventDefault();
        return;
      }
      if (!fullpageRef.current) return;
      e.preventDefault();
      const current = fullpageRef.current.state.number || 0;
      const total = fullpageRef.current.slides.length;
      let next;
      if (e.deltaY > 0) {
        next = Math.min(current + 1, total - 1);
      } else {
        next = Math.max(current - 1, 0);
      }
      if (next !== current) {
        isTransitioning.current = true;
        fullpageRef.current.goto(fullpageRef.current.slides[next]);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const handleChange = () => {
    setTimeout(() => {
      isTransitioning.current = false;
    }, 600);
  };

const backgroundColor = nightMode ? "#111" : "#e6e6e6";
const color = nightMode ? "#A8FFB0" : "#52d45f";

  return (
    <div
      className={`app-container${nightMode ? " night-mode" : ""}`}
      style={{
        backgroundColor,
        minHeight: "100vh",
        transition: "background 0.3s, color 0.3s",
        color,
      }}
    >
      <label
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 2000,
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          userSelect: "none"
        }}
      >
        <input
          type="checkbox"
          checked={nightMode}
          onChange={() => setNightMode((v) => !v)}
          style={{ display: "none" }}
          aria-label="Toggle night mode"
        />
        <span
          style={{
            width: 44,
            height: 24,
            background: nightMode ? "#fff" : "#111",
            borderRadius: 24,
            position: "relative",
            transition: "background 0.3s, border 0.3s",
            marginRight: 8,
            display: "inline-block",
            border: `2px solid ${nightMode ? "#fff" : "#111"}`,
            boxSizing: "border-box"
          }}
        >
          <span
            style={{
              position: "absolute",
              left: nightMode ? 20 : 2,
              top: 1,
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: nightMode ? "#111" : "#fff",
              transition: "left 0.3s, background 0.3s",
              boxShadow: "0 1px 4px #0002"
            }}
          />
        </span>
        <span style={{
          fontSize: "1.2rem",
          color: nightMode ? "#fff" : "#111",
          fontWeight: 600
        }}>
          {nightMode ? "🌙" : "☀️"}
        </span>
      </label>
      <Fullpage
        ref={fullpageRef}
        scrollSensitivity={1}
        duration={600}
        onChange={handleChange}
      >
        <FullpageNavigation
          itemStyle={{
            backgroundColor: nightMode ? "#A8FFB0" : "#52d45f"
          }}
        />
        <FullPageSections>
          <FullpageSection style={{ padding: 0 }}>
            <Hero fullpageRef={fullpageRef} nightMode={nightMode}/>
          </FullpageSection>
          <FullpageSection style={{ padding: 0 }}>
            <Art />
          </FullpageSection>
          <FullpageSection style={{ padding: 0 }}>
            <Software nightMode={nightMode}/>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}

export default App;