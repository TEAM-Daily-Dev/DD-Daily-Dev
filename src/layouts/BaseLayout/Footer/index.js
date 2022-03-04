import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <S.Footer>
      <h2>SWFB STUDY</h2>
      <S.Flex>
        <ul>
          <li>고객센터 010-0000-0000</li>
          <li>정보2</li>
        </ul>
        <span>서울 영등포구</span>
      </S.Flex>
    </S.Footer>
  );
};

const S = {
  Footer: styled.footer`
    padding: 40px 100px;
    margin-bottom: 6px;
    border-top: 1px solid #ced7e1;
    h2 {
      margin-bottom: 8px;
      font-size: 16px;
      font-weight: 700;
    }
  `,
  Flex: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      display: flex;
      gap: 30px;
      font-size: 12px;
    }
    span {
      font-weight: 500;
    }
  `,
};
export default Footer;
