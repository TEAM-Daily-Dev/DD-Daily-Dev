import BoardUpdate from 'components/Board/Update';

const QnAUpdate = () => {
  const boardUrl = 'http://localhost:8000/qnaBoards';
  const preUrl = 'qnaBoard/detail';
  return <BoardUpdate boardUrl={boardUrl} preUrl={preUrl} />;
};

export default QnAUpdate;
