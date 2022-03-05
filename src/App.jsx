import { Routes, Route } from 'react-router-dom';

import CommunityList from 'pages/Community/List';
import LoginPage from 'pages/Login';
import MainPage from 'pages/Main';
import RegisterPage from 'pages/Register';
import SearchPage from 'pages/Search';
import GlobalStyle from 'styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/community" element={<CommunityList />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default App;
