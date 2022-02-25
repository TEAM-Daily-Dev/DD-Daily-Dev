import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { ResultCard, SearchHeader, SideNav } from 'components/Search';
import { Header } from 'components';
import { getMainList } from 'utils/getApi';
import { MOBILE, TABLET } from 'utils/constants/responsive';

const SearchPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [data, setData] = useState([]);

  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (!state) {
      (async function () {
        const response = await getMainList();
        setData(response);
      })();
    } else {
      setData(state.data);
      setKeyword(state.keyword);
      setValue(state.keyword);
      handleSearch(state.data, state.keyword);
    }
  }, []);

  const handleChange = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);

  const matchInput = useCallback((target, keyword) => {
    if (keyword === '') return false;

    target = target.toLowerCase();
    keyword = keyword.toString().toLowerCase();
    return target.includes(keyword);
  }, []);

  const handleSearch = useCallback(
    (data, value) => {
      let filteredRes = data?.filter((result) => matchInput(result.title, value) === true);
      setResults(filteredRes);
    },
    [matchInput]
  );

  const handleSubmit = useCallback(() => {
    navigate(`/search?q=${keyword}`);
    handleSearch(data, keyword);
  }, [data, keyword, handleSearch, navigate]);

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        setValue(keyword);
        handleSubmit();
      }
    },
    [handleSubmit, keyword]
  );

  return (
    <>
      <Header keyword={keyword} handleChange={handleChange} handleKeyPress={handleKeyPress} handleSubmit={handleSubmit} />
      <Wrapper>
        <InnerBox>
          <SearchHeader search keyword={value} handleChange={handleChange} handleKeyPress={handleKeyPress} />
          <Section>
            <SideNav />
            <Results>
              {results.map((result, idx) => (
                <ResultCard key={`${idx}_${result.date}`} result={result} />
              ))}
            </Results>
          </Section>
        </InnerBox>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: -50px;
`;

const InnerBox = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${MOBILE}) {
    gap: 0;
    padding: 12px;
  }
`;

const Section = styled.div`
  display: flex;

  @media (max-width: ${TABLET}) {
    flex-direction: column;
  }

  @media (max-width: ${MOBILE}) {
    display: initial;
  }
`;

const Results = styled.div`
  padding: 0 30px;

  @media (max-width: ${TABLET}) {
    padding: 12px 0;
  }

  @media (max-width: ${MOBILE}) {
    padding: 0;
  }
`;

export default SearchPage;
