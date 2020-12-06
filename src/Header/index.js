import React from 'react';
import styled from "styled-components";
import MobileHeader from "./MobileHeader.js";
import HeaderDesk from "./HeaderDesk";
import Announce from "./Announce";

const Wrapper = styled.header`
  border-bottom: 1px solid #ccc;
  @media(min-width: 1024px) {
    border: none;
  }
`;
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  @media(min-width: 1024px) {
    width: 80%;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <MobileHeader />
        <HeaderDesk />
      </Container>
      <Announce word="New Year 2021"/>
    </Wrapper>
  )
}

export default Header;
