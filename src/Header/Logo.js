import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 6rem;
  display: flex;
  justify-content: center;
  height: 3rem;
`;
const Body = styled.img`
  width: 100%;
  min-width: 100%;
`;

const Logo = () => {
  return (
    <Wrapper>
      <Body src="logo.svg"/>
    </Wrapper>
  )
};

export default Logo;
