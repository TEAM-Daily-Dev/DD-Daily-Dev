import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getMainList } from 'utils/getApi';
import { Header } from 'components/Yena';
import Navigator from 'components/Kate/Navigator';

const MainPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    (async function getData() {
      const response = await getMainList();
      setData(response);
    })();
  }, []);

  const handleChange = (e) => {
    setKeyword(e.target.value);
    handleSearch(e.target.value);
  };

  const handleSearch = (keyword) => {
    if (data) {
      let filteredRes = data.filter((result) => matchInput(result.title, keyword) === true);
      setResults(filteredRes);
    }
  };

  const matchInput = (target, keyword) => {
    if (keyword === '') return false;

    target = target.toLowerCase();
    keyword = keyword.toString().toLowerCase();
    return target.includes(keyword);
  };

  const handelSubmit = () => {
    if (!keyword) return false;

    navigate(`/search?q=${keyword}`, { state: { results }, replace: false });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handelSubmit();
    }
  };

  return (
    <Wrapper>
      <Header keyword={keyword} results={results} handleChange={handleChange} handleKeyPress={handleKeyPress} />
      <Navigator />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 57px;
`;

export default MainPage;
