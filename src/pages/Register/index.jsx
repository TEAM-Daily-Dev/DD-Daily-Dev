<<<<<<< HEAD:src/pages/Register/index.jsx
import { useState } from 'react';
=======
import { useState } from "react";
import React from "react";
>>>>>>> 로그인 폼 정리 &  로그인 true -> 메인 페이지:src/pages/Register/index.js

import RegisterForm from './RegisterForm';

import styled, { css } from "styled-components";

function RegisterPage() {
  const [success, setSuccess] = useState(false);

  const continueRegister = () => {
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <div> Success </div>
      ) : (
        <>
          <Wrapper>
            <RegisterForm continueRegister={continueRegister} />
          </Wrapper>
        </>
      )}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #7d50ff 0%, #6153c9 100%);
`;

export default RegisterPage;
