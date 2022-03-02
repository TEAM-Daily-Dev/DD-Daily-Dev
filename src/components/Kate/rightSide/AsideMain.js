import React from 'react';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <>
      <AsideMainRight>
        <AsideSection>
          <AsideHeader>
            <AsideH3>Listing</AsideH3>
            <div><SeeAllLink>See all</SeeAllLink></div>
          </AsideHeader>

          <div>
            <AsideContent>
              <AsideContentLink>
                <AsideContentSeb>Build a Hulu Landing Page Clone with HTML, CSS & JAVASCRIPT</AsideContentSeb>
                <PurposeOfContent>education</PurposeOfContent>
              </AsideContentLink>
            </AsideContent>
            <AsideCreateListing>
              <CreateListing>Create a Listing</CreateListing>
            </AsideCreateListing>
          </div>
        </AsideSection>
        
        <Margin>
        <AsideSection>
          <AsideHeader>
            <AsideH3><button>#Help</button></AsideH3>
          </AsideHeader>

          <div>
            <AsideContent>
              <AsideContentLink>
                <AsideContentSeb>Mapping Multiply Folders to 1 folder as pictured</AsideContentSeb>
                <PurposeOfContent>37 comments</PurposeOfContent>
              </AsideContentLink>
            </AsideContent>
            
            <AsideContent>
              <AsideContentLink>
                <AsideContentSeb>Mapping Multiply Folders to 1 folder as pictured</AsideContentSeb>
                <PurposeOfContent><AsideNewContent>New</AsideNewContent></PurposeOfContent>
              </AsideContentLink>
            </AsideContent>
          </div>
        </AsideSection>
        </Margin>

        <Margin>
        <AsideSectionBotton>
          <AsideHeaderBottom>
            <h4>trending guides/resources</h4>
          </AsideHeaderBottom>

          <AsideContent>
            <AsideContentSeb><AsideContentSebBtn>10 Frameworks Software Developers can learn in 2022</AsideContentSebBtn></AsideContentSeb>
          </AsideContent>
          <AsideContent>
           <AsideContentSeb><AsideContentSebBtn>Git Cheat Sheet 📄 (50 commands + PDF and poster)</AsideContentSebBtn></AsideContentSeb>
          </AsideContent>

        </AsideSectionBotton>
        </Margin>

        <Margin>
        <AsideSectionBotton>
          <AsideHeaderBottom>
            <h4>recently queried</h4>
          </AsideHeaderBottom>

          <AsideContent>
            <AsideContentSeb><AsideContentSebBtn>How to make a Discord bot</AsideContentSebBtn></AsideContentSeb>
          </AsideContent>
          <AsideContent>
            <AsideContentSeb><AsideContentSebBtn>Software Engineer Personal Website</AsideContentSebBtn></AsideContentSeb>
          </AsideContent>
        </AsideSectionBotton>
        </Margin>
        
      </AsideMainRight>
    </>
  );
};

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
`;
const SeeAllLink = styled.a`
  color: #3b49df;
`;
const AsideContent = styled.div`
  padding: 16px;
  border-bottom: 1px solid #f5f5f5;
  &:hover{
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
  background-color: transparent;
  border: none;
  outline: none;
`;

const PurposeOfContent = styled.div`
  padding-top: 4px;
  color: #717171;
  font-size: 0.875rem;
`;
const AsideNewContent = styled.span`
  background: #fcd34d;
  color: #78350f;
  mid-width: 0.5rem;
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
  }
`;
const AsideCreateListing = styled.div`
  padding: 12px;
  text-align: center !important;
`;
const Margin = styled.div`
  margin: 16px 0 0;
`;
export default MainPage;