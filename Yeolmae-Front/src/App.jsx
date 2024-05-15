import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Main from './components/MainPage/MainPage';
import PostList from './components/PostListPage/PostListPage';
import Signup from './components/SignupPage/SignupPage';
import Login from './components/LoginPage/LoginPage';
import Notfound from './components/NotFound/NotFound';
import Header from './components/Common/Header';
import NotoSans from './fonts/NotoSansKR-Regular.woff';

const theme = createTheme({
  typography: {
    fontFamily: 'NotoSans'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'NotoSans';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: url(${NotoSans}) format('woff');
        }
      `
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div>
        {/* 페이지 경로 표시 */}
        <Link to="/">메인 홈</Link>
        <Link to="/postlistPage">게시글 목록</Link>
        <Link to="/signupPage">회원가입페이지</Link>
        <Link to="/loginPage">로그인페이지</Link>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/postlistPage" element={<PostList />} />
        <Route path="/signupPage" element={<Signup />} />
        <Route path="/loginPage" element={<Login />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
