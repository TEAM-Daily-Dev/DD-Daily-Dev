import Aside from 'layouts/BaseLayout/Aside';
import Header from 'layouts/BaseLayout/Header';
import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Header>asd</Header>
      <Flex>
        <Aside />
        <div>
          {children}
          <Footer />
        </div>
      </Flex>
    </div>
  );
};

const Flex = styled.div`
  display: flex;
  padding-top: 80px;
  > div {
    position: relative;
    left: 260px;
    width: calc(100% - 260px);
  }
`;

export default BaseLayout;
