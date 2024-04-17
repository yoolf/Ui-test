import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './components/mainPage/mainPage';
import Signup from './components/signupPage/signupPage';
import Notfound from './components/notFound/notFound';
import Button from './components/common/button';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signupPage" element={<Signup />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
