// import Main from "./Main";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigator from './components/Navigator';
import Discussion from './components/Discussion';
import Delete from './components/discussion/edit/Delete';
import Edit from './components/discussion/edit/Edit';

function App() {
  return (
    <Router>
      <BackgroundStyle className='App'>
        <Routes>
          <Route path='/' element={<Navigator />} />
          <Route path='/content' element={<Discussion />} />
          <Route path='/content/delete' element={<Delete />} />
          <Route path='/content/edit' element={<Edit />} />
        </Routes>
      </BackgroundStyle>
    </Router>
  );
}

const BackgroundStyle = styled.div`
  background-color: rgb(245, 245, 245);
  font-family: inherit;
  width: 1248px;
  margin: 0 auto;
`;

export default App;
