import { useState } from 'react';

import RegisterForm from './RegisterForm';

function RegisterPage() {
  const [success, setSuccess] = useState(false);

  const continueRegister = () => {
    setSuccess(true);
  };

  return (
    <>
      <div>Register</div> {success ? <div> Success </div> : <RegisterForm continueRegister={continueRegister} />}
    </>
  );
}

export default RegisterPage;
