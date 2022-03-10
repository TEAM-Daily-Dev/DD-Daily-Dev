import React from 'react';

import BoardDetail from 'components/Board/Detail';

const JobDetail = () => {
  const boardUrl = 'http://localhost:8000/jobBoards';
  const replyUrl = 'http://localhost:8000/jobReply';
  const updateUrl = 'jobUpdate';
  const preUrl = '/jobBoard';

  return <BoardDetail boardUrl={boardUrl} replyUrl={replyUrl} updateUrl={updateUrl} preUrl={preUrl} />;
};

export default JobDetail;
