import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AsideMainRight = styled.aside`
  width: 1fr;
  padding: 16px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const AsideSection = styled.section`
  border-radius: 0.375rem;
  background: #fafafa;
`;
const AsideSectionBotton = styled.section`
  border-bottom: 1px solid #bdbdbd;
  padding: 0 16px 16px 16px;
  margin: 8px 0 16px 0;
`;
const AsideHeader = styled.header`
  padding: 12px 16px;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AsideHeaderBottom = styled.header`
  padding: 8px 0;
  color: #171717;
  font-size: 14.4px;
  font-weight: bold;
`;
const AsideH3 = styled.h3`
  color: #242424;
  font-size: 20px;
  font-weight: 700;
  border-bottom: 1px solid rgb(245 245 245);
  outline: none;
`;
const HelpButton = styled.p`
  border: none;
`;

const SeeAllLink = styled.a`
  font-weight: 500;
  color: #3b49df;
  cursor: pointer;
`;
const AsideContent = styled.div`
  cursor: pointer;
  padding: 16px;
  border-bottom: 1px solid #f5f5f5;
  &:hover {
    background: #ffffff;
  }
`;
const AsideContentLink = styled.a``;
const AsideContentSeb = styled.div`
  color: #404040;
  margin-bottom: 3px;
  line-height: 20px;
  &:hover {
    color: #3b49df;
  }
`;
const AsideContentSebBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
`;

const PurposeOfContent = styled.div`
  padding: ${(props) => (props.isFinal ? '3px' : '4px 0 0 0')};
  color: #717171;
  font-size: 0.875rem;
`;

const AsideNewContent = styled.span`
  background: #fcd34d;
  color: #78350f;
  min-width: 0.5rem;
  line-height: 1;
  text-align: center;
  padding: 3px;

  border-radius: 0.375rem;
`;
const CreateListing = styled.a`
  font-weight: 600;
  color: #404040;
  &:hover {
    color: #2f3ab2;
    cursor: pointer;
  }
`;
const AsideCreateListing = styled.div`
  padding: 12px;
  text-align: center !important;
`;
const Margin = styled.div`
  margin: 16px 0 0;
`;

const AsideMain = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments?postId=1').then(({ data }) => setDatas(data.splice(0, 4)));
  }, []);

  return (
    <>
      <AsideMainRight>
        <AsideSection>
          <AsideHeader>
            <AsideH3>Listing</AsideH3>
            <div>
              <SeeAllLink>See all</SeeAllLink>
            </div>
          </AsideHeader>

          <div>
            {datas.map((data, i) => {
              return (
                <AsideContent>
                  <datas key={i}>
                    <AsideContentSeb>{data.name}</AsideContentSeb>
                    <PurposeOfContent>{data.id}</PurposeOfContent>
                  </datas>
                </AsideContent>
              );
            })}

            <AsideCreateListing>
              <CreateListing>Create a Listing</CreateListing>
            </AsideCreateListing>
          </div>
        </AsideSection>

        <Margin>
          <AsideSection>
            <AsideHeader>
              <AsideContentSebBtn>
                <AsideH3>#Help</AsideH3>
              </AsideContentSebBtn>
            </AsideHeader>

            <div>
              {datas.map((data, i) => {
                return (
                  <AsideContent>
                    <datas key={i}>
                      <AsideContentSeb>{data.name}</AsideContentSeb>
                      {data.id !== datas.length ? (
                        <PurposeOfContent>
                          {data.id}
                          {'comments'}
                        </PurposeOfContent>
                      ) : (
                        <AsideNewContent>New</AsideNewContent>
                      )}
                    </datas>
                  </AsideContent>
                );
              })}
            </div>
          </AsideSection>
        </Margin>
      </AsideMainRight>
    </>
  );
};

export default AsideMain;
