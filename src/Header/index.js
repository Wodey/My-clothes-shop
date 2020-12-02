import React from 'react';
import styled from "styled-components";
import MobileHeader from "./MobileHeader.js";

const Wrapper = styled.header`
  border-bottom: 1px solid #ccc;
`;
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const TopRow = styled.div``;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <MobileHeader />
      </Container>
    </Wrapper>
  )
}

export default Header;
