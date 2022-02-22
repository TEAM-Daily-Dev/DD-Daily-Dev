import styled from "styled-components";

export const FormContainer = styled.input`
  font-family: "Nunito", sans-serif;
  font-size: 22px;
  padding: 0.8rem;
  border-radius: 0.5rem;

  border: 1px solid #d7d7d7;
`;

export const Button = styled.button`
  border: none;
  background-color: rgb(59, 73, 223);
  border-radius: 0.5rem;
  color: #ffff;
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  font-size: 22px;
  padding: 20px 0;
  margin-top: 30px;
  outline: none;
  font-size: 20px;
  font-weight: 350;
  &:hover {
    background-color: rgb(10 26 193);
    transition: 0.3s;
  }
  &:disabled {
    background-color: #cccccc;
    color: #666666;
  }
`;

export const InputField = styled.input`
  font-family: "Nunito", sans-serif;
  font-size: 22px;
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid rgb(153, 153, 153);
`;
