import { useState } from 'react';

import { WrapperAuth } from 'styles/Auth.styled';

import LoginForm from './LoginForm';

const LoginPage = () => {
  const [success, setSuccess] = useState(true);

  const logInSucess = () => {
    setSuccess(true);
  };

  return (
    <div>
      {success && (
        <WrapperAuth>
          <LoginForm logInSucess={logInSucess} />
        </WrapperAuth>
      )}
    </div>
  );
};

export default LoginPage;
