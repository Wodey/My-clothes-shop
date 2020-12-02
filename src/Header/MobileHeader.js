import React,{useState} from 'react';
import styled,{css} from 'styled-components';
import Hamburger from "./Hamburger";
import Search from "./Search";
import Logo from "./Logo";
import IconRef from "./IconRef";
import MobileNavigation from "./MobileNavigation";
import Dark from "../Utils/Dark";
const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  @media(min-width: 768px) {
    display: none;
  }
`;

const List = styled.div`
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translateX(0);
  transition: 1s;
  ${props => props.isOpen && css`
    transform: translateX(90%);
    `}
`;


const MobileHeader = () => {
  const [isOpen, open] = useState(true);
  const openToggler = () => {
    open(!isOpen);
  }
  return (
    <Wrapper>
      <Dark on={isOpen} />
      <MobileNavigation isOpen={isOpen} />
      <List isOpen={isOpen}>
        <Hamburger cb={openToggler}/>
        <Search />
        <Logo />
        <IconRef icon="star.svg" />
        <IconRef icon="online-shopping.svg" />
        </List>
    </Wrapper>
  );
};

export default MobileHeader;
