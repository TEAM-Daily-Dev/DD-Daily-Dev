import { Routes, Route } from 'react-router-dom';

import ComunityCreate from 'pages/Community/Create';
import CommunityDetail from 'pages/Community/Detail';
import CommunityList from 'pages/Community/List';
import CommunityUpdate from 'pages/Community/Update';
import JobCreate from 'pages/JobComm/Create';
import JobDetail from 'pages/JobComm/Detail';
import JobList from 'pages/JobComm/List';
import JobUpdate from 'pages/JobComm/Update';
import LoginPage from 'pages/Login';
import MainPage from 'pages/Main';
import QnACreate from 'pages/QnaComm/Create';
import QnaDetail from 'pages/QnaComm/Detail';
import QnAList from 'pages/QnaComm/List';
import QnAUpdate from 'pages/QnaComm/Update';
import RegisterPage from 'pages/Register';
import SearchPage from 'pages/Search';
import StudyCreate from 'pages/StudyComm/Create';
import StudyDetail from 'pages/StudyComm/Detail';
import StudyList from 'pages/StudyComm/List';
import StudyUpdate from 'pages/StudyComm/Update';
import SubPage from 'pages/SubPage/SubPage';
import GlobalStyle from 'styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/community" element={<CommunityList />} /> */}
        <Route path="/community" element={<SubPage />} />
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
      {/* <Board /> */}
    </>
  );
};

// const Board = () => {
//   return (
//     <>
//       <Routes>
//       </Routes>
//       <Board />
//     </>
//   );
// };

export default App;
