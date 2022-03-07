import { useRef, useState, useEffect } from 'react';

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
import { getUserList } from 'utils/getApi';

const LoginForm = () => {
  const userRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await getUserList();

      userData.map((person) =>
        person.username.toLowerCase() === user.toLowerCase() && person.password === pwd
          ? (setUser(''), setPwd(''), navigate('/'))
          : setErrMsg('아이디, 비밀번호 재확인하세요.'),
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
        <ContainerUser onSubmit={handleSubmit}>
          <TitleSignIn>Sign In</TitleSignIn>
          {errMsg ? <ErrMsg>{errMsg}</ErrMsg> : <OffScreen />}
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
            <span style={{ color: '#7d50ff' }}>Sign Up</span>
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
