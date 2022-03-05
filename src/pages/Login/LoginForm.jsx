import { useRef, useState, useEffect } from 'react';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Register from '../Register';
import {
  ContainerLogin,
  ContainerUser,
  ContainerInput,
  InputField,
  Button,
  Title,
  TitleSignIn,
  ErrMsg,
  OffScreen,
} from './styled';

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
      <Title>SWFB STUDY</Title>
      <ContainerLogin>
        <div>
          {errMsg ? <ErrMsg>{errMsg}</ErrMsg> : <OffScreen />}

          <ContainerUser onSubmit={handleSubmit}>
            <TitleSignIn>Sign in</TitleSignIn>
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
            <Button type="submit">Continue</Button>
          </ContainerUser>

          <div>
            <p>
              <br />
              <Link to="/register" element={<Register />}>
                Need an Account?
              </Link>
            </p>
          </div>
        </div>
      </ContainerLogin>
    </>
  );
};

const Wrapper = styled.div`
  background: red;
  height: 100vh;
`;
export default LoginForm;
