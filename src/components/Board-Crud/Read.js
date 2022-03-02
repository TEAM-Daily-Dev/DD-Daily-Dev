import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Creply from "../reply/Creply";
import styled from "styled-components";
import Profile from "../img/profile.png"
import axios from "axios";
import EditFooter from '../reply/EditFooter';
import NavMain from "../Kate/navMain/NavMain";

function Read({ newDatas, fetchData }) {

    const [newReply, setNewReply] = useState([]);
    const fetchTasks = async () => {
        const res = await axios('http://localhost:8000/boardsreply')
        const newData = await res.data
        return setNewReply(newData)
    }
    let { setid } = useParams();
    let [put, setPut] = useState(`/putndelete/${setid}`);
    const navi = useNavigate();
    const [checkUseEffect, setCheckUseEffect] = useState(true);

    function removeText() {
        if (newDatas.length > 0) {
            if (window.confirm("삭제 하시겠습니까?")) {
                axios(
                    {
                        method: 'DELETE',
                        url: `http://localhost:8000/boards/${parseInt(setid)}`,
                    }).then(() => {
                        alert("삭제되었습니다.");
                        navi('/');
                    }).catch(err => {
                        return alert(err.message);
                    })
            }
        }
    }
    function pre() {
        navi(-1);
    }

    useEffect(() => {
        fetchTasks(); fetchData();
    }, [newDatas.title, newDatas.content, checkUseEffect])


    return (
    <>
    <MainStyle>
        <div>
            <NavMain />
        </div>
        <div>
        <BackDiv>
            <HeaderDiv>
                <FirstDiv>
                    <SecondDiv>
                        {newDatas.length > 0 &&
                            <HeaderH1>{newDatas.find(a => a.id === parseInt(setid)).title}</HeaderH1>}
                    </SecondDiv>
                    <ThirdDiv>
                        <Link to={put}>
                            <ThirdDivA href="#">Edit</ThirdDivA>
                        </Link>
                        <ThirdDivA href="#" onClick={removeText}>Delete</ThirdDivA>
                        <ThirdDivA href="#" onClick={pre}>Pre</ThirdDivA>
                    </ThirdDiv>
                </FirstDiv>
                <IDDiv>
                    <ProfileImg src={Profile}></ProfileImg>
                    <IdPost>
                        <IdA href="#">sni424</IdA>
                        <PostPtag>Posted on 2월23일</PostPtag>
                    </IdPost>
                </IDDiv>
                <LanguageTag>
                    <LanguageA href="#" background_color={"rgba(0, 0, 0, 0.1)"}>
                        <SharpSpan color="orange">#</SharpSpan>Java
                    </LanguageA>
                    <LanguageA href="#" background_color="green">
                        <SharpSpan color="green">#</SharpSpan>JavaScript
                    </LanguageA>
                    <LanguageA href="#" background_color="blue">
                        <SharpSpan color="blue">#</SharpSpan>Python
                    </LanguageA>
                </LanguageTag>
                <>
                    <ContentP>
                        {newDatas.length > 0 &&
                            <>{newDatas.find(x => x.id === parseInt(setid)).contents}</>}
                    </ContentP>
                </>
                <Hr></Hr>
                <Creply setCheckUseEffect={setCheckUseEffect} checkUseEffect={checkUseEffect} setid={setid} newReply={newReply} setNewReply={setNewReply}></Creply>
                {/* {newReply.length > 0 &&
                    newReply.map((a, i) => {
                        return <ReplyShow setNewReply={setNewReply} newReply={newReply} setCheckUseEffect={setCheckUseEffect} checkUseEffect={checkUseEffect} setid={setid} key={i} index={i} sameId={a.sameId} comment={a.comment} newid={a.id} like={a.like}></ReplyShow>
                    })
                } */}
            </HeaderDiv>
        </BackDiv>
        </div>
    </MainStyle>
    <EditFooter />

    </>
    );
};
const MainStyle = styled.div`
  display: flex;
  width: 1248px;
  margin: 0 auto;
`;

// width:100%;
// height:1000px;
// position:relative;

const BackDiv = styled.div`
background-color:#EFEFEF;
display: flex;
align-items: center;
justify-content: center;
padding: 16px;
width: 976px;
`;
// margin: 0 147px;
// height:95%;
// position:absolute;
// margin-top:50px;
const HeaderDiv = styled.div`

background:#ffffff;
padding: 50px;
`;
const FirstDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
const SecondDiv = styled.div`
display: flex;
`
const IDDiv = styled.div`
display:flex;
`;
const ProfileImg = styled.img`
border-radius: 70%;
width: 40px;
height: 40px;
`;
const IdPost = styled.div`
padding-left: 10px;
`;
const IdA = styled.a`
color: #404040;
font-size: 16px;
font-weight: 700;
&:hover {
    color: blue;
  }
`;
const PostPtag = styled.p`
color: #717171;
font-size: 12px;
margin-top: 2px;
font-weight: 500;
`;

const ThirdDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background: #F59E0B1A;
padding : 4px;
border: 1px solid #F59E0B1A;
border-radius:5px;
`;
const ThirdDivA = styled.a`
color: #3d3d3d;
font-size: 14px;
padding: 4px 8px;
&:hover {
    background-color: white;
    color: black;
  }
`;
const HeaderH1 = styled.h1`
color:#171717;
font-weight: 600;
margin-bottom: 8px;
`;
const LanguageTag = styled.div`
display: flex;
align-items: center;
justify-content: start;
`;
const LanguageA = styled.a`
padding: 4px 8px;
font-size: 16px;
&:hover {
    background-color: ${props => props.background_color};
    border-radius: 3px;
    opacity: 0.7;
  }
`;
const SharpSpan = styled.span`
color:${props => props.color}
`;
const ContentP = styled.p`
font-weight: 500;
`;
const Hr = styled.hr`
width:100%;
`;

export default Read;

