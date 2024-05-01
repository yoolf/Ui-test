import { Link } from 'react-router-dom';
import './Header.css';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

function Header() {
  return (
    <header className="Header">
      <div className="headerLeft">
        <StyledLink to="/">로고</StyledLink>
      </div>
      <div className="headerCenter" />
      <div className="headerRight">
        <StyledLink to="/loginpage">로그인</StyledLink>
      </div>
    </header>
  );
}

export default Header;
