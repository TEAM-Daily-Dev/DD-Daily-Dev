import styled from 'styled-components';

// export const Container = styled.body`
//   background: linear-gradient(180deg, #7d50ff 0%, #6153c9 100%);
// `;

export const ContainerLogin = styled.div`
  background: #ffffff;
  border: 1px solid #e3e3e3;
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 584px;
  height: 658px;
  left: 572px;
  top: 223px;
`;

export const ContainerUser = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;
`;

export const SignInInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 60px;
`;

export const SignUpInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`;

export const InputField = styled.input`
  border: 1px solid #ced7e1;
  border-radius: 6px;
  font-size: 14px;
  margin-top: 15px;
  width: 488px;
  height: 40px;
  padding: 0.8rem;

  &:focus {
    outline: none;
    border: 1px solid #7d50ff;
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const PasswordRequirements = styled.div`
  position: relative;
  width: 488px;
  margin-top: 10px;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 32px;
  font-weight: 400;
  line-height: 54px;
  text-align: center;
  margin-bottom: 16px;
`;

export const TitleSignIn = styled.h2`
  position: relative;
  color: #000000;
  font-family: Roboto;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  position: absolute;
  top: 210px;
`;

export const ErrMsg = styled.p`
  background-color: lightpink;
  color: firebrick;
  text-align: center;
  font-weight: bold;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const OffScreen = styled.p`
  position: absolute;
  left: -9999px;
`;

export const Button = styled.button`
  background: linear-gradient(270.04deg, #7d50ff 30.58%, #6153c9 99.66%);
  border-radius: 6px;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  line-height: 27px;
  margin-top: 30px;
  width: 488px;
  height: 55px;
  text-align: center;
`;

export const NeedMoreHelp = styled.div`
  /* margin-top: 4rem; */
  position: relative;
  bottom: -1.5rem;
`;
