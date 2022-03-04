import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import { Link } from "react-router-dom";
import Login from "../../pages/Login";

import styled, { css } from "styled-components";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

// const SERVER = "http://localhost:3500/user";
// const SERVER = "https://daily-dev-2022.herokuapp.com/api/auth/signup";
const SERVER = "https://daily-dev-2022.herokuapp.com/api/auth/signup";

function RegisterForm({ continueRegister, main }) {
  const styles = {
    main,
  };

  const userRef = useRef(); //

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

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
    setErrMsg("");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get api -> if user name exists -> show error alerts
      const { data } = await axios.get(SERVER);
      const foundUser = data.find((person) => person.user === user);

      // https://daily-dev-2022.herokuapp.com/api/#/%EC%9C%A0%EC%A0%80/AuthController_signUp
      if (!foundUser) {
        await axios.post(SERVER, JSON.stringify({ user, pwd }), {
          headers: { "Content-Type": "application/json" },
        });

        continueRegister();
        setUser("");
        setPwd("");
        setMatchPwd("");
      } else {
        setErrMsg("Username Taken");
      }
    } catch (err) {
      setErrMsg("Registration Failed");
    }
  };

  return (
    <>
      {errMsg && <div>{errMsg}</div>}
      <h1 style={{ textAlign: "center" }}>Welcome to DEV Community</h1>
      <div onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          {!validName || !user ? (
            <FontAwesomeIcon icon={faTimes} style={{ display: "none" }} />
          ) : (
            <FontAwesomeIcon icon={faCheck} style={{ color: "limegreen" }} />
          )}
        </label>
        <input
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
        {userFocus && !user && !validName ? (
          <div>
            <FontAwesomeIcon icon={faInfoCircle} />
            <br />
            &nbsp; - 4 to 24 characters.
            <br />
            &nbsp; - Must begin with a letter.
            <br />
            &nbsp; - Letters, numbers, underscores, hyphens allowed.
          </div>
        ) : (
          <span></span>
        )}

        <label htmlFor="password">
          Password:
          {validPwd ? (
            <FontAwesomeIcon icon={faCheck} style={{ color: "limegreen" }} />
          ) : (
            <FontAwesomeIcon icon={faCheck} style={{ display: "none" }} />
          )}
          {validPwd || !pwd ? (
            <FontAwesomeIcon icon={faTimes} style={{ display: "none" }} />
          ) : (
            <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} />
          )}
        </label>

        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        />
        {pwdFocus && !validPwd ? (
          <div>
            <FontAwesomeIcon icon={faInfoCircle} /> &nbsp;
            <br /> &nbsp; - 8 to 24 characters.
            <br /> &nbsp; - Must include uppercase and lowercase letters, a
            number and a special character.
            <br /> &nbsp; - Allowed special characters: ! @ # $ %
          </div>
        ) : (
          <span></span>
        )}

        <label htmlFor="confirm_pwd">
          Confirm Password:
          {validMatch && matchPwd ? (
            <FontAwesomeIcon icon={faCheck} style={{ color: "limegreen" }} />
          ) : (
            <FontAwesomeIcon icon={faCheck} style={{ display: "none" }} />
          )}
          {validMatch || !matchPwd ? (
            <FontAwesomeIcon icon={faTimes} style={{ display: "none" }} />
          ) : (
            <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} />
          )}
        </label>
        <input
          type="password"
          id="confirm_pwd"
          onChange={(e) => setMatchPwd(e.target.value)}
          value={matchPwd}
          required
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
        />
        {matchFocus && !validMatch ? (
          <div>
            {" "}
            <FontAwesomeIcon icon={faInfoCircle} /> &nbsp; Must match the first
            password input field.
          </div>
        ) : (
          <span></span>
        )}
        {!validName || !validPwd || !validMatch ? (
          <button disabled>Sign Up</button>
        ) : (
          <button> Sign Up</button>
        )}
      </div>

      <Link to="/login" element={<Login />}>
        <span>Already have an account?</span> &nbsp;
        <span style={{ color: "#4646c7" }}>Log in</span>
      </Link>
    </>
  );
}

const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
`;

/* display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #7d50ff 0%, #6153c9 100%); */

const Wrapper = styled.div`
  ${(props) =>
    props.main &&
    css`
      display: flex;
      flex-direction: column;
      background: linear-gradient(180deg, #7d50ff 0%, #6153c9 100%);
    `};
`;

// const SignUpBtn = styled(Link)`
//   height: 40px;
//   color: #3b49df;
//   border: 1px solid #3b49df;
//   padding: 7px 15px;
//   font-size: 16px;
//   font-weight: 500;
//   line-height: 24px;
//   border-radius: 6px;
//   margin-bottom: 4px;

//   ${(props) =>
//     props.top &&
//     css`
//       order: 2;
//     `};

//   &:hover {
//     background: #3b49df;
//     color: #fff;
//   }
// `;

// const LogInBtn = styled(Link)`
//   height: 40px;
//   border: none;
//   padding: 8px 16px;
//   font-size: 16px;
//   line-height: 24px;
//   border-radius: 6px;
//   color: #404040;

//   ${(props) =>
//     props.top &&
//     css`
//       order: 1;
//     `};

//   &:hover {
//     color: #2f3ab2;
//     background: #ebecfc;
//     text-decoration: underline solid #2f3ab2;
//   }

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

export default RegisterForm;
