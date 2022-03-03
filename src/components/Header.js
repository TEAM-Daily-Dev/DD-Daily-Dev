import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { SearchInput } from "components/Search";
import { Hamburger, SearchLinkBtn } from "assets/Search";
import LoginSignupBtn from "utils/LoginSignupBtn";
import { TABLET, DESKTOP } from "utils/constants/responsive";

const Header = ({ keyword, handleChange, handleKeyPress, handleSubmit }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <InnerWrap>
        <LogoBox>
          <MenuBtn>
            <Hamburger />
          </MenuBtn>
          <LogoTitle>
            <LogoLink to="/">
              <Logo>
                <span>SWFB</span>&nbsp;STUDY
              </Logo>
            </LogoLink>
          </LogoTitle>
        </LogoBox>
        <SearchBox>
          <SearchInput
            header
            keyword={keyword}
            handleChange={handleChange}
            handleKeyPress={handleKeyPress}
            handleSubmit={handleSubmit}
          />
        </SearchBox>
        <EntryBox>
          <SearchBtn onClick={() => navigate("/search")}>
            <SearchLinkBtn />
          </SearchBtn>
          <LoginSignupBtn top />
        </EntryBox>
      </InnerWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 83px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 16px;
  border-bottom: 1px solid #d4d4d4;
  padding: 0 32px;

  @media (max-width: ${TABLET}) {
    padding: 24px;
  }
`;

const InnerWrap = styled.div`
  width: 100%;
  max-width: 1784px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoBox = styled.div`
  display: flex;
`;

const SearchBox = styled.div``;

const MenuBtn = styled.button`
  display: none;
  padding: 8px;
  margin: 0 8px;

  @media (max-width: ${TABLET}) {
    display: block;
    margin-left: 0;
  }
`;

const LogoTitle = styled.div`
  display: flex;
  align-items: center;
  width: 18vw;

  & span {
    color: #6550ff;
  }

  @media (max-width: ${TABLET}) {
    line-height: 2;
  }
`;

const LogoLink = styled(Link)`
  width: 50px;
`;

const Logo = styled.p`
  font-size: 18px;
  font-weight: 900;
  line-height: 1.7;
`;

const EntryBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 16px;

  @media (max-width: ${TABLET}) {
    padding-right: 8px;
  }
`;

const SearchBtn = styled.button`
  display: none;
  margin: 0 4px;
  padding: 0 8px;
  width: 40px;
  height: 40px;
  border-radius: 7px;

  &:hover {
    background: #ebecfc;
  }

  @media (max-width: ${TABLET}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Header;
