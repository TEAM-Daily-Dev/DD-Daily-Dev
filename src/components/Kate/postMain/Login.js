import React from "react";
import styled from 'styled-components';

import loginLogoImg from "../image/devlogo-pwa-512.png"

const Login = () => {
    return (
        <>
            <div>
                <LoginContent>
                    <LoginImgDiv>
                        <LoginImg></LoginImg>
                    </LoginImgDiv>
                    <div>
                        <IntroTitle><TitleLink>DEV Community</TitleLink> is a community of 795,483 amazing developers</IntroTitle>    
                        <LoginP>We're a place where coders share, stay up-to-date and grow their careers.</LoginP>
                    </div>
                </LoginContent>
                <LoginButtons>
                    <ButtonDiv>
                        <CreateButton>Create account</CreateButton>
                    </ButtonDiv>
                    <ButtonDiv>
                        <LoginButton>Log in</LoginButton>
                    </ButtonDiv>
                </LoginButtons>
            </div>
        </>
    );
};
const LoginContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
`;
const LoginImgDiv = styled.div`
    height: 80px;
    width: 80px;
    margin: 0 32px 8px 0;
`;
const LoginImg = styled.img.attrs({
    src: `${loginLogoImg}`
})`
    border-radius: 0.375rem;
    transform: rotate(-10deg);
    height: auto;
    width: 100%;
`;
const IntroTitle = styled.h2`
    font-size: 30px;
    font-weight: 700;
    color: #171717;
    line-height: 1.25;
    margin-bottom: 16px;
`;
const TitleLink = styled.a`
    color: #3b49df;
    &:hover {
        color: #2f3ab2;
        text-decoration: underline solid #2f3ab2;
    }
`;
const LoginP = styled.p`
    color:#404040;
    font-size: 16px;
`;
const LoginButtons = styled.div`
    text-align: center;
    font-size: 100%;
`;
const ButtonDiv = styled.div`
    margin-top: 3px;
`;
const CreateButton = styled.button`
    padding: 8px 16px;
    background: #3b49df;
    color: #f9f9f9;
    border-radius: 0.375rem;
    border: 0;
    outline: 0;
    width: 145.52px;
    height: 39.98px;
    &:Hover {
        background: #2f3ab2;
    }
`;
const LoginButton = styled.button`
    color: #2f3ab2;
    border: 0;
    outline: 0;
    padding 8px 16px;
    background-color: transparent;
    border-radius: 0.375rem;
    width: 145.52px;
    height: 39.98px;
    &:hover {
        background: rgba(0,0,0,0.035);
    }
`;
export default Login;

// import logoImg from "../../image/devlogo.png"

// const LoginImg = styled.img.attrs({
//     src: `${logoImg}`
// })`
//     border-radius: 0.375rem;
//     transform: rotate(-10deg);
//     height: auto;
//     width: 100%;
// `;