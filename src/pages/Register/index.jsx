import { useState } from 'react';

import { WrapperAuth } from 'styles/Auth.styled';

import RegisterForm from './RegisterForm';

const RegisterPage = () => {
  const [success, setSuccess] = useState(false);

  const continueRegister = () => {
    setSuccess(true);
  };

  return (
    <WrapperAuth>{success ? <div> Success </div> : <RegisterForm continueRegister={continueRegister} />}</WrapperAuth>
  );
};

export default RegisterPage;
