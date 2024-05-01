import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <div className="headerLeft">
        <Link to="/">로고</Link>
      </div>
      <div className="headerCenter" />
      <div className="headerRight">
        <Link to="/loginpage">로그인</Link>
      </div>
    </header>
  );
}

export default Header;
