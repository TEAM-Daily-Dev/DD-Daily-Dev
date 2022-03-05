import styled from 'styled-components';

import { MOBILE, TABLET, MOBILE_SMALL } from 'utils/constants/responsive';
import { SIDENAV } from 'utils/constants/search';

const SideNav = () => {
  return (
    <Wrapper>
      <SideNavList>
        {SIDENAV.map((item) => (
          <SideNavItem key={item.id}>
            <a href="/">{item.tag}</a>
          </SideNavItem>
        ))}
      </SideNavList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media screen and (max-width: ${MOBILE}) {
    margin-left: -16px;
  }

  @media screen and (max-width: ${MOBILE_SMALL}) {
    width: 500px;
    overflow-x: auto;
  }
`;

const SideNavList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${MOBILE}) {
    padding: 4px;
    flex-direction: row;
  }

  @media screen and (max-width: ${MOBILE_SMALL}) {
    min-width: 540px;
  }
`;

const SideNavItem = styled.li`
  width: 240px;
  padding: 8px;
  color: #090909;
  border-radius: 7px;

  @media screen and (max-width: ${TABLET}) {
    width: 100%;
  }

  @media screen and (max-width: ${MOBILE}) {
    width: auto;
    padding: 8px 12px;
    color: #575757;
  }

  &:first-child {
    font-weight: 700;
    background: #fff;

    @media screen and (max-width: ${MOBILE}) {
      font-weight: 400;
      background: transparent;
    }
  }
`;

export default SideNav;
