import styled from 'styled-components';

import mainBannerImg from '../../assets/images/mainBanner.png';
import BaseLayout from '../../layouts/BaseLayout';
import MiniBoard from './MiniBoard';

function MainPage() {
  return (
    <BaseLayout>
      <S.Banner>
        <bold>Study</bold>
        <div>
          <span>with</span>
          <bold>US</bold>
        </div>
      </S.Banner>
      <S.Main>
        <S.Grid>
          <MiniBoard />
          <MiniBoard />
          <MiniBoard />
          <MiniBoard />
        </S.Grid>
      </S.Main>
    </BaseLayout>
  );
}

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
    bold {
      font-size: 100px;
      font-weight: 900;
    }
    > bold {
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
      bold {
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
