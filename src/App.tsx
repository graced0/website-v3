import Hero from "./components/Hero";
import Art from "./components/Art";
import Software from "./components/Software";

function App() {
  return (
    <div className="app-container" style={{padding: '1rem'}}>
      <div className="rounded-5" style={{
        backgroundColor: '#B1DDAD',
      }}>
        <Hero />
        <Art />
        <Software />
      </div>
    </div>
  );
}

export default App;