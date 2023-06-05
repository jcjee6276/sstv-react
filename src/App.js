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
  const Chat = loadable(()=> import('./pages/Chat'))
  const Test = loadable(()=> import('./pages/Chat/chatList'))
  const AddUser = loadable(()=> import('./pages/user/addUser'))
  const SendSMS = loadable(()=> import('./pages/user/sendSMS'))
  const RmUser = loadable(()=> import('./pages/user/removeUser'))
  const UpdateUser = loadable(()=> import('./pages/user/updateUser'))
  // const LoadingPage = loadable(()=> import('./pages/LoadingPage'))
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
        <Route path="/Chat" element={<Chat/>} />
        <Route path="/Test" element={<Test/>} />
        <Route path="/addUser" element={<AddUser/>} />
        <Route path="/sendSMS" element={<SendSMS/>} />
        <Route path='/remove' element={<RmUser/>} />
        <Route path='/updateUser' element={<UpdateUser/>} />
        {/* <Route path="/LoadingPage" element={<LoadingPage/>} /> */}
      </Routes>
    </Router>
    
  );
}

export default App;
