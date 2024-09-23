import Hero from "./components/Hero";
import Art from "./components/Art";
import Software from "./components/Software";

function App() {
  return (
    <div className="app-container"style={{
      background: 'radial-gradient(circle, rgba(177,221,173,1) 30%, rgba(255,255,255,1) 100%)',
    }}>
      <Hero />
      <Art />
      <Software />
    </div>
  );
}

export default App;