import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function RegisterSuccess() {
  return (
    <section>
      <h1>Success!</h1>
      <p>
        <Link to="/login" element={<Login />}>
          Log in
        </Link>
      </p>
    </section>
  );
}

export default RegisterSuccess;
