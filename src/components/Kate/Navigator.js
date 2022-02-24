import React from 'react';
import MainMenu from './postMain/PostMain';
import NavMain from "./navMain/NavMain";
import AsideMain from "../components/rightSide/AsideMain";

import styled from "styled-components";

const Navigator = () => {
    return (
        <>
            <MainStyle>
                <div>
                    <NavMain />
                </div> 
                {/* // <!-- left end--> */}     
                <div>
                    <MainMenu />
                </div>
                {/* // <!-- Main end--> */}     
                <div>
                    <AsideMain />
                </div>
                {/* // <!-- Right end--> */}     
            </MainStyle>
        </>
    )
}

const MainStyle = styled.div`
    display: flex;
`;
export default Navigator;
