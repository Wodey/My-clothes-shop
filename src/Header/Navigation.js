import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media(min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <Item active>Распродажа</Item>
      <Item>Подарки</Item>
      <Item>Новинки</Item>
      <Item>Дизайнеры</Item>
      <Item>Одежда</Item>
      <Item>Обувь</Item>
      <Item>Часы</Item>
    </Wrapper>
  )
};

export default Navigation;
