import styled, { css } from 'styled-components';

import { SearchBtnIcon } from 'assets/Search';
import { MOBILE, TABLET } from 'utils/constants/responsive';

const SearchInput = ({ headerStyle, searchStyle, keyword, handleChange, handleSubmit, handleKeyPress }) => {
  const styles = {
    headerStyle,
    searchStyle,
  };

  return (
    <Wrapper>
      <SearchBox {...styles}>
        <ElSearchInput placeholder="Search..." value={keyword} onChange={handleChange} onKeyPress={handleKeyPress} />
        <SearchBtn onClick={handleSubmit}>
          <SearchBtnIcon />
        </SearchBtn>
      </SearchBox>
    </Wrapper>
  );
};

SearchInput.defaultProps = {
  headerStyle: false,
  searchStyle: false,
};

const Wrapper = styled.div``;

const SearchBox = styled.div`
  width: 420px;
  height: 40px;
  margin: 0 16px;
  position: relative;

  @media screen and (max-width: ${TABLET}) {
    ${(props) =>
      props.headerStyle &&
      css`
        display: none;
      `};

    ${(props) =>
      props.searchStyle &&
      css`
        width: auto;
        display: block;
        margin: 0;
      `};
  }

  @media screen and (min-width: ${TABLET}) {
    ${(props) =>
      props.searchStyle &&
      css`
        display: none;
      `};
  }

  @media screen and (max-width: ${MOBILE}) {
    width: 100%;
    margin: 0;
    margin-bottom: 8px;
  }
`;

const ElSearchInput = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 8px 0 8px 36px;
  border: 1px solid #bfbfbf;
  border-radius: 6px;

  &::placeholder {
    color: #bfbfbf;
  }
`;

const SearchBtn = styled.button`
  position: absolute;
  top: 2px;
  left: 1px;
  padding: 0 9px;
  height: 95%;
  border-radius: 7px;
`;

export default SearchInput;
