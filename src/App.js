import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/dandan-09/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open-source
          </a>{" "}
          code by Daniella Gombor
        </footer>
      </div>
    </div>
  );
}

export default App;
