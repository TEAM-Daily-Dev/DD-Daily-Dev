import { useState } from "react";

import LoginSuccess from "./LoginSuccess";
import LoginForm from "./LoginForm";

const Login = () => {
  const [success, setSuccess] = useState(false);

  const logInSucess = () => {
    setSuccess(true);
  };

  return (
    <>{success ? <LoginSuccess /> : <LoginForm logInSucess={logInSucess} />}</>
  );
};

export default Login;
