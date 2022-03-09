import { useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Aside from 'layouts/BaseLayout/Aside';
import Footer from 'layouts/BaseLayout/Footer';
import Header from 'layouts/BaseLayout/Header';

const BoardUpdate = ({ boardUrl, preUrl }) => {
  const [loaDing, setLoaDing] = useState(true);

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

  const navi = useNavigate();
  const { setid } = useParams();
  const [newTitle, setNewTitle] = useState('');
  const [newcontent, setNewContent] = useState('');

  const onChange = (e) => {
    const { value } = e.target;
    setNewTitle(value);
  };

  const onChange2 = (e) => {
    const { value } = e.target;
    setNewContent(value);
  };

  const addTitle = (event) => {
    event.preventDefault();
    axios({
      method: 'PUT',
      url: `${boardUrl}/${setid}`,
      data: {
        id: parseInt(setid, 10),
        title: `${newTitle} (수정된 글)`,
        contents: newcontent,
      },
    })
      .then(() => {
        alert('생성이 완료되었습니다.');
        navi(`/${preUrl}/${setid}`);
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
    if (newDatas.length > 1) {
      setNewTitle(
        newDatas.find((a) => {
          return a.id === parseInt(setid, 10);
        }).title,
      );
      setNewContent(
        newDatas.find((a) => {
          return a.id === parseInt(setid, 10);
        }).contents,
      );
      setLoaDing(true);
    } else {
      setLoaDing(false);
    }
  }, [loaDing, newDatas.length]);

  return (
    <>
      <MainStyle>
        <Header />
        <div />
        <DisplayFlex>
          <BackDiv>
            {loaDing === true && (
              <HeaderDiv>
                <DivButton>
                  <ButtonA href="#">Add a cover image</ButtonA>
                </DivButton>
                <TextAreaFirst height="auto" type="text" placeholder="제목" value={newTitle} onChange={onChange} />
                <hr />
                <TextAreaFirst
                  height="80%"
                  className="text-area"
                  placeholder="내용"
                  value={newcontent}
                  onChange={onChange2}
                />
                <ButtonDiv>
                  <DivButton>
                    <ButtonB href="#" onClick={addTitle}>
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
            )}
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

const ButtonDiv = styled.div`
  display: fles;
  align-items: center;
  justify-content: center;
`;

export default BoardUpdate;
