import React, { useState } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import Profile from '../../assets/images/profile.png';
import EditReply from './EditReply';

const ReplyShow = ({
  setNewReply,
  newReply,
  setid,
  sameId,
  newid,
  index,
  comment,
  replyUrl,
  setCheckUseEffect,
  checkUseEffect,
  loginUser,
  loginid,
}) => {
  const [showButton, setShowButton] = useState(false);
  const [edit, setEdit] = useState(false);

  const removeReply = (e) => {
    const { value } = e.target;
    if (newReply.length > 0) {
      if (window.confirm('삭제 하시겠습니까?')) {
        axios({
          method: 'DELETE',
          url: `${replyUrl}/${parseInt(newReply[index].id, 10)}`,
        })
          .then(() => {
            setShowButton(!showButton);
            setNewReply(newReply.filter((a) => a.id !== parseInt(value, 10)));
          })
          .catch((err) => {
            return alert(err.message);
          });
      }
    }
  };

  const ShowTwoButton = () => {
    setShowButton(!showButton);
  };

  const showEdit = () => {
    setEdit(!edit);
    setShowButton(!showButton);
  };

  return (
    <div>
      {sameId === parseInt(setid, 10) && (
        <>
          {/* comments from people */}
          <DoneComment>
            <div>
              <div>
                <UserPic />
              </div>
            </div>
            <CommentDoneBorderSize>
              <div>
                {/* 댓글 표시되는 부분  */}
                <CommentDoneSection>
                  <UserInfoDiv>
                    <UserInfo>
                      <UserNameBtn type="button">{loginid}</UserNameBtn>
                      <UserInfoSpan> • </UserInfoSpan>
                      <CommentTime>Feb 23</CommentTime>
                    </UserInfo>
                    <div>
                      {/* 댓글 더보기옵션 버튼 클릭 토글 */}
                      {loginUser === loginid && (
                        <span>
                          <MoreMenus onClick={ShowTwoButton}>
                            <MoreIcon
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              role="img"
                              aria-labelledby="a32utvszhlbfuu9s4mmda4ehwi4to6yk"
                              className="crayons-icon pointer-events-none"
                            >
                              <title id="a32utvszhlbfuu9s4mmda4ehwi4to6yk">Dropdown menu</title>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                              />
                            </MoreIcon>
                          </MoreMenus>
                        </span>
                      )}
                    </div>

                    {/* 댓글 더보기옵션 버튼 클릭시 수정 삭제 보여주고 숨기기 */}
                    {showButton === true && (
                      <MoreHiddenMenuDiv>
                        <MoreCommBtnDiv>
                          <div>
                            <MoreMenus value={newid} onClick={removeReply}>
                              DELETE
                            </MoreMenus>
                          </div>
                          <div>
                            <MoreMenus onClick={showEdit}>EDIT</MoreMenus>
                          </div>
                        </MoreCommBtnDiv>
                      </MoreHiddenMenuDiv>
                    )}
                  </UserInfoDiv>
                  <CommentContent>
                    <p>{comment}</p>
                  </CommentContent>
                </CommentDoneSection>
                {edit === true && (
                  <EditReply
                    replyUrl={replyUrl}
                    replyId={newid}
                    newReply={newReply}
                    setEdit={setEdit}
                    sameId={sameId}
                    setCheckUseEffect={setCheckUseEffect}
                    checkUseEffect={checkUseEffect}
                    loginid={loginid}
                  />
                )}
              </div>
            </CommentDoneBorderSize>
          </DoneComment>
        </>
      )}
    </div>
  );
};

const UserPic = styled.img.attrs({
  src: `${Profile}`,
})`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  border-radius: 32px;
  display: inline-block;
  vertical-align: bottom;
`;
const CommentFoldIcon = styled.svg`
  fill: #717171;
`;
const DoneComment = styled.div`
  display: flex;
  margin-bottom: 24px;
  &:hover {
    ${CommentFoldIcon} {
      fill: #171717;
    }
  }
`;
const CommentDoneBorderSize = styled.div`
  width: -webkit-fill-available;
`;
const CommentDoneSection = styled.div`
  border-radius: 0.375rem;
  border: 1px solid #d4d4d4;
  color: #171717;
  font-size: 16px;
  background: #ffffff;
  padding: 4px;
`;
const UserInfoDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px 0;
`;
const UserInfo = styled.div`
  color: #171717;
  font-size: 16px;
`;
const UserNameBtn = styled.button`
  background-color: transparent;
  color: #3d3d3d;
  font-size: 16px;
  margin: -4px 0 -4px -4px;
  padding: 4px;
  border: 0;
  outline: 0;
  &:hover {
    background-color: rgba(0, 0, 0, 0.035);
    border-color: transparent;
    box-shadow: none;
    color: #090909;
    border-radius: 0.375rem;
  }
`;
const UserInfoSpan = styled.span`
  color: #bdbdbd;
  font-size: 16px;
  padding: 0 8px 0 0;
`;
const CommentTime = styled.time`
  color: #717171;
  font-size: 14px;
`;
const MoreCommBtnDiv = styled.ul`
  margin: 0;
  padding: 0;
`;
const MoreIcon = styled.svg`
  fill: #3d3d3d;
  padding: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.035);
    color: #090909;
    border-radius: 0.375rem;
  }
`;
const MoreHiddenMenuDiv = styled.div`
  position: absolute;
  top: 100%;
  right: 0%;
  color: #171717;
  font-size: 16px;
  background: #ffffff;
  margin: 4px 0 0;
  padding: 8px;
  border-radius: 0.375rem;
  max-width: 360px;
  min-width: 250px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  border: 1px solid #d4d4d4;
`;
const MoreMenus = styled.button`
  color: #404040;
  font-size: 16px;
  padding: 8px;
  width: 230px;
  border-radius: 0.375rem;
  &:hover {
    color: #2f3ab2;
    background: rgba(59, 73, 223, 0.1);
  }
`;
const CommentContent = styled.div`
  font-size: 18px;
  margin: 8px 0 16px;
  padding: 0 12px;
  line-height: 28px;
`;
export default ReplyShow;
