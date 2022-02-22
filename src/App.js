import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, LoginPage, DetailPage, SearchPage } from 'pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/detail' element={<DetailPage />} />
      <Route path='/search' element={<SearchPage />} />
    </Routes>
  );
}

export default App;
