import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Aside = () => {
  return (
    <S.Ul>
      <S.Li>
        <NavLink to="/Board">
          <FontAwesomeIcon icon={faQuoteRight} size="lg" />
          자유 게시판
        </NavLink>
      </S.Li>
      <S.Li>
        <NavLink to="/studyBoard">
          <FontAwesomeIcon icon={faQuoteRight} size="lg" />
          스터디 게시판
        </NavLink>
      </S.Li>
      <S.Li>
        <NavLink to="/jobBoard">
          <FontAwesomeIcon icon={faQuoteRight} size="lg" />
          취업 게시판
        </NavLink>
      </S.Li>
      <S.Li>
        <NavLink to="/qnaBoard">
          <FontAwesomeIcon icon={faQuoteRight} size="lg" />
          QnA 게시판
        </NavLink>
      </S.Li>
    </S.Ul>
  );
};

const S = {
  Ul: styled.ul`
    position: fixed;
    width: 260px;
    background-color: #323232;
    color: #fff;
    height: calc(100vh - 80px);
  `,
  Li: styled.li`
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      height: 60px;
      border-bottom: 1px solid rgba(236, 229, 255, 0.2);
    }
    svg {
      margin-right: 10px;
    }
  `,
};

export default Aside;
