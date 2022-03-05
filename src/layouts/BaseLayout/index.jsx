import styled from 'styled-components';

import Aside from './Aside';
import Footer from './Footer';
import Header from './Header';

function BaseLayout({ children }) {
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
}

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
