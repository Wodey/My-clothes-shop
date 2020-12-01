import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  padding: 20px 0;

  @media(min-width: 500px) {
    width: auto;
  }
`;
const Item = styled.button`
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 10px 15px;
  background: white;
  background: ${props => props.isActive && props.theme.color_active };
  color: ${props => props.isActive && "white"};
`;

const Sex = ( ) => {
  return (
    <Wrapper>
      <Item isActive={true}>Мужское</Item>
      <Item isActive={false}>Женское</Item>
    </Wrapper>
  )
};

export default Sex;
