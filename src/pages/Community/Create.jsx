import BoardCreate from 'components/Board/Create';

const ComunityCreate = () => {
  const createLink = 'http://localhost:8000/boards';
  const preUrl = '/Board';

  return <BoardCreate createLink={createLink} preUrl={preUrl} />;
};

export default ComunityCreate;
