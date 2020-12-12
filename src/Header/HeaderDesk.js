import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import IconRef from "./IconRef";
import Languages from "./LanguagesSmart";
import Navigation from "./Navigation/Navigation";
import Search from "./Search";
import Announce from "./Announce";

const Wrapper = styled.div`
  display: none;
  flex-direction: column;
  gap: 1rem;
  padding: 7px 0;
  @media(min-width: 1024px) {
    display: flex;
  }
`;

const RightColumn = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;
const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftColumn = styled.div`
  display: flex;
  gap: 1rem;
`;
const BottomLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderDesk = () => {
  return (
    <Wrapper>
      <TopLine>
        <LeftColumn>
          <Languages />
        </LeftColumn>
        <Logo />
        <RightColumn>
          <IconRef icon="cart.svg"/>
          <IconRef icon="star.svg" />
          <IconRef icon="online-shopping.svg" />
        </RightColumn>
      </TopLine>
      <BottomLine>
        <Navigation />
        <Search />
      </BottomLine>
    </Wrapper>
  );
};

export default HeaderDesk;
