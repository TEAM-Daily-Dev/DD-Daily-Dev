import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Register from "./Register";

import styled from "styled-components";
import { SectionContainer } from "./StyledComponents/SectionContainer";
import { FormContainer } from "./StyledComponents/FormContainer";
import { InputField, Button } from "./StyledComponents/InputButton";

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

function LoginForm({ logInSucess }) {
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const LOGIN_URL = "http://localhost:3500/user";

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data: userData } = await axios.get(LOGIN_URL);

      userData.map((person) =>
        person.user.toLowerCase() === user.toLowerCase() && person.pwd === pwd
          ? (setUser(""), setPwd(""), logInSucess())
          : setErrMsg("incorrect username or password.")
      );
    } catch (err) {
      if (err.response) {
        setErrMsg("Login Failed");
      }
    }
  };

  return (
    <SectionContainer>
      {errMsg ? <ErrMsg>{errMsg}</ErrMsg> : <OffScreen />}
      <h1 style={{ textAlign: "center" }}>Welcome to DEV Community</h1>

      <FormContainer onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <InputField
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />
        <label htmlFor="password">Password:</label>
        <InputField
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <Button>Continue</Button>
      </FormContainer>

      <p style={{ textAlign: "center" }}>
        <br />
        <Link to="/register" element={<Register />}>
          Need an Account?
        </Link>
      </p>
    </SectionContainer>
  );
}

export default LoginForm;
