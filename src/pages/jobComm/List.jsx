import BoardList from 'components/Board/List';

const JobList = () => {
  const boardUrl = 'http://localhost:8000/jobBoards';
  const detailUrl = 'jobBoard';
  const createUrl = 'jobWrite';

  return <BoardList boardUrl={boardUrl} detailUrl={detailUrl} createUrl={createUrl} />;
};

export default JobList;
