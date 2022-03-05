import { useEffect, useState, useCallback } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ResultCard, SearchHeader, SideNav } from 'components/Search';
import Header from 'layouts/BaseLayout/Header';
import { MOBILE, TABLET } from 'utils/constants/responsive';
import { getMainList } from 'utils/getApi';

const SearchPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [data, setData] = useState([]);

  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (!state) {
      (async () => {
        const response = await getMainList();
        setData(response);
        console.log(response);
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

    const loweredTarget = target.toLowerCase();
    const loweredKeyword = keyword.toString().toLowerCase();
    return loweredTarget.includes(loweredKeyword);
  }, []);

  const handleSearch = useCallback(
    (data, value) => {
      const filteredRes = data?.filter((result) => matchInput(result.title, value) === true);
      setResults(filteredRes);
    },
    [matchInput],
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
    [handleSubmit, keyword],
  );

  return (
    <>
      <Header
        keyword={keyword}
        handleChange={handleChange}
        handleKeyPress={handleKeyPress}
        handleSubmit={handleSubmit}
      />
      <Wrapper>
        <InnerBox>
          <SearchHeader
            search
            keyword={keyword}
            value={value}
            handleChange={handleChange}
            handleKeyPress={handleKeyPress}
          />
          <Section>
            <SideNav />
            <Results>
              {results.map((result) => (
                <ResultCard key={result.date} result={result} />
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
