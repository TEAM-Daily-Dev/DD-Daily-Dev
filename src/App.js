import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, LoginPage, DetailPage, SearchPage } from 'pages';
import Create from './components/Board-Crud/Create';
import Update from './components/Board-Crud/Update';
import Read from './components/Board-Crud/Read';
import EditReply from './components/reply/EditReply';
import axios from 'axios';
import MainCommunity from 'components/Board-View/MainCommunity';

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
      <Route path="/write" element={<Create newDatas={newDatas} setNewDatas={setNewDatas} fetchData={fetchData}></Create>}></Route>
      <Route path="/putndelete/:setid" element={<Update newDatas={newDatas} fetchData={fetchData} loaDing={loaDing} setLoaDing={setLoaDing}></Update>}></Route>
      <Route path='/:setid' element={<Read fetchData={fetchData} newDatas={newDatas}></Read>}></Route>
      <Route path='/edit/:setid' element={<EditReply></EditReply>}></Route>
      <Route path='/Board' element={<MainCommunity newDatas={newDatas} fetchData={fetchData}></MainCommunity>}></Route>
    </Routes>
  );
}

export default App;
