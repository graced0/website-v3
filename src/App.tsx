import Hero from "./components/Hero";

function App() {
  return (
    <div className="app-container" style={{padding: '1rem'}}>
      <div className="rounded-5" style={{
        backgroundColor: '#B1DDAD',
      }}>
        <Hero />
      </div>
    </div>
  );
}

export default App;