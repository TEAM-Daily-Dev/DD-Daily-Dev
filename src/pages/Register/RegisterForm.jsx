import { useRef, useState, useEffect } from 'react';

import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  Button,
  ContainerLogin,
  ContainerUser,
  ErrMsg,
  InputField,
  NeedMoreHelp,
  OffScreen,
  PasswordRequirements,
  Title,
} from 'styles/Auth.styled';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SERVER = 'http://localhost:3500/user';

const RegisterForm = ({ continueRegister }) => {
  const userRef = useRef(); //

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get api -> if user name exists -> show error alerts
      const { data } = await axios.get(SERVER);
      const foundUser = data.find((person) => person.user === user);

      if (!foundUser) {
        await axios.post(SERVER, JSON.stringify({ user, pwd }), {
          headers: { 'Content-Type': 'application/json' },
        });

        continueRegister();
        setUser('');
        setPwd('');
        setMatchPwd('');
      } else {
        setErrMsg('Username Taken');
      }
    } catch (err) {
      setErrMsg('Registration Failed');
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
          <TitleSignUp>Sign Up</TitleSignUp>
          <ContainerUserInfo>
            <ContainerInput>
              <label htmlFor="username">
                Username:
                {!validName || !user ? (
                  <FontAwesomeIcon icon={faTimes} style={{ display: 'none' }} />
                ) : (
                  <FontAwesomeIcon icon={faCheck} style={{ color: 'limegreen' }} />
                )}
              </label>
              <InputField
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off" // dont wanna see the previous values suggested.
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
            </ContainerInput>
            {userFocus && !user && !validName && (
              <PasswordRequirements>
                <FontAwesomeIcon icon={faInfoCircle} />
                <br />
                &nbsp; - 4 to 24 characters.
                <br />
                &nbsp; - Must begin with a letter.
                <br />
                &nbsp; - Letters, numbers, underscores, hyphens allowed.
              </PasswordRequirements>
            )}
            <ContainerInput>
              <label htmlFor="password">
                Password:
                {validPwd ? (
                  <FontAwesomeIcon icon={faCheck} style={{ color: 'limegreen' }} />
                ) : (
                  <FontAwesomeIcon icon={faCheck} style={{ display: 'none' }} />
                )}
                {validPwd || !pwd ? (
                  <FontAwesomeIcon icon={faTimes} style={{ display: 'none' }} />
                ) : (
                  <FontAwesomeIcon icon={faTimes} style={{ color: 'red' }} />
                )}
              </label>
              <InputField
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
            </ContainerInput>
            {pwdFocus && !validPwd && (
              <PasswordRequirements>
                <FontAwesomeIcon icon={faInfoCircle} /> &nbsp;
                <br /> &nbsp; - 8 to 24 characters.
                <br /> &nbsp; - Must include uppercase and lowercase letters, a number and a special character.
                <br /> &nbsp; - Allowed special characters: ! @ # $ %
              </PasswordRequirements>
            )}
            <ContainerInput>
              <label htmlFor="confirm_pwd">
                Confirm Password:
                {validMatch && matchPwd ? (
                  <FontAwesomeIcon icon={faCheck} style={{ color: 'limegreen' }} />
                ) : (
                  <FontAwesomeIcon icon={faCheck} style={{ display: 'none' }} />
                )}
                {validMatch || !matchPwd ? (
                  <FontAwesomeIcon icon={faTimes} style={{ display: 'none' }} />
                ) : (
                  <FontAwesomeIcon icon={faTimes} style={{ color: 'red' }} />
                )}
              </label>
              <InputField
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              {matchFocus && !validMatch && (
                <PasswordRequirements>
                  <FontAwesomeIcon icon={faInfoCircle} /> &nbsp; Must match the first password input field.
                </PasswordRequirements>
              )}
            </ContainerInput>
          </ContainerUserInfo>
          {!validName || !validPwd || !validMatch ? (
            <Button type="button" disabled>
              Sign Up
            </Button>
          ) : (
            <Button type="button"> Sign Up</Button>
          )}
        </ContainerUser>

        <NeedMoreHelp>
          <Link to="/login">
            <span>Already have an account?</span> &nbsp;
            <span style={{ color: '#4646c7' }}>Log in</span>
          </Link>
        </NeedMoreHelp>
      </ContainerLogin>
    </>
  );
};

const ContainerUserInfo = styled.div`
  margin-top: 6rem;
  margin-bottom: 1rem;
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`;

const TitleSignUp = styled.h2`
  color: #000000;
  font-family: Roboto;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  position: absolute;
  top: 210px;
`;

export default RegisterForm;
