<<<<<<< HEAD:src/pages/Login/LoginForm.jsx
import { useRef, useState, useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Register from '../Register';
=======
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import Register from "../Register";

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
} from "./style/Login.styled";
>>>>>>> 로그인 폼 정리 &  로그인 true -> 메인 페이지:src/pages/Login/LoginForm.js

function LoginForm() {
  const userRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

<<<<<<< HEAD:src/pages/Login/LoginForm.jsx
  const LOGIN_URL = 'http://localhost:3500/user';
=======
  const LOGIN_URL = "http://localhost:8000/user";
>>>>>>> 로그인 폼 정리 &  로그인 true -> 메인 페이지:src/pages/Login/LoginForm.js

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
<<<<<<< HEAD:src/pages/Login/LoginForm.jsx
        person.user.toLowerCase() === user.toLowerCase() && person.pwd === pwd
          ? (setUser(''), setPwd(''), logInSucess())
          : setErrMsg('incorrect username or password.'),
=======
        person.username.toLowerCase() === user.toLowerCase() &&
        person.password === pwd
          ? (setUser(""), setPwd(""), navigate("/"))
          : setErrMsg("incorrect username or password.")
>>>>>>> 로그인 폼 정리 &  로그인 true -> 메인 페이지:src/pages/Login/LoginForm.js
      );
    } catch (err) {
      if (err.response) {
        setErrMsg('Login Failed');
      }
    }
  };

  return (
<<<<<<< HEAD:src/pages/Login/LoginForm.jsx
    <div>
      {errMsg ? <ErrMsg>{errMsg}</ErrMsg> : <OffScreen />}
      <h1 style={{ textAlign: 'center' }}>Welcome to DEV Community</h1>

      <div onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" onChange={(e) => setPwd(e.target.value)} value={pwd} required />
        <buton>Continue</buton>
      </div>

      <p style={{ textAlign: 'center' }}>
        <br />
        <Link to="/register" element={<Register />}>
          Need an Account?
        </Link>
      </p>
    </div>
=======
    <>
      <Title>SWFB STUDY</Title>
      <ContainerLogin>
        <div>
          {errMsg ? <ErrMsg>{errMsg}</ErrMsg> : <OffScreen />}

          <ContainerUser onSubmit={handleSubmit}>
            <TitleSignIn>Sign in</TitleSignIn>
            <ContainerInput>
              <label htmlFor="username">아이디</label>
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
>>>>>>> 로그인 폼 정리 &  로그인 true -> 메인 페이지:src/pages/Login/LoginForm.js
  );
}

export default LoginForm;
