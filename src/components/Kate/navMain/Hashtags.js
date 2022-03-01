import React from 'react';
import styled from 'styled-components';

const Hashtags = () => {
    return (
        <>
            <NavScroll>
                <HashTagSub>Popular Tags</HashTagSub>
                <UlStyle>
                    <LiStyle><NavLink href="#">#javascript</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#webdev</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#beginners</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#programming</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#tutorial</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#react</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#python</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#productivity</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#css</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#devops</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#career</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#opensource</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#discuss</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#html</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#node</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#codenewbie</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#aws</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#java</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#typescript</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#android</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#github</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#testing</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#security</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#news</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#docker</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#cloud</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#linux</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#php</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#azure</NavLink></LiStyle>
                    <LiStyle><NavLink href="#">#machinelearning</NavLink></LiStyle>
                </UlStyle>
            </NavScroll>
        </>
    );
};
const NavScroll = styled.nav`
    margin-bottom: 24px;
`;
const NavLink = styled.a`
    text-decoration: none;
    color: #404040;
`;
const UlStyle = styled.ul`
overflow: auto;
max-height: 42vh;
    list-style: none; 
    padding: 0;
    margin: 0;
`;
const LiStyle = styled.li`
    padding: 8px 16px;
    height: 30px;
    border: none;
    font-size: 16px;
    line-height: 24px;
    border-radius: 6px;
    color: #404040;
    cursor: pointer;
    &:hover {
      color: #2f3ab2;
      background: #ebecfc;
      text-decoration: underline;
    }
    @media screen and (max-width: 768px) {
      display: none;
`;
const HashTagSub = styled.h3`
    padding: 8px;
    color: #242424;
    font-size: 16px;
    font-weight: 700;
`;
export default Hashtags;