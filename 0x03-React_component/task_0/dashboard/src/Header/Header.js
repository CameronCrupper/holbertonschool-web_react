import logo from '../assets/holberton_logo.jpg';
import './Header.css';
import { getFooterCopy, getFullYear } from '../utils/utils.js'

function Header() {
  return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
  );
}


export default Header;
