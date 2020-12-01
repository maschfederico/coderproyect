import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Comenzando un nuevo proyecto...</code> 
        </p>
        <a
          className="App-link"
          href="https://github.com/maschfederico/coderproyect"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repo Fibo App
        </a>
      </header>
    </div>
  );
}

export default App;
