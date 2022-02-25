import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header, ResultCard, SearchHeader, SideNav } from 'components/Yena';
import { getMainList } from 'utils/getApi';

const SearchPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [data, setData] = useState([]);

  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (state) {
      setData(state.data);
      setKeyword(state.keyword);
    }
    (async function () {
      const response = await getMainList();
      setData(response);
    })();
  }, []);

  useEffect(() => {
    handleSearch(keyword);
  }, [keyword]);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    let filteredRes = data?.filter((result) => matchInput(result.title, keyword) === true);
    setResults(filteredRes);
  };

  const matchInput = (target, keyword) => {
    if (keyword === '') return false;

    target = target.toLowerCase();
    keyword = keyword.toString().toLowerCase();
    return target.includes(keyword);
  };

  const handleSubmit = () => {
    navigate(`/search?q=${keyword}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
      <Header keyword={keyword} handleChange={handleChange} handleKeyPress={handleKeyPress} handleSubmit={handleSubmit} />
      <Wrapper>
        <InnerBox>
          <SearchHeader search keyword={keyword} handleChange={handleChange} handleKeyPress={handleKeyPress} />
          <Section>
            <SideNav />
            <Results>
              {results.map((result, idx) => (
                <ResultCard key={idx} result={result} />
              ))}
            </Results>
          </Section>
        </InnerBox>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const InnerBox = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: 640px) {
    gap: 0;
    padding: 12px;
  }
`;

const Section = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 640px) {
    display: initial;
  }
`;

const Results = styled.div`
  padding: 40px 30px;

  @media screen and (max-width: 768px) {
    padding: 12px 0;
  }

  @media screen and (max-width: 640px) {
    padding: 0;
  }
`;

export default SearchPage;
