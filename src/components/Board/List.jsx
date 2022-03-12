/*eslint-disable */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageNum from '../Pagination';
import axios from 'axios';
import styled from 'styled-components';
import Aside from 'layouts/BaseLayout/Aside';
import Footer from 'layouts/BaseLayout/Footer';
import Header from 'layouts/BaseLayout/Header';

const BoardList = ({ boardUrl, detailUrl, createUrl }) => {
  const [newDatas, setNewDatas] = useState([]);
  const [checkTrue, setcheckTrue] = useState(true);
  const [searchData, setSearchData] = useState('');

  useEffect(() => {
    if (searchData === '') {
      fetchData();
    }
  }, [searchData]);

  const fetchData = async () => {
    try {
      const res = await axios(boardUrl);
      const Data = await res.data;
      return setNewDatas(Data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const changeList = (e) => {
    e.preventDefault();

    const inputData = searchData.toLowerCase().trim();

    const searchedData = newDatas.reduce((accumulated, current) => {
      const result = [...accumulated];
      const title = current.title.toLowerCase();
      const isContained = title.trim().includes(inputData);

      if (isContained) {
        result.push(current);
      }

      return result;
    }, []);

    setNewDatas(searchedData);

    if (searchedData.length === 0) {
      fetchData();
    }
  };

  const [userId, setUserId] = useState(``);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPage] = useState(10);
  const lastPost = currentPage * postPage;
  const firstPast = lastPost - postPage;
  const currentPosts = newDatas.slice(firstPast, lastPost);
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
    setUserId(sessionStorage.getItem('user_id'));
    fetchData();
  }, [currentPage, checkTrue]);

  return (
    <>
      <MainStyle>
        <div>
          <Header />
        </div>
        <DisplayFlex>
          <Full>
            <FirstDiv>
              <h2>커뮤니티</h2>
              <h3>All</h3>
            </FirstDiv>
            <SecondDiv>
              <form onSubmit={changeList}>
                <FirstInput placeholder="Serch..." value={searchData} onChange={(e) => setSearchData(e.target.value)} />
                <SerchButton>
                  <SerchA>검색</SerchA>
                </SerchButton>
              </form>
            </SecondDiv>
            <Table>
              <Thead>
                <tr>
                  <Th>번호</Th>
                  <Th>구분</Th>
                  <Th>제목</Th>
                  <Th>작성자</Th>
                  <Th>작성일</Th>
                  <Th>조회수</Th>
                </tr>
              </Thead>
              {currentPosts &&
                currentPosts.map((a, i) => {
                  return <Newli key={i} detailUrl={detailUrl} title={a.title} index={a.id} />;
                })}
            </Table>
            <LastDiv>
              <PageNum
                currentPage={currentPage}
                checkTrue={checkTrue}
                setcheckTrue={setcheckTrue}
                postPage={postPage}
                newDatas={newDatas}
                setCurrentPage={setCurrentPage}
              />
              <Link to={`/${createUrl}`}>
                <SerchButton>{userId && <ButtonA href="#">글쓰기</ButtonA>}</SerchButton>
              </Link>
            </LastDiv>
          </Full>
        </DisplayFlex>
      </MainStyle>
      <div>
        <Footer />
      </div>
    </>
  );
};

function Newli({ title, index, detailUrl }) {
  let [newindex, setNewIndex] = useState(`${index}`);

  return (
    <Tbody>
      <tr>
        <Td>{index}</Td>
        <Td>7</Td>
        <Td>
          <Link to={`/${detailUrl}/detail/${newindex}`}>{title}</Link>
        </Td>
        <Td>user</Td>
        <Td>data</Td>
        <Td>1</Td>
      </tr>
    </Tbody>
  );
}
const MainStyle = styled.div`
  width: 100%;
  position: relative;
`;
Newli.defaultProps = {
  title: '[okky] Clone Coding 어렵지 않아요~!',
};

const DisplayFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;
const Full = styled.div`
  background-color: #f8f8f8;
  width: 70%;
`;
const FirstDiv = styled.div`
  padding-bottom: -10px;
`;
const SecondDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;
const FirstInput = styled.input`
  width: 200px;
  padding: 14px 10px;
  background-color: #f8f8f8;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  margin-right: 5px;
  outline: none;
  &::placeholder {
    font-size: 15px;
  }
`;
const SerchButton = styled.button`
  background-color: transparent;
  border: none;
`;
const SerchA = styled.a`
  border: 1px solid #6550ff;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 15px;
  color: black;
  font-weight: 800;
`;
const LastDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonA = styled.a`
  background-color: #6550ff;
  color: white;
  border: 1px solide #6550ff;
  border-radius: 3px;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 800;
`;

const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  margin-top: 15px;
`;
const Thead = styled.thead`
  background-color: #f4ecff;
  border-top: 2px solid #6550ff;
`;
const Th = styled.th`
  padding: 10px;
`;
const Tbody = styled.tbody`
  background-color: white;
`;
const Td = styled.td`
  border-bottom: 2px solid #f8f8f8;
  padding: 15px 10px;
`;

export default BoardList;
