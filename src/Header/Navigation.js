import React,{useState} from 'react';
import styled from 'styled-components';
import Item from './Item';
import NavExtra from './NavExtra';

const sellOut = ["Одежда","Куртки и жакеты", "Пальто", "Платья", "Светеры и топы", "Деним"," Обвуь", "Ботинки и сапоги", "Кроссовки", "Сумки", "Аксессуары"];
const gifts = ["Все подарки", "Приятные мелочи"," На любой Вкус", "Заветные желания", "Предметы интерьера", "Ювелирные украшения", "Этичные и экологичные подарки"];
const news = ["Главные новинки", "Молодые бренды", "Осень-зима 2020", "Эксклюзивы и колобарации", "Снова в наличии"];
const designers = ["Alexander McQueen", "Balmain", "Burberry", "Gucci", "Balanciaga"];
const clothes = ["Все категории", "Пальто", "Костюмы", "Худи"," Кроссовки", "Рубашки", "Джинсы"];

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  @media(min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: auto;
  }
`;

const Navigation = () => {
  const [nav, openNav] = useState('0');
  return (
    <Wrapper>
      <Item active cb={() => openNav('1')} >Распродажа</Item>
      <Item cb={() => openNav('2')}>Подарки</Item>
      <Item cb={() => openNav('3')}>Новинки</Item>
      <Item cb={() => openNav('4')}>Дизайнеры</Item>
      <Item cb={() => openNav('5')}>Одежда</Item>
      <Item lite>Обувь</Item>
      <Item lite>Часы</Item>
      <Item lite>Сумки</Item>
      <Item lite>Аксессуары</Item>
      <Item lite>Украшения</Item>
      <Item lite>Архивные коллекции</Item>
      <NavExtra isOpen={nav === '1'} back={() => openNav('0')}>
        {
          sellOut.map(i => <Item lite>{i}</Item>)
        }
      </NavExtra>
      <NavExtra isOpen={nav === '2'} back={() => openNav('0')}>
        {
          gifts.map(i => <Item lite>{i}</Item>)
        }
      </NavExtra>
      <NavExtra isOpen={nav === '3'} back={() => openNav('0')}>
        {
          news.map(i => <Item lite>{i}</Item>)
        }
      </NavExtra>
      <NavExtra isOpen={nav === '4'} back={() => openNav('0')}>
        {
          designers.map(i => <Item lite>{i}</Item>)
        }
      </NavExtra>
      <NavExtra isOpen={nav === '5'} back={() => openNav('0')}>
        {
          clothes.map(i => <Item lite>{i}</Item>)
        }
      </NavExtra>
    </Wrapper>
  )
};

export default Navigation;
