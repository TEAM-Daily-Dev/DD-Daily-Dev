import React, { useEffect, useRef, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Aside from 'layouts/BaseLayout/Aside';
import Footer from 'layouts/BaseLayout/Footer';
import Header from 'layouts/BaseLayout/Header';

const BoardCreate = ({ createLink, preUrl }) => {
  const [newDatas, setNewDatas] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios(createLink);
      const Data = await res.data;
      setNewDatas(Data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const navi = useNavigate();
  const writeTitle = useRef('');
  const newcontent = useRef('');
  const newId = useRef('');

  const CreateWrite = (event) => {
    event.preventDefault();
    if (writeTitle.current.value === '') {
      alert('제목을 입력하세요.');
    }
    if (newcontent.current.value === '') {
      alert('내용을 입력하세요.');
    }
    if (newId.current.value === '') {
      alert('비밀번호를 입력하세요.');
    }
    axios({
      method: 'POST',
      url: createLink,
      data: {
        postid: parseInt(newId.current.value, 10),
        title: writeTitle.current.value,
        contents: newcontent.current.value,
      },
    })
      .then((res) => {
        setNewDatas([...newDatas, res]);
        alert('생성이 완료되었습니다.');
        navi(`${preUrl}`);
      })
      .catch((err) => {
        return alert(err.message);
      });
  };

  const returnPage = () => {
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
              <DivButton>
                <ButtonA href="#">Add a cover image</ButtonA>
              </DivButton>
              <TextAreaFirst height="auto" type="text" placeholder="New Post title here" ref={writeTitle} />
              <TagDiv>Add up to 4 tags...</TagDiv>
              <hr />
              <TextAreaFirst height="80%" placeholder="Write yout post content here..." ref={newcontent} />
              <PasswordDiv>
                <PasswordInput type="password" placeholder="Password Please" ref={newId} />
              </PasswordDiv>
              <ButtonDiv>
                <DivButton>
                  <ButtonB href="#" onClick={CreateWrite}>
                    Publish
                  </ButtonB>
                </DivButton>
                <DivButton>
                  <ButtonB href="#" onClick={returnPage}>
                    Cancel
                  </ButtonB>
                </DivButton>
              </ButtonDiv>
            </HeaderDiv>
          </BackDiv>
        </DisplayFlex>
      </MainStyle>
      <Footer />
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: 975px;
`;
const HeaderDiv = styled.div`
  width: 60%;
  height: 800px;
  background: #ffffff;
  padding: 50px;
  width: 975px;
`;
const TextAreaFirst = styled.textarea`
  border: none;
  resize: none;
  outline: none;
  width: 100%;
  height: ${(props) => props.height};
  &::placeholder {
    font-size: 28px;
    font-weight: 700;
    color: gery;
  }
`;
const DivButton = styled.button`
  background-color: transparent;
  border: none;
`;
const ButtonA = styled.a`
  background-color: #ffffff;
  color: #3d3d3d;
  display: flex;
  width: 100%;
  border: 2px solid #717171;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin: 0 0 5px -7px;
  padding: 5px;
`;
const ButtonB = styled.a`
  background-color: #3b49df;
  color: #f9f9f9;
  display: flex;
  width: 83px;
  height: 40px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin: 0 0 0 -7px;
`;
const PasswordInput = styled.input`
  &::placeholder {
    font-size: 12px;
    font-weight: 700;
    color: red;
  }
`;
const PasswordDiv = styled.div`
  display: fles;
  align-items: center;
  justify-content: center;
`;

const ButtonDiv = styled.div`
  display: fles;
  align-items: center;
  justify-content: center;
`;
const TagDiv = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: grey;
`;

export default BoardCreate;
