import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { parseInt } from "lodash";

import axios from "axios";
import styled from 'styled-components'
import EditFooter from './EditFooter';
import Profile from "../../assets/images/profile.png"
import NavMain from "../NavMain/NavMain";

const EditReply = () => {

  let { setid } = useParams();
  const navi = useNavigate();

  const [loading, setLoading] = useState(true);
  const [newcontent, setNewContent] = useState("");
  const [boardId, setBoardId] = useState("");

  const [newReply, setNewReply] = useState([]);
  const fetchTasks = async () => {
    const ress = await axios('http://localhost:8000/boardsreply')
    const newDa = await ress.data
    return setNewReply(newDa);
  }

  function onChange(e) {
    setNewContent(e.target.value);
  }

  function changeComment() {
    axios({
      method: "PUT",
      url: `http://localhost:8000/boardsreply/${parseInt(setid)}`,
      data: {
        sameId: boardId,
        comment: newcontent,
        like: 0,
      },
    })
    alert("댓글 수정완료.");
    navi(`/${boardId}`);
  }

  useEffect(() => {
    if (newReply.length > 1) {
      setLoading(true);
      setNewContent(newReply.find((a) => a.id === parseInt(setid)).comment);
      setBoardId(newReply.find((a) => a.id === parseInt(setid)).sameId)
    } else if (newReply.length < 1) {
      setLoading(false);
      fetchTasks();
    }
  }, [newReply])

  function returnPage() {
    navi(-1);
  }

  return (
    <>
      <MainStyle>
        <div>
          <NavMain />
        </div>
        <div>
          {loading === true ?
            <>
              <EditingComment>
                <WriteComment>
                  <div>
                    <div>
                      <SubjectH1>Editing comment</SubjectH1>
                    </div>
                  </div>
                  <WriteCommentStart>
                    <div>
                      <UserPic></UserPic>
                    </div>
                    <CommentWriteDiv>
                      <form>
                        <CommentDiv>
                          <TextareaDiv>
                            <CommentTextarea
                              value={newcontent} onChange={onChange}
                            >
                            </CommentTextarea>
                          </TextareaDiv>
                        </CommentDiv>
                        <div>
                          <CommentBtnDiv>
                            <SubmitBtn type="submit" value="수정완료" onClick={changeComment}></SubmitBtn>
                            <DismissBtn onClick={returnPage}>취소</DismissBtn>
                          </CommentBtnDiv>
                        </div>
                      </form>
                    </CommentWriteDiv>
                  </WriteCommentStart>
                </WriteComment>
              </EditingComment>
            </>
            :
            <LodingImg>
              <img className="loading-img hidden" src="https://dev.to/assets/loading-ellipsis-b714cf681fd66c853ff6f03dd161b77aa3c80e03cdc06f478b695f42770421e9.svg" alt="loading" loading="lazy" />
            </LodingImg>
          }
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

const WriteCommentStart = styled.div`
  display: flex;
`;
const EditingComment = styled.div`
  color: #171717;
  font-size: 16px;
  width: 976px;
`;
const SubjectH1 = styled.h1`
  font-size: 30px;
  color: #090909;
  font-weight: 700;
  margin: 0 0 24px;
`;
const WriteComment = styled.div`
  padding: 32px 64px;
  background: #ffffff;
  border-radius: 0.375rem;
  width: 976px;
`;
const UserPic = styled.img.attrs({
  src: `${Profile}`
})`
  width: 32px;
  height: 32px;
  margin-right: 8px; 
  border-radius: 32px;
  display: inline-block;
  vertical-align: bottom;
`;
const CommentWriteDiv = styled.div`
  width: 100%;
`;
const CommentDiv = styled.div`
  border-radius: 0.375rem;
  border: 1px solid #d4d4d4;
  margin-bottom: 12px;
  &:focus-within {
    border-color: #3b49df;
    0 0 0 1px #3b49df;
  }
`;
const TextareaDiv = styled.div`
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;
const CommentTextarea = styled.textarea`
  padding: 8px;
  margin: 0;
  outline: none;
  width: -webkit-fill-available;
  box-shadow: none;
  border: none;
  transition: none 0s ease 0s; 
  height: 129px;
  background: transparent;
  &:hover {
    resize: none;
  }
`;
const CommentBtnDiv = styled.div`
  margin-bottom: 16px;
`;
const SubmitBtn = styled.input`
  color: #f9f9f9;
  font-size: 16px;
  background: #3b49df;
  margin: 0 8px 0 0;
  padding: 8px 16px;
  border: 0;
  outline: 0;
  border-radius: 0.375rem;
  &:hover {
    background-color: #2f3ab2;
    border-color: transparent;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    color: #f9f9f9;
  }
`;
const DismissBtn = styled.a`
  color: #3d3d3d;
  font-size: 16px;
  padding: 8px 16px;
  &:hover {
    border-radius: 0.375rem;
    color: #090909;
    background: #00000009;
  }
`;
const LodingImg = styled.div`
margin: 0 auto;
display: table;
`;
export default EditReply;

{/* <div>
{loading === true
  ? <form>
    <input value={newcontent} onChange={onChange} />
    <input type="submit" value="Submit" onClick={changeComment} />
  </form>
  : <h3>안녕못해</h3>
}
</div> */}
