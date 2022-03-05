import { useRef, useState, useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Register from '../Register';

function LoginForm({ logInSucess }) {
  const userRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const LOGIN_URL = 'http://localhost:3500/user';

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
        person.user.toLowerCase() === user.toLowerCase() && person.pwd === pwd
          ? (setUser(''), setPwd(''), logInSucess())
          : setErrMsg('incorrect username or password.'),
      );
    } catch (err) {
      if (err.response) {
        setErrMsg('Login Failed');
      }
    }
  };

  return (
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
  );
}

// styled plus <tag>
const ErrMsg = styled.p`
  text-align: center;
  background-color: lightpink;
  color: firebrick;
  font-weight: bold;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

const OffScreen = styled.p`
  position: absolute;
  left: -9999px;
`;

export default LoginForm;