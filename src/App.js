import React from 'react';
import loadable from '@loadable/component';
import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import Ad from './pages/AdminComponents/ad';
import AdReq from './pages/AdminComponents/AdReq';
import Report from './pages/AdminComponents/report';
import AdminStreamingList from './pages/AdminComponents/adminStreamingList';
import AdminUserList from './pages/AdminComponents/adminUserList';
import StreamingBanList from './pages/AdminComponents/streamingBanList';
import StreamingRollBanList from './pages/AdminComponents/streamingRollBanList';

const App= ()=> {
  const LogIn = loadable(() => import('./pages/LogIn'));
  const Community = loadable(() => import('./pages/Community'));
  const Mainpage = loadable(() => import('./pages/Mainpage'));
  const SignUp = loadable(() => import('./pages/SignUp'));
  const Writing = loadable(()=> import('./pages/Community/Writing'));
  const WritingList = loadable(()=> import('./pages/Community/writingList'));
  const GetWriting = loadable(()=> import('./pages/Community/getWriting'));
  const Chat = loadable(()=> import('./pages/Chat'))
  const StreamerChat = loadable(()=> import('./pages/StreamerChat'));
  const Test = loadable(()=> import('./pages/SearchPage'));
  const LoadingPage = loadable(()=> import('./pages/LoadingPage'));
  const SearchKeyword = loadable(()=> import('./pages/SearchPage'));
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />}/>
        <Route path="/Home/:userId" element={<Community />}/>
        <Route path="/Login" element={<LogIn />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/Writing/:userId" element={<Writing />}/>
        <Route path="/WritingList/:userId" element={<WritingList/>}/>
        <Route path="/:writingNo/:userId" element={<GetWriting/>}/>
        <Route path="/Chat" element={<Chat/>} />
        <Route path="/StreamerChat" element={<StreamerChat/>} />
        <Route path="/Test" element={<Test/>} />
        {/* <Route path="/addUser" element={<AddUser/>} /> */}
        {/* <Route path="/sendSMS" element={<SendSMS/>} /> */}
        {/* <Route path='/remove' element={<RmUser/>} /> */}
        {/* <Route path='/updateUser' element={<UpdateUser/>} /> */}
        <Route path="/LoadingPage" element={<LoadingPage/>} />
        <Route exact path="/admin/ad" element={<Ad/>} />
        <Route exact path="/admin/adReq" element={<AdReq/>} />
        <Route exact path="/admin/report" element={<Report/>} />
        <Route exact path="/admin/adminStreamingList" element={<AdminStreamingList/>} />
        <Route exact path="/admin/adminUserList" element={<AdminUserList/>} />
        <Route exact path="/admin/streamingBanList" element={<StreamingBanList/>} />
        <Route exact path="/admin/streamingRollBanList" element={<StreamingRollBanList/>} />
        <Route path="/SearchKeyword/:search" element={<SearchKeyword/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
