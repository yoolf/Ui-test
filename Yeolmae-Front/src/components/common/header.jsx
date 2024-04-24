import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="Header">
      <div className="headerLeft">
        <Link to="/">로고</Link>
      </div>
      <div className="headerCenter" />
      <div className="headerRight">사용자명</div>
    </header>
  );
}

export default Header;
