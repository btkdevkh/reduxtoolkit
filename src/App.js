import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Reduxtoolkit Exemple with todos list
        </p>
      </header>

      <Todos />
    </div>
  );
}

export default App;
