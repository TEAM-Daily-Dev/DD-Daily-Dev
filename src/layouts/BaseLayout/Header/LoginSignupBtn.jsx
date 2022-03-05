import { useState } from 'react';

import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const LoginSignupBtn = ({ mainStyle, topStyle }) => {
  const [isLoggedIn, isSetLoggedIn] = useState(false);

  const styles = {
    mainStyle,
    topStyle,
  };

  return (
    <Wrapper {...styles}>
      {!isLoggedIn ? (
        <>
          <SignUpBtn {...styles} to="/register">
            Create account
          </SignUpBtn>
          <LogInBtn {...styles} to="/login">
            Log in
          </LogInBtn>
        </>
      ) : (
        <div>Logged in - User Name</div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  ${(props) =>
    props.mainStyle &&
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
    props.topStyle &&
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
    props.topStyle &&
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
