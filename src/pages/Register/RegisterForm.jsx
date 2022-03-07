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

const SERVER = 'http://localhost:8000/user';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

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

      const foundUser = data.find((person) => person.username.toLowerCase() === user.toLowerCase());

      console.log(foundUser);

      if (!foundUser) {
        await axios.post(SERVER, JSON.stringify({ username: user, password: pwd }), {
          headers: { 'Content-Type': 'application/json' },
        });

        continueRegister();
        setUser('');
        setPwd('');
        setMatchPwd('');
      } else {
        setErrMsg(`"${user}" 이미 사용된 사용자 ID 입니다.`);
        userRef.current.focus();
      }
    } catch (err) {
      setErrMsg('다시 시도해보세요.');
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
                사용자 ID:
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
                &nbsp; * 4~24자
                <br />
                &nbsp; * 문자로 시작해야함.
                <br />
                &nbsp; * 문자, 숫자, _ , - 사용가능
              </PasswordRequirements>
            )}
            <ContainerInput>
              <label htmlFor="password">
                비밀번호:
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
                autoComplete="off"
                value={pwd}
                required
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
            </ContainerInput>
            {pwdFocus && !validPwd && (
              <PasswordRequirements>
                <FontAwesomeIcon icon={faInfoCircle} /> &nbsp;
                <br /> &nbsp; * 8~24자
                <br /> &nbsp; * 대문자, 소문자, 숫자, 특수문자 포함해야함.
                <br /> &nbsp; * 가능 특수문자: ! @ # $ %
              </PasswordRequirements>
            )}
            <ContainerInput>
              <label htmlFor="confirm_pwd">
                비밀번호 재확인:
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
                autoComplete="off"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              {matchFocus && !validMatch && (
                <PasswordRequirements>
                  <FontAwesomeIcon icon={faInfoCircle} /> &nbsp; 비밀번호 매치 시켜주세요.
                </PasswordRequirements>
              )}
            </ContainerInput>
          </ContainerUserInfo>
          {!validName || !validPwd || !validMatch ? (
            <Button type="submit" disabled>
              Sign Up
            </Button>
          ) : (
            <Button type="submit"> Sign Up </Button>
          )}
        </ContainerUser>

        <NeedMoreHelp>
          <Link to="/login">
            <span>Already have an account?</span> &nbsp;
            <span style={{ color: '#7d50ff' }}>Log in</span>
          </Link>
        </NeedMoreHelp>
      </ContainerLogin>
    </>
  );
};

const ContainerUserInfo = styled.div`
  margin-top: 3rem;
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
`;

export default RegisterForm;
