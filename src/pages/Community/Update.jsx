import BoardUpdate from 'components/Board/Update';

const CommunityUpdate = () => {
  const boardUrl = 'http://localhost:8000/boards';
  const preUrl = 'Board/detail';

  return <BoardUpdate boardUrl={boardUrl} preUrl={preUrl} />;
};

export default CommunityUpdate;
