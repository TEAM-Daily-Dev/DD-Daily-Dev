import styled from 'styled-components';

import mainBannerImg from '../../assets/images/mainBanner.png';
import BaseLayout from '../../layouts/BaseLayout';
import MiniBoard from './MiniBoard';

const MainPage = () => {
  const detailUrl = 'Board';
  const boardUrl = 'http://localhost:8000/boards';
  const studyDetailUrl = 'studyBoard';
  const studyUrl = 'http://localhost:8000/studyBoards';
  const jobDetailUrl = 'jobBoard';
  const jobUrl = 'http://localhost:8000/jobBoards';
  const qnaDetailUrl = 'qnaBoard';
  const qnaUrl = 'http://localhost:8000/qnaBoards';

  return (
    <BaseLayout>
      <S.Banner>
        <b>Study</b>
        <div>
          <span>with</span>
          <b>US</b>
        </div>
      </S.Banner>
      <S.Main>
        <S.Grid>
          <MiniBoard detailUrl={detailUrl} boardUrl={boardUrl} />
          <MiniBoard detailUrl={studyDetailUrl} boardUrl={studyUrl} />
          <MiniBoard detailUrl={jobDetailUrl} boardUrl={jobUrl} />
          <MiniBoard detailUrl={qnaDetailUrl} boardUrl={qnaUrl} />
        </S.Grid>
      </S.Main>
    </BaseLayout>
  );
};

const S = {
  Flex: styled.div`
    display: flex;
    padding-top: 80px;
  `,
  Banner: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 470px;
    background: center / 100% 100% url(${mainBannerImg}) no-repeat;
    color: #fff;
    b {
      font-size: 100px;
      font-weight: 900;
    }
    > b {
      position: relative;
      right: 60px;
      bottom: 40px;
    }
    div {
      position: relative;
      top: 20px;
      span {
        font-size: 36px;
        font-weight: 500;
        margin-right: 20px;
      }
      b {
        position: relative;
        top: 20px;
      }
    }
  `,
  Main: styled.main`
    background-color: #fafafa;
    padding: 50px 100px;
    margin-bottom: 60px;
  `,
  Grid: styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 30px;
  `,
};

export default MainPage;
