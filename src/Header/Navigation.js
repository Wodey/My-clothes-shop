import React from 'react';
import styled from 'styled-components';
import NavLink from "./NavLink";

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: space-between;

  @media(min-width: 500px) {
    flex-direction: row;
    height: auto;
  }
`;

const links = ["Новинки", "Бренды", "Одежды", "Обувь", "Сумки", "Часы"];

const Navigation = () => {
  return (
    <Wrapper>
      {
        links.map(i => <NavLink>{i}</NavLink>)
      }
    </Wrapper>
  )
};

export default Navigation;
