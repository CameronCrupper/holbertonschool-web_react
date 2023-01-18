import logo from './HolbertonLogo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </header>
      <body className="App-body">
        <p>
          Login to access the full dashboard
        </p>
      </body>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(1)}
        </p>
      </footer>
    </div>
  );
}

export default App;
