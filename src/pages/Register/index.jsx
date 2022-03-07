import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { WrapperAuth } from 'styles/Auth.styled';

import RegisterForm from './RegisterForm';

const RegisterPage = () => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  return <WrapperAuth>{success ? navigate('/') : <RegisterForm setSuccess={setSuccess} />}</WrapperAuth>;
};

export default RegisterPage;
