import styled from 'styled-components';

import ad from '../../assets/images/adimg.png';
import Firstnav from './Firstnav';
import Hashtags from './Hashtags';
import Socialnetworks from './Socialnetworks';

const MainPage = () => {
  return (
    <Wrapper>
      <InnerBox>
        <LeftNavbar>
          {/* Login */}
          <IntroBox>
            <IntroTitle>
              <TitleLink>DEV Community</TitleLink> is a community of 790,675 amazing developers
            </IntroTitle>
            <IntroDesc>We&apos;re a place where coders share, stay up-to-date and grow their careers.</IntroDesc>
            <EntryBtnGrop>
              <SignUpBtn>Create account</SignUpBtn>
              <LogInBtn>Log in</LogInBtn>
            </EntryBtnGrop>
          </IntroBox>
          {/* Menu Bar */}
          <Margin>
            <Firstnav />
          </Margin>
          {/* Social Networks */}
          <Margin>
            <Socialnetworks />
          </Margin>
          {/* Hash Tags */}
          <Margin>
            <Hashtags />
          </Margin>
          {/* Ad */}
          <IntroBox>
            <AdImg />
            <IntroTitle>
              <TitleLink>Do you have your sticker pack yet?</TitleLink>
            </IntroTitle>
          </IntroBox>
          {/* etc */}
          <Margin>
            <IntroBox>
              <IntroDesc>
                DEV runs on 100% open source code known as
                <ContentsLink>Forem.</ContentsLink>
                Contribute to the codebase or host your own!
                <StrongText>Check these out! 👇</StrongText>
                <CheckOutUl>
                  <CheckOutLi>Main Forem Repo</CheckOutLi>
                  <CheckOutLi>Self-Host Instructions</CheckOutLi>
                </CheckOutUl>
              </IntroDesc>
            </IntroBox>
          </Margin>
        </LeftNavbar>
      </InnerBox>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const InnerBox = styled.div`
  width: 100%;
  max-width: 1248px;
  display: flex;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 16px;
`;
const LeftNavbar = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const IntroBox = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #fafafa;
  color: #404040;
  box-shadow: 0 0 0 1px rgba(23, 23, 23, 0.05);
  border-radius: 0.375rem;
`;
const IntroTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #242424;
  line-height: 1.25;
  margin-bottom: 16px;
`;
const TitleLink = styled.p`
  color: #3b49df;
  padding-top: 16px;
  &:hover {
    color: #2f3ab2;
    text-decoration: underline solid #2f3ab2;
  }
`;
const IntroDesc = styled.p`
  color: #575757;
  margin-bottom: 16px;
  line-height: 1.5;
`;
const EntryBtnGrop = styled.div`
  display: flex;
  flex-direction: column;
`;
const SignUpBtn = styled.button`
  height: 40px;
  color: #3b49df;
  border: 1px solid #3b49df;
  padding: 7px 15px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 6px;
  margin-bottom: 4px;
  &:hover {
    background: #3b49df;
    color: #fff;
  }
`;
const LogInBtn = styled.button`
  height: 40px;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 6px;
  color: #404040;
  &:hover {
    color: #2f3ab2;
    background: #ebecfc;
    text-decoration: underline solid #2f3ab2;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const AdImg = styled.img.attrs({
  src: `${ad}`,
})`
  border-radius: 0.375rem;
`;
const ContentsLink = styled.p`
  color: #3b49df;
`;
const StrongText = styled.p`
  color: #404040;
  font-weight: 700;
`;
const CheckOutUl = styled.ul`
  list-style: inside;
`;
const CheckOutLi = styled.li`
  color: #3b49df;
`;
const Margin = styled.div`
  margin: 16px 0 0;
`;
export default MainPage;
