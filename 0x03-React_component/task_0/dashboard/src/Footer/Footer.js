import logo from '../assets/holberton_logo.jpg';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils.js'

function Footer() {
  return (
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
  );
}

export default Footer;
