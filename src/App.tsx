import { useEffect, useRef, useState } from "react";
import resume from '../public/Do_Grace_resume.pdf';

import Hero from "./components/Hero";
import Art from "./components/Art";
import Software from "./components/Software";
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

interface SpotifyTrackResponse {
  isPlaying: boolean;
  title: string;
  artist: string;
  songUrl: string;
}

async function updateSpotifyStatus(): Promise<void> {
  const ticker = document.getElementById('spotify-ticker');
  const link = document.getElementById('spotify-link') as HTMLAnchorElement | null;

  if (!ticker || !link) return;

  try {
    const response = await fetch('/api/spotify');
    const data: SpotifyTrackResponse = await response.json();

    link.href = data.songUrl || 'https://open.spotify.com';

    const label = data.isPlaying ? '🔊 Listening to' : '🎧 Last song I listened to';
    const content = `${label} → <strong>${data.title}</strong> by <em>${data.artist}</em>`;
    ticker.innerHTML = `<span class="spotify-text">${content}</span>`;
  } catch (error) {
    console.error('Error loading Spotify status:', error);
    ticker.textContent = 'Spotify status unavailable';
  }
}

function App() {
  const fullpageRef = useRef<any>(null);
  const isTransitioning = useRef(false);
  const transitionTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [nightMode, setNightMode] = useState(() => {
    if (typeof window === "undefined") return true;

    const savedMode = window.localStorage.getItem("nightMode");
    return savedMode === null ? true : savedMode === "true";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("nightMode", String(nightMode));
    }
  }, [nightMode]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      void updateSpotifyStatus();
    });

    const intervalId = window.setInterval(() => {
      void updateSpotifyStatus();
    }, 5000);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!fullpageRef.current?.slides?.length) return;
      if (isTransitioning.current) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;
      if (Math.abs(delta) < 20) return;

      e.preventDefault();

      const current = fullpageRef.current.state.number ?? 0;
      const total = fullpageRef.current.slides.length;
      const next = delta > 0 ? Math.min(current + 1, total - 1) : Math.max(current - 1, 0);

      if (next === current) return;

      isTransitioning.current = true;
      fullpageRef.current.goto(fullpageRef.current.slides[next]);

      if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
      transitionTimeout.current = setTimeout(() => {
        isTransitioning.current = false;
      }, 700);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
    };
  }, []);

  const backgroundColor = nightMode ? "#111" : "#e6e6e6";
  const color = nightMode ? "#A8FFB0" : "#52d45f";

  return (
    <div
      className={`app-container${nightMode ? " night-mode" : ""}`}
      style={{
        backgroundColor,
        minHeight: "100dvh", // Use 100dvh to account for mobile browser UI
        overflow: "hidden", // Prevent scrolling issues
        transition: "background 0.3s, color 0.3s",
        color,
      }}
    >
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 2000,
          background: nightMode ? "#fff" : "#111",
          color: nightMode ? "#111" : "#fff",
          border: "none",
          borderRadius: "1.5rem",
          padding: "0.25rem 0.75rem",
          fontSize: "0.95rem",
          fontWeight: 600,
          fontFamily: "'Lexend', 'Space Grotesk', Arial, sans-serif",
          textDecoration: "none",
          boxShadow: "0 2px 8px #0002",
          transition: "background 0.3s, color 0.3s",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.4em"
        }}
      >
        Resume
      </a>
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
      ></label>
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
      >
        <FullpageNavigation className="NavigationDots" 
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