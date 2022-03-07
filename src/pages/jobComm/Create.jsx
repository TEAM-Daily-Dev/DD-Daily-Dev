import BoardCreate from 'components/Board/Create';

const JobCreate = () => {
  const createLink = 'http://localhost:8000/jobBoards';
  const preUrl = '/jobBoard';

  return <BoardCreate createLink={createLink} preUrl={preUrl} />;
};

export default JobCreate;
