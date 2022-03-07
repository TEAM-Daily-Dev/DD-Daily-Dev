import React from 'react';

import BoardCreate from 'components/Board/Create';

const QnACreate = () => {
  const createLink = 'http://localhost:8000/qnaBoards';
  const preUrl = '/qnaBoard';

  return <BoardCreate createLink={createLink} preUrl={preUrl} />;
};

export default QnACreate;
