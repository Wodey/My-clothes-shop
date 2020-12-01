import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 15px 10%;
  background: #e4dfdf;
`;
const Body = styled.span`
  font-size: 1.1rem;

`;

const Auth = () => {
  return (
    <Wrapper>
      <Body>
        Личный Кабинет
      </Body>
    </Wrapper>
  )
};

export default Auth;
