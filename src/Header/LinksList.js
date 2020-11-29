import React from 'react';
import styled from 'styled-components';
import Link from "./Link";
const data = [
  "Новинки",
  "Бренды",
  "Одежда",
  "Обувь",
  "Сумки",
  "Аксессуары",
  "Часы"
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media(min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LinksList = () => {
  return (
    <Wrapper>
      {
        data.map(i => <Link>{i}</Link>)
      }
    </Wrapper>
  )
};

export default LinksList;
