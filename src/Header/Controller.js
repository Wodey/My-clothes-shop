import React from 'react';
import styled from 'styled-components';
import Hamburger from "./Hamburger";

const Wrapper = styled.div`
  display: flex;
  height: 3rem;
  width: 100%;
  align-items: center;
`;

const Controller = () => {
  return (
    <Wrapper>
      <Hamburger />
    </Wrapper>
  )
}

export default Controller;
