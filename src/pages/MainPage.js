import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMainList } from 'utils/getApi';
import Header from 'components/Header';
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

  const handleChange = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    if (!keyword) return false;

    navigate(`/search?q=${keyword}`, { state: { data, keyword }, replace: false });
  }, [data, keyword, navigate]);

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  return (
    <>
      <Header keyword={keyword} handleChange={handleChange} handleKeyPress={handleKeyPress} handleSubmit={handleSubmit} />
      <Navigator />
    </>
  );
};

export default MainPage;
