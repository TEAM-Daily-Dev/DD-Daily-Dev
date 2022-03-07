import React from 'react';

import styled from 'styled-components';

import postPic from '../../assets/images/2h6crhh836sfyu4dai13.webp';
import Login from './Login';
import Posts from './Posts';
import SortTaps from './SortTaps';

const MainMenu = () => {
  return (
    <InnerBox>
      {/* Sort Tap section */}
      <MainHeader>
        <SortTaps />
      </MainHeader>
      {/* First Post with Pic */}
      <PostSection>
        <PostImg />
        <Posts />
      </PostSection>
      {/* TEST: Second Post without pic */}
      <PostSection>
        <Posts />
      </PostSection>
      {/* Login */}
      <LoginSection>
        <Login />
      </LoginSection>
      {/* TEST */}
      <PostSection>
        <Posts />
      </PostSection>
    </InnerBox>
  );
};
const InnerBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 16px 0;
`;
const MainHeader = styled.header`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`;
const PostSection = styled.div`
  background: rgb(255, 255, 255);
  box-shadow: 0 0 0 1px rgba(23, 23, 23, 0.1);
  margin: 0 0 0.5rem;
  position: relative;
  border-radius: 0.375rem;
`;
const LoginSection = styled.div`
  padding: 32px;
  margin-bottom: 12px;
`;
const PostImg = styled.img.attrs({
  src: `${postPic}`,
})`
  width: 100%;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;

export default MainMenu;

// -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
//     Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
//     'Segoe UI Symbol'

// .crayons-btn--s {
//     --vertical-padding: var(--su-1); 0.25rem
//     --horizontal-padding: var(--su-3);0.75rem
//     --font-size: var(--fs-s);
//     --with-icon-padding: var(--su-2);
//     --icon-margin: var(--su-1);
//     font-weight: normal;
