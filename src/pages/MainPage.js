import React from 'react';
import styled from 'styled-components';
import { Header } from 'components/Yena';
import Navigator from 'components/Kate/Navigator';

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <Navigator />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 57px;
`;

export default MainPage;
