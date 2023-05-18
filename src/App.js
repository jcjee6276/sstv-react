import React from 'react';
import loadable from '@loadable/component';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';

const App= ()=> {
  const LogIn = loadable(() => import('./pages/LogIn'));
  const Community = loadable(() => import('./pages/Community'));
  const Mainpage = loadable(() => import('./pages/Mainpage'));
  const SignUp = loadable(() => import('./pages/SignUp'));
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />}/>
        <Route path="/Community" element={<Community />}/>
        <Route path="/Login" element={<LogIn />}/>
        <Route path="/SignUp" element={<SignUp />}/>
      </Routes>
    </Router>
    
  );
}

export default App;
