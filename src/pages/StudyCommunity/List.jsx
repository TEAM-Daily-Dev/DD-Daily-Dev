import React from 'react';

import BoardList from 'components/Board/List';

const StudyList = () => {
  const boardUrl = 'http://localhost:8000/studyBoards';
  const detailUrl = 'studyBoard';
  const createUrl = 'studyWrite';

  return <BoardList boardUrl={boardUrl} detailUrl={detailUrl} createUrl={createUrl} />;
};

export default StudyList;
