import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;
const Image = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 12px;
  text-align: center;
  @media(min-width: 1024px) {
    font-size: 2rem;
  }
`;

const Logo = () => {
  return (
    <Wrapper>
      <Image>LE REVE</Image>
    </Wrapper>
  )
};

export default Logo;
