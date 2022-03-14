import { Routes, Route } from 'react-router-dom';

import ComunityCreate from 'pages/Community/Create';
import CommunityDetail from 'pages/Community/Detail';
import CommunityList from 'pages/Community/List';
import CommunityUpdate from 'pages/Community/Update';
import JobCreate from 'pages/JobCommunity/Create';
import JobDetail from 'pages/JobCommunity/Detail';
import JobList from 'pages/JobCommunity/List';
import JobUpdate from 'pages/JobCommunity/Update';
import LoginPage from 'pages/Login';
import MainPage from 'pages/Main';
import QnACreate from 'pages/QnaCommunity/Create';
import QnaDetail from 'pages/QnaCommunity/Detail';
import QnAList from 'pages/QnaCommunity/List';
import QnAUpdate from 'pages/QnaCommunity/Update';
import RegisterPage from 'pages/Register';
import SearchPage from 'pages/Search';
import StudyCreate from 'pages/StudyCommunity/Create';
import StudyDetail from 'pages/StudyCommunity/Detail';
import StudyList from 'pages/StudyCommunity/List';
import StudyUpdate from 'pages/StudyCommunity/Update';
import GlobalStyle from 'styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/write" element={<ComunityCreate />} />
        <Route path="/Board/detail/:setid" element={<CommunityDetail />} />
        <Route path="/Board" element={<CommunityList />} />
        <Route path="/putndelete/:setid" element={<CommunityUpdate />} />
        <Route path="/studyWrite" element={<StudyCreate />} />
        <Route path="/studyBoard/detail/:setid" element={<StudyDetail />} />
        <Route path="/studyBoard" element={<StudyList />} />
        <Route path="/studyUpdate/:setid" element={<StudyUpdate />} />
        <Route path="/jobWrite" element={<JobCreate />} />
        <Route path="/jobBoard/detail/:setid" element={<JobDetail />} />
        <Route path="/jobBoard" element={<JobList />} />
        <Route path="/jobUpdate/:setid" element={<JobUpdate />} />
        <Route path="/qnaWrite" element={<QnACreate />} />
        <Route path="/qnaBoard/detail/:setid" element={<QnaDetail />} />
        <Route path="/qnaBoard" element={<QnAList />} />
        <Route path="/qnaUpdate/:setid" element={<QnAUpdate />} />
      </Routes>
    </>
  );
};

export default App;
