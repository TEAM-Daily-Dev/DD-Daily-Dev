import { useState } from 'react';

import LoginForm from './LoginForm';

function LoginPage() {
  const [success, setSuccess] = useState(true);

  const logInSucess = () => {
    setSuccess(true);
  };

  return <div>{success && <LoginForm logInSucess={logInSucess} />}</div>;
}

export default LoginPage;
