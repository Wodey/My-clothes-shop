import React from 'react';
import styled from "styled-components";
import Controller from "./Controller";
import Navigation from "./Navigation";

const Wrapper = styled.header`
  height: 3.2rem;
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
        <Controller />
        <Navigation />
      </Container>
    </Wrapper>
  )
}

export default Header;
