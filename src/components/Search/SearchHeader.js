import React from 'react';
import styled from 'styled-components';
import { SearchInput } from 'components';
import { NAVITEM } from 'utils/constants/search';
import { MOBILE, TABLET } from 'utils/constants/responsive';

const SearchHeader = ({ keyword, value, handleChange, handleKeyPress }) => {
  return (
    <Wrapper>
      <SearchInput search keyword={keyword} handleChange={handleChange} handleKeyPress={handleKeyPress} />
      <Title>Search results {value && `for ${value}`}</Title>
      <NavList>
        {NAVITEM.map((item, idx) => (
          <NavItem key={`${idx}_${item}`}>
            <a href='/'>{item}</a>
          </NavItem>
        ))}
      </NavList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 57px;

  @media (max-width: ${TABLET}) {
    justify-content: space-around;
    align-items: initial;
  }

  @media (max-width: ${MOBILE}) {
    flex-direction: column;
    justify-content: initial;
  }
`;

const Title = styled.h1`
  margin-right: auto;
  font-size: 30px;

  @media (max-width: ${MOBILE}) {
    margin: 0;
    display: none;
    width: auto;
  }
`;

const NavList = styled.ul`
  display: flex;

  @media (max-width: ${MOBILE}) {
    margin-left: -12px;
  }
`;

const NavItem = styled.li`
  padding: 8px 12px;
  color: #575757;
`;

export default SearchHeader;
