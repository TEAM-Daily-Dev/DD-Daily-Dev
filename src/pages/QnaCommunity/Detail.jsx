import React from 'react';

import BoardDetail from 'components/Board/Detail';

const QnaDetail = () => {
  const boardUrl = 'http://localhost:8000/qnaBoards';
  const replyUrl = 'http://localhost:8000/qnaReply';
  const updateUrl = 'qnaUpdate';
  const preUrl = '/qnaBoard';

  return <BoardDetail boardUrl={boardUrl} replyUrl={replyUrl} updateUrl={updateUrl} preUrl={preUrl} />;
};

export default QnaDetail;
