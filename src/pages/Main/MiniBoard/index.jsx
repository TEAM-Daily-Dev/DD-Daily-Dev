import { useState, useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MiniBoard = ({ detailUrl, boardUrl, boardName, boardReply }) => {
  const [newDatas, setNewDatas] = useState([]);
  const [newReplys, setNewReplys] = useState([]);
  const url = `/${detailUrl}`;

  const fetchData = async () => {
    try {
      const res = await axios(boardUrl);
      const Data = await res.data;
      setNewDatas(Data);
    } catch (err) {
      console.log(err.message);
    }
  };
  const fetchReply = async () => {
    try {
      const replyres = await axios(boardReply);
      const replyData = await replyres.data;
      setNewReplys(replyData);
    } catch (err) {
      console.log(err.message);
    }
  };

  const boardDate = newDatas.slice(0, 3);
  useEffect(() => {
    fetchData();
    fetchReply();
  }, []);
  return (
    <S.Article>
      <S.Flex>
        <h2>{boardName} 게시판</h2>
        <Link to={url}>더보기</Link>
      </S.Flex>
      <ul>
        {boardDate.map((item, index) => {
          return (
            <li key={Number(index)}>
              <h3>{item.username}</h3>
              <Link to={`/${detailUrl}/detail/${item.id}`}>
                <p>{item.title}</p>
              </Link>
              <div>
                <span>좋아요 10</span>
                <span>댓글{newReplys.filter((a) => a.sameId === item.id).length}개</span>
              </div>
            </li>
          );
        })}
      </ul>
    </S.Article>
  );
};

const S = {
  Article: styled.article`
    ul {
      padding: 0 16px;
      background-color: #fff;
      border: 1px solid #dedede;
      border-radius: 6px;
      li {
        border-bottom: 1px solid #dedede;
        padding: 16px 0;
        &:last-child {
          border-bottom: 0;
        }
        h3 {
          margin-bottom: 8px;
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        p {
          margin-bottom: 6px;
          font-size: 12px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        div {
          text-align: right;
          font-size: 10px;
          span {
            margin-left: 16px;
          }
        }
      }
    }
  `,
  Flex: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 16px;
      margin-bottom: 12px;
    }
    a {
      font-size: 12px;
    }
  `,
};
export default MiniBoard;
