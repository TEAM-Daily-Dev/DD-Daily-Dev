import { useState } from "react";

import LoginForm from "./LoginForm";
import { ContainerLogin } from "./style/Login.styled";

const LoginPage = () => {
  const [success, setSuccess] = useState(true);

  const logInSucess = () => {
    setSuccess(true);
  };

  return (
    <>
      {success && (
        <>
          <LoginForm logInSucess={logInSucess} />
        </>
      )}
    </>
  );
};

export default LoginPage;
