import logo from './Tiki.png';
import './App.css';

const inline = {
  maxWidth: "100vw"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" style={inline}  />
      </header>
    </div>
  );
}

export default App;
