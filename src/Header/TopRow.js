import React from 'react';
import styled from 'styled-components';
import Sex from './Sex';

const Wrapper = styled.div`
  display: none;
  @media(min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;
const Column = styled.div``;
const Logo = styled.img``;

const TopRow = () => {
  return (
    <Wrapper>
      <Column>
        <Sex />
      </Column>
      <Column>
        <Logo />
      </Column>
      <Column>

      </Column>
    </Wrapper>
  )
}
