import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MiniBoard = () => {
  return (
    <S.Article>
      <S.Flex>
        <h2>게시판</h2>
        <Link to="/">더보기</Link>
      </S.Flex>
      <ul>
        {['##1', '##2', '##3'].map((item, index) => (
          <li key={Number(index)}>
            <h3>게시판</h3>
            <p>각 게시판의 예시 게시물글 의 수는 한줄이 나오게끔 설정됩니다. MMMMMMMMMMMMMMMMMMMMMMM</p>
            <div>
              <span>좋아요 10</span>
              <span>댓글 10</span>
            </div>
          </li>
        ))}
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
