import React from 'react';

import BoardCreate from 'components/Board/Create';

const StudyCreate = () => {
  const createLink = 'http://localhost:8000/studyBoards';
  const preUrl = '/studyBoard';

  return <BoardCreate createLink={createLink} preUrl={preUrl} />;
};

export default StudyCreate;
