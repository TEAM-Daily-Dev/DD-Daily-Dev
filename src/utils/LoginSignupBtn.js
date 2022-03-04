<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
=======
import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
>>>>>>> 로그인 폼 정리 &  로그인 true -> 메인 페이지

const LoginSignupBtn = ({ main, top }) => {
  const [isLoggedIn, isSetLoggedIn] = useState(false);

  const styles = {
    main,
    top,
  };

  return (
    <Wrapper {...styles}>
<<<<<<< HEAD
      <SignUpBtn {...styles} to="/register">
        Create account
      </SignUpBtn>
      <LogInBtn {...styles} to="/login">
        Log in
      </LogInBtn>
=======
      {!isLoggedIn ? (
        <>
          <SignUpBtn {...styles} to="/register">
            Create account
          </SignUpBtn>
          <LogInBtn {...styles} to="/login">
            Log in{" "}
          </LogInBtn>
        </>
      ) : (
        <div>Logged in - User Name</div>
      )}
>>>>>>> 로그인 폼 정리 &  로그인 true -> 메인 페이지
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  ${(props) =>
    props.main &&
    css`
      flex-direction: column;
    `};
`;

const SignUpBtn = styled(Link)`
  height: 40px;
  color: #3b49df;
  border: 1px solid #3b49df;
  padding: 7px 15px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 6px;
  margin-bottom: 4px;

  ${(props) =>
    props.top &&
    css`
      order: 2;
    `};

  &:hover {
    background: #3b49df;
    color: #fff;
  }
`;

const LogInBtn = styled(Link)`
  height: 40px;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 6px;
  color: #404040;

  ${(props) =>
    props.top &&
    css`
      order: 1;
    `};

  &:hover {
    color: #2f3ab2;
    background: #ebecfc;
    text-decoration: underline solid #2f3ab2;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default LoginSignupBtn;
