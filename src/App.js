import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, LoginPage, DetailPage, SearchPage } from 'pages';
import BoardCreate from './pages/Community/Create';
import Update from './pages/Community/Update';
import BoardDetail from './pages/Community/Detail';
import EditReply from './components/reply/EditReply';
import axios from 'axios';
import MainCommunity from 'pages/Community/List';

function App() {

  const [loaDing, setLoaDing] = useState(true);
  const [newDatas, setNewDatas] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios('http://localhost:8000/boards')
      const Data = await res.data;
      return setNewDatas(Data)
    }
    catch (err) {
      console.log(err.message);
    }
  }
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/detail' element={<DetailPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path="/write" element={<BoardCreate newDatas={newDatas} setNewDatas={setNewDatas} fetchData={fetchData}></BoardCreate>}></Route>
      <Route path="/putndelete/:setid" element={<Update newDatas={newDatas} fetchData={fetchData} loaDing={loaDing} setLoaDing={setLoaDing}></Update>}></Route>
      <Route path='/:setid' element={<BoardDetail fetchData={fetchData} newDatas={newDatas}></BoardDetail>}></Route>
      <Route path='/edit/:setid' element={<EditReply></EditReply>}></Route>
      <Route path='/Board' element={<MainCommunity newDatas={newDatas} fetchData={fetchData}></MainCommunity>}></Route>
    </Routes>
  );
}

export default App;
