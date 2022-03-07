import BoardDetail from 'components/Board/Detail';

const CommunityDetail = () => {
  const boardUrl = 'http://localhost:8000/boards';
  const replyUrl = 'http://localhost:8000/boardsReply';
  const updateUrl = 'putndelete';
  const preUrl = '/Board';

  return <BoardDetail boardUrl={boardUrl} replyUrl={replyUrl} updateUrl={updateUrl} preUrl={preUrl} />;
};

export default CommunityDetail;
