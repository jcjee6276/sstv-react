import React from 'react';
import loadable from '@loadable/component';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';

const App= ()=> {
  const LogIn = loadable(() => import('./pages/LogIn'));
  const Community = loadable(() => import('./pages/Community'));
  const Mainpage = loadable(() => import('./pages/Mainpage'));
  const SignUp = loadable(() => import('./pages/SignUp'));
  const Writing = loadable(()=> import('./pages/Community/Writing'));
  const WritingList = loadable(()=> import('./pages/Community/writingList'));
  const GetWriting = loadable(()=> import('./pages/Community/getWriting'));
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />}/>
        <Route path="/Community/:userId" element={<Community />}/>
        <Route path="/Login" element={<LogIn />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/Writing/:userId" element={<Writing />}/>
        <Route path="/WritingList/:userId" element={<WritingList/>}/>
        <Route path="/:writingNo/:userId" element={<GetWriting/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
