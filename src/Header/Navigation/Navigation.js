import React,{useState} from 'react';
import styled from 'styled-components';
import Item from './Item';
import SubTub from "./SubTub";

const Wrapper = styled.nav`
  @media(min-width: 1024px) {
    width: 75%;
  }
`;

const LinksList = styled.ul`
display: flex;
flex-direction: column;
gap: 1rem;
position: relative;
@media(min-width: 1024px) {
  flex-direction: row;
  justify-content: space-between;
  gap: auto;
  width: 100%;
}
`;

const Title = styled.span``;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  @media(min-width: 1024px) {
    width: initial;
  }
`;

const Navigation = () => {
  const [nav, openNav] = useState({
    gifts: false,
    top: false,
    trunk: false,
    legs: false,
    designers: false
  });
  return (
    <Wrapper>
      <LinksList>
        <Item to="/sellout" active lite>Распродажа</Item>
        <ItemContainer>
          <Item to="/gifts" open={nav.gifts} cb={() => openNav({...nav, gifts: !nav.gifts})}>
            Подарки
          </Item>
          <SubTub open={nav.gifts}>
            <Item lite>Костюм в подарок</Item>
            <Item lite>Кроссовки в подарок</Item>
            <Item lite>Худи в подарок</Item>
          </SubTub>
        </ItemContainer>
        <ItemContainer>
          <Item to="/top" cb={() => openNav({...nav, top: !nav.top})} open={nav.top}>Верхняя одежда</Item>
          <SubTub open={nav.top}>
            <Item lite>Пальто</Item>
            <Item lite>Плащи</Item>
            <Item lite>Куртки</Item>
            <Item lite>Пуховики</Item>
          </SubTub>
        </ItemContainer>
        <ItemContainer>
          <Item cb={() => openNav({...nav, trunk: !nav.trunk})} open={nav.trunk}>Нижняя одежда</Item>
          <SubTub open={nav.trunk}>
            <Item lite>Худи</Item>
            <Item lite>Рубашки</Item>
            <Item lite>Футболки</Item>
            <Item lite>Свитера</Item>
            <Item lite>Пиджаки</Item>
            <Item lite>Майки</Item>
          </SubTub>
        </ItemContainer>
        <ItemContainer>
          <Item cb={() => openNav({...nav, legs: !nav.legs})} open={nav.legs}>Брюки</Item>
          <SubTub open={nav.legs}>
            <Item lite>Спортивные штаны</Item>
            <Item lite>Брюки</Item>
            <Item lite>Шорты</Item>
            <Item lite>Джинсы</Item>
          </SubTub>
        </ItemContainer>
        <ItemContainer>
          <Item cb={() => openNav({...nav, designers: !nav.designers})} open={nav.designers}>Дизайнеры</Item>
          <SubTub open={nav.designers}>
            <Item lite>Gucci</Item>
            <Item lite>Balanciaga</Item>
            <Item lite>Dolce & Gabanna</Item>
            <Item lite>Fendi</Item>
            <Item lite>St. Lauren</Item>
            <Item lite>Tom Ford</Item>
          </SubTub>
        </ItemContainer>
      </LinksList>
    </Wrapper>
  )
};

export default Navigation;
