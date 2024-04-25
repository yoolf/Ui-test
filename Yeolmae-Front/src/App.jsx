import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './components/mainPage/mainPage';
import Signup from './components/signupPage/signupPage';
import Login from './components/loginPage/loginPage';
import Notfound from './components/notFound/notFound';

function App() {
  return (
    <>
      <div>
        {/* 페이지 경로 표시 */}
        <Link to="/">메인 홈</Link>
        <Link to="/signupPage">회원가입페이지</Link>
        <Link to="/loginPage">로그인페이지</Link>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signupPage" element={<Signup />} />
        <Route path="/loginPage" element={<Login />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
