import { useEffect, useState } from 'react';

import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Aside from 'layouts/BaseLayout/Aside';
import Footer from 'layouts/BaseLayout/Footer';
import Header from 'layouts/BaseLayout/Header';

import Profile from '../../assets/images/profile.png';
import Creply from '../Reply/Creply';

const BoardDetail = ({ boardUrl, replyUrl, updateUrl, preUrl }) => {
  const [newDatas, setNewDatas] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios(boardUrl);
      const Data = await res.data;
      setNewDatas(Data);
    } catch (err) {
      console.log(err.message);
    }
  };
  const { setid } = useParams();
  const [put, setPut] = useState(`/${updateUrl}/${setid}`);
  const navi = useNavigate();

  const removeText = () => {
    if (newDatas.length > 0) {
      if (window.confirm('삭제 하시겠습니까?')) {
        axios({
          method: 'DELETE',
          url: `${boardUrl}/${parseInt(setid, 10)}`,
        })
          .then(() => {
            alert('삭제되었습니다.');
            navi(`${preUrl}`);
          })
          .catch((err) => {
            return alert(err.message);
          });
      }
    }
  };
  const pre = () => {
    navi(-1);
  };

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
    fetchData();
  }, []);

  return (
    <>
      <MainStyle>
        <Header />
        <div />
        <DisplayFlex>
          <BackDiv>
            <HeaderDiv>
              <FirstDiv>
                <SecondDiv>
                  {newDatas.length > 1 && (
                    <HeaderH1>{newDatas.find((a) => parseInt(a.id, 10) === parseInt(setid, 10)).title}</HeaderH1>
                  )}
                </SecondDiv>
                <ThirdDiv>
                  <Link to={put}>
                    <ThirdDivA href="#">Edit</ThirdDivA>
                  </Link>
                  <ThirdDivA href="#" onClick={removeText}>
                    Delete
                  </ThirdDivA>
                  <ThirdDivA href="#" onClick={pre}>
                    Pre
                  </ThirdDivA>
                </ThirdDiv>
              </FirstDiv>
              <IDDiv>
                <ProfileImg src={Profile} />
                <IdPost>
                  <IdA href="#">sni424</IdA>
                  <PostPtag>Posted on 2월23일</PostPtag>
                </IdPost>
              </IDDiv>
              <LanguageTag>
                <LanguageA href="#" background_color="rgba(0, 0, 0, 0.1)">
                  <SharpSpan color="orange">#</SharpSpan>Java
                </LanguageA>
                <LanguageA href="#" background_color="green">
                  <SharpSpan color="green">#</SharpSpan>JavaScript
                </LanguageA>
                <LanguageA href="#" background_color="blue">
                  <SharpSpan color="blue">#</SharpSpan>Python
                </LanguageA>
              </LanguageTag>
              <ContentP>{newDatas.length > 0 && newDatas.find((x) => x.id === parseInt(setid, 10)).contents}</ContentP>
              <Hr />
              <Creply setid={setid} replyUrl={replyUrl} />
            </HeaderDiv>
          </BackDiv>
        </DisplayFlex>
      </MainStyle>
      <div>
        <Footer />
      </div>
    </>
  );
};
const MainStyle = styled.div`
  display: flex;
  width: 1248px;
  margin: 0 auto;
`;
const DisplayFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;
const BackDiv = styled.div`
  background-color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: 976px;
`;

const HeaderDiv = styled.div`
  background: #ffffff;
  padding: 50px;
  width: 976px;
`;
const FirstDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SecondDiv = styled.div`
  display: flex;
`;
const IDDiv = styled.div`
  display: flex;
`;
const ProfileImg = styled.img`
  border-radius: 70%;
  width: 40px;
  height: 40px;
`;
const IdPost = styled.div`
  padding-left: 10px;
`;
const IdA = styled.a`
  color: #404040;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    color: blue;
  }
`;
const PostPtag = styled.p`
  color: #717171;
  font-size: 12px;
  margin-top: 2px;
  font-weight: 500;
`;

const ThirdDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f59e0b1a;
  padding: 4px;
  border: 1px solid #f59e0b1a;
  border-radius: 5px;
`;
const ThirdDivA = styled.a`
  color: #3d3d3d;
  font-size: 14px;
  padding: 4px 8px;
  &:hover {
    background-color: white;
    color: black;
  }
`;
const HeaderH1 = styled.h1`
  color: #171717;
  font-weight: 600;
  margin-bottom: 8px;
`;
const LanguageTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;
const LanguageA = styled.a`
  padding: 4px 8px;
  font-size: 16px;
  &:hover {
    background-color: ${(props) => props.background_color};
    border-radius: 3px;
    opacity: 0.7;
  }
`;
const SharpSpan = styled.span`
  color: ${(props) => props.color};
`;
const ContentP = styled.p`
  font-weight: 500;
`;
const Hr = styled.hr`
  width: 100%;
`;

export default BoardDetail;
