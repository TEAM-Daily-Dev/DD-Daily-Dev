import BoardList from 'components/Board/List';

const CommunityList = () => {
  const boardUrl = 'http://localhost:8000/boards';
  const detailUrl = 'Board';
  const createUrl = 'write';

  return <BoardList boardUrl={boardUrl} detailUrl={detailUrl} createUrl={createUrl} />;
};

export default CommunityList;
