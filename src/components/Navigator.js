import React from "react";
import styled from "styled-components";
import MainMenu from "./postMain/PostMain";
import NavMain from "./navMain/NavMain";
import AsideMain from "pages/Main/AsideMain";

const Navigator = () => {
  return (
    <>
      <MainStyle>
        <NavMain />
        {/* // <!-- left end--> */}
        <MainMenu />
        {/* // <!-- Main end--> */}
        <AsideMain />
        {/* // <!-- Right end--> */}
      </MainStyle>
    </>
  );
};

const MainStyle = styled.div`
  display: flex;
  width: 1248px;
  margin: 0 auto;
`;

export default Navigator;
