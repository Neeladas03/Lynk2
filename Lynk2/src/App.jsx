import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Feed from './feed/Feed';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='forgot-password' element={<ForgotPassword/>}/>
      <Route path='feed' element={<Feed/>}/>
      </Routes>
    </Router>
  );
};

export default App;
  