import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import userPic from '../../assets/images/6.png';

const Posts = () => {
    return (
        <>
            <PostInfo>
                <div>
                    <UserInfoStyle>
                        <div>
                            <UserPic></UserPic>
                        </div>
                        <UserPostInfo>
                            <UserId><button>Kate Shim</button></UserId>
                            <PostDate><button>Feb 5</button></PostDate>
                        </UserPostInfo>
                    </UserInfoStyle>

                    <PostStyle>
                        <div>
                            <PostHone>
                                <Link to="/content">Flask Stripe Sample - Open-Source, simple eCommerce APP</Link>
                            </PostHone>
                        </div>

                        <div>
                            <HashTagUl>
                                <HashTagLi><HashLink>#webdev</HashLink></HashTagLi>
                                <HashTagLi><HashLink>#flask</HashLink></HashTagLi>
                                <HashTagLi><HashLink>#stripe</HashLink></HashTagLi>
                                <HashTagLi><HashLink>#opensource</HashLink></HashTagLi>
                            </HashTagUl>
                        </div>

                        <PostRest>
                            <IconDiv>
                                <IconLink>
                                    <IconA className="crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left" href="/mutafakir/the-open-source-alternative-to-notion-1j3m">
                                        <IconSvg className="crayons-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                                        </IconSvg>
                                        <IconContent title="Number of reactions">282
                                            <IconContent className="hidden s:inline">&nbsp;Reactions</IconContent>
                                        </IconContent>
                                    </IconA>
                                </IconLink>
                                <IconLink>
                                    <IconA className="crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left" href="/mutafakir/the-open-source-alternative-to-notion-1j3m#comments" aria-label="Comments for post ⭐️ The Open Source Alternative To Notion ⭐️ (26)">
                                        <IconSvg className="crayons-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                                        </IconSvg>
                                        <IconContent title="Number of comments">26
                                            <IconContent className="hidden s:inline">&nbsp;Comments</IconContent>
                                        </IconContent>
                                    </IconA>
                                </IconLink>
                            </IconDiv>
                            <div>
                                <SaveWithTime>
                                    <ReadTime>2 min read</ReadTime>
                                    <SaveBtn>Save</SaveBtn>
                                </SaveWithTime>
                            </div>
                        </PostRest>
                    </PostStyle>
                </div>
            </PostInfo>
        </>
    );
};

const PostInfo = styled.div`
    padding: 20px;
`;
const UserInfoStyle = styled.div`
    display: flex;
    margin: 0 0 8px;
    eight: 32px;
`;
const UserPic = styled.img.attrs({
    src: `${userPic}`
})`
    width: 32px;
    height: 32px;
    margin-right: 8px; 
    border-radius: 32px;
`;
const UserPostInfo = styled.div``;
const UserId = styled.div`
    color: #3d3d3d;
    padding: 0 4px 2px 4px;
    font-size: 14px;
    &:hover {
        color: #191919;
        background-color: rgb(0, 0, 0, 0.035);
        border-radius: 0.375rem;
     }
`;
const PostDate = styled.div`
    color: #525252;
    padding: 4px;
    font-size: 12px;
    &:hover {
        color: #171717;
    }
`;
const PostStyle = styled.div`
    padding: 0 0 0 40px;
`;
const PostHone = styled.h3`
    font-size: 24px;
    color: #171717;
    margin-bottom: 0.5rem;
    line-height: 33px;
    &:hover {
        color: #3b49df;
    }
`;
const HashTagUl = styled.ul`
    display: flex;
`;
const HashTagLi = styled.li`
    color: #3d3d3d;
    padding: 4px 7px;
    font-size: 14px;
    margin: 0 0 8px -4px;
    &:hover {
        padding: 3px 6px;
        margin: 0 0 7px -5px;
        color: #404040;
        background: #efefef;
        border-radius: 0.375rem;
        border: 1px solid #d6d6d7;
    } 
`;
const HashLink = styled.a``;
const PostRest = styled.div`
    display: flex;
    align-items: center;
    line-height: 1.25;
    justify-content: space-between;
    margin-right: 0.25rem;
`;
const IconDiv = styled.div`
    margin: -10px;
`;
const IconLink = styled.div`
    padding: 4px 12px 4px 8px;
    float left;
    &:hover {
        color: #404040;
        background: #efefef;
        border-radius: 0.375rem;
     } 
`;
const IconA = styled.a`
    text-decoration: none;
    color: #404040;
`;
const IconSvg = styled.svg`
    vertical-align: middle;
    fill: #404040;
`;
const IconContent = styled.span`
     font-size: 0.875rem;
`;
const SaveWithTime = styled.div``;
const ReadTime = styled.small`
     color: #525252;
     font-size: 11.2px;
     margin: 0 8px 0 0;
`;
const SaveBtn = styled.button`
     color: #3d3d3d;
     background: #d6d6d7;
     padding: 8px 12px;
     font-size: 14px;
     border-radius: 0.375rem;
     border: 0;
     outline: 0;
     &:hover {
        background: #bdbdbd;
        color: #090909;
     }
`;
export default Posts