import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMainList } from 'utils/getApi';
import { Header } from 'components/Yena';
import Navigator from 'components/Kate/Navigator';

const MainPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    (async function () {
      const response = await getMainList();
      setData(response);
    })();
  }, []);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = () => {
    if (!keyword) return false;

    navigate(`/search?q=${keyword}`, { state: { data, keyword }, replace: false });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
      <Header keyword={keyword} handleChange={handleChange} handleKeyPress={handleKeyPress} handleSubmit={handleSubmit} />
      <Navigator />
    </>
  );
};

export default MainPage;
