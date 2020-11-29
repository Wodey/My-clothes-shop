import React from 'react';
import styled from "styled-components";
import LinksList from "./LinksList";

const Wrapper = styled.header`
  width: 100%;
`;
const Container = styled.div`
  width: 80%;
  margin: auto;
`;
const Navigation = styled.nav`
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Navigation>
          <LinksList />
        </Navigation>
      </Container>
    </Wrapper>
  );
};

export default Header;
