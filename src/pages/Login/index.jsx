import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { WrapperAuth } from 'styles/Auth.styled';

import LoginForm from './LoginForm';

const LoginPage = () => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  return <WrapperAuth>{success ? navigate('/') : <LoginForm setSuccess={setSuccess} />}</WrapperAuth>;
};

export default LoginPage;
