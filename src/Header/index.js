import React from 'react';
import styled from "styled-components";
import Controller from "./Controller";
import Navigation from "./Navigation";
import Hide from "../Utils/Hide";

const Wrapper = styled.header`
  height: 3.2rem;
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
        <Controller />
        <Hide toggle={window.innerWidth < 500}>
          <Navigation />
        </Hide>
      </Container>
    </Wrapper>
  )
}

export default Header;
