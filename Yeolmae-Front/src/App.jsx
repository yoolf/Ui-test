import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './components/mainPage/mainPage';
import Signup from './components/signupPage/signupPage';
import Notfound from './components/notFound/notFound';
import Button from './components/common/button';

function App() {
  return (
    <>
      열매
      <Button text="중복확인" />
    </>
  );
}

export default App;
