import React from "react";
import { Link } from "react-router-dom";

function LoginSuccess() {
  return (
    <section>
      <h1>You are logged in!</h1>
      <br />
      <p>
        <Link to="/">Go to Home</Link>
      </p>
    </section>
  );
}

export default LoginSuccess;
