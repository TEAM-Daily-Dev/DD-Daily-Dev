import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const BackDiv = styled.div`
background-color:#EFEFEF;
width:100%;
height:1000px;
position:relative;
display: flex;
align-items: center;
justify-content: center;
padding: 300px;
`;

const HeaderDiv = styled.div`
width:60%;
height:80%;
background:#ffffff;
position:absolute;
margin-top:50px;
padding: 50px;
`;

const TextAreaFirst = styled.textarea`
border: none;
resize: none;
outline:none;
width:100%;
height: ${props => props.height};
&::placeholder{
    font-size:28px;
    font-weight:700;
    color:gery;
}
`;
const DivButton = styled.button`
background-color:transparent;
border:none;
`;
const ButtonA = styled.a`
background-color:#FFFFFF;
color:#3d3d3d;
display:flex;
width:100%;
border:2px solid #717171;
border-radius:5px;
align-items: center;
justify-content: center;
font-size:16px;
margin: 0 0 5px -7px;
padding : 5px;
`;
const ButtonB = styled.a`
background-color:#3b49df;
color:#f9f9f9;
display:flex;
width:83px;
height:40px;
border-radius:5px;
align-items: center;
justify-content: center;
font-size:16px;
margin: 0 0 0 -7px;
`;

const ButtonDiv = styled.div`
display:fles;
align-items: center;
justify-content: center;
`;

function Update({ newDatas, setNewDatas, fetchData }) {
    console.log(newDatas);
    let navi = useNavigate();
    let { setid } = useParams();

    const [newTitle, setNewTitle] = useState(newDatas.find((a) => { return a.id === parseInt(setid) }).title);
    const [newcontent, setNewContent] = useState(newDatas.find((a) => { return a.id === parseInt(setid) }).contents);

    function onChange(e) {
        const { value } = e.target;
        setNewTitle(value);
    }

    function onChange2(e) {
        const { value } = e.target;
        setNewContent(value);
    }

    function addTitle(event) {
        event.preventDefault();
        fetch(`http://localhost:3001/boards/${setid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: parseInt(setid),
                title: newTitle,
                contents: newcontent,
            }),
        }).then(res => {
            if (res.ok) {
                alert("생성이 완료되었습니다.");
                navi(`/${setid}`);
            }
        })
    }
    function returnPage() {
        navi(-1);
    }


    useEffect(() => {
        fetchData();
    }, [])

    return (
        <BackDiv>
            <HeaderDiv>
                <DivButton><ButtonA href="#">Add a cover image</ButtonA></DivButton>
                <TextAreaFirst
                    height="auto"
                    type='text'
                    placeholder='제목'
                    value={newTitle}
                    onChange={onChange} />
                <hr></hr>
                <TextAreaFirst
                    height="80%"
                    className="text-area"
                    placeholder='내용'
                    value={newcontent}
                    onChange={onChange2} />
                <ButtonDiv>
                    <DivButton><ButtonB href="#" onClick={addTitle}>Publish</ButtonB></DivButton>
                    <DivButton><ButtonB href="#" onClick={returnPage}>Cancel</ButtonB></DivButton>
                </ButtonDiv>
            </HeaderDiv>
        </BackDiv>
    );
};

export default Update;