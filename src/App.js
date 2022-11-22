import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Daniella's Dictionary</header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/dandan-09/dictionary-project"
            target="_blank"
            rel="noreferrer"
            className="App-link"
          >
            Open-source code
          </a>{" "}
          by Daniella Gombor
        </footer>
      </div>
    </div>
  );
}

export default App;
