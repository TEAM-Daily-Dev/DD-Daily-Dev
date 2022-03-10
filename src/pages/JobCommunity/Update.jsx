import React from 'react';

import BoardUpdate from 'components/Board/Update';

const JobUpdate = () => {
  const boardUrl = 'http://localhost:8000/jobBoards';
  const preUrl = 'jobBoard/detail';
  return <BoardUpdate boardUrl={boardUrl} preUrl={preUrl} />;
};

export default JobUpdate;
