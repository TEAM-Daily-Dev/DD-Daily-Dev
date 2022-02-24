import { useState } from "react";

import RegisterSuccess from "./RegisterSuccess";
import RegisterForm from "./RegisterForm";

function Register() {
  const [success, setSuccess] = useState(false);

  const continueRegister = () => {
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <RegisterSuccess />
      ) : (
        <>
          <RegisterForm continueRegister={continueRegister} />
        </>
      )}
    </>
  );
}

export default Register;
