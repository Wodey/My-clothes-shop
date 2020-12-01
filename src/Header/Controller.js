import React from 'react';
import styled from 'styled-components';
import Hamburger from "./Hamburger";
import Languages from "./Languages";
import Search from "./Search";
import Icon from "./Icon";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo.js";
import Hide from "../Utils/Hide";
import Sex from "./Sex";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr 1fr
  height: 3rem;
  width: 100%;
  &:before {
    width: 30%;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    background: black;
    content: "";
    opacity: 0.3;
    display: ${props => !props.isMenuOpen && "none"};
  }
  @media(min-width: 500px) {
    background: blue;
    height: 3rem;
    display: grid;
    grid-template-columns: 4fr 4fr 1fr 1fr 1fr 1fr;
    justify-content: space-between;
  }
}
`;

const Controller = () => {
  return (
    <Wrapper isMenuOpen={false}>
      <BurgerMenu isOpen={false}/>
      <Hamburger />
      <Hide toggle={window.innerWidth < 500}>
        <Sex />
        <Logo />
      </Hide>
      <Languages />
      <Search isOpen={true}/>
      <Icon img="icons/star.svg" size="1.5rem" />
      <Icon img="icons/online-shopping.svg" size="2rem" />
    </Wrapper>
  )
}

export default Controller;
