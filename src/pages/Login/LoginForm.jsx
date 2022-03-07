import { useRef, useState, useEffect } from 'react';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import {
  NeedMoreHelp,
  ContainerLogin,
  Button,
  ContainerUser,
  InputField,
  Title,
  ErrMsg,
  OffScreen,
} from 'styles/Auth.styled';

const LoginForm = () => {
  const userRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const LOGIN_URL = 'http://localhost:8000/user';

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data: userData } = await axios.get(LOGIN_URL);

      userData.map((person) =>
        person.username.toLowerCase() === user.toLowerCase() && person.password === pwd
          ? (setUser(''), setPwd(''), navigate('/'))
          : setErrMsg('incorrect username or password.'),
      );
    } catch (err) {
      if (err.response) {
        setErrMsg('Login Failed');
      }
    }
  };

  return (
    <>
      <Link to="/">
        <Title>SWFB STUDY</Title>
      </Link>
      <ContainerLogin>
        {errMsg ? <ErrMsg>{errMsg}</ErrMsg> : <OffScreen />}
        <ContainerUser onSubmit={handleSubmit}>
          <TitleSignIn>Sign in</TitleSignIn>
          <ContainerUserInfo>
            <ContainerInput>
              <label htmlFor="username">사용자 ID</label>
              <InputField
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </ContainerInput>
            <ContainerInput>
              <label htmlFor="password">비밀번호</label>
              <InputField
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                autoComplete="off"
                required
              />
            </ContainerInput>
          </ContainerUserInfo>
          <Button type="submit" style={{ marginTop: '40px' }}>
            Continue
          </Button>
        </ContainerUser>
        <NeedMoreHelp>
          <Link to="/register">
            <span>Need an account? </span> &nbsp;
            <span style={{ color: '#4646c7' }}>Sign Up</span>
          </Link>
        </NeedMoreHelp>
      </ContainerLogin>
    </>
  );
};

const ContainerUserInfo = styled.div`
  margin-bottom: 1.5rem;
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`;

const TitleSignIn = styled.h2`
  position: relative;
  color: #000000;
  font-family: Roboto;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  padding-bottom: 2rem;
`;

export default LoginForm;
