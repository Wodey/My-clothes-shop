import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sex from "./Sex";
import Navigation from "./Navigation";
import Auth from "./Auth";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: ${props => props.isOpen ? "0" : "-100%"};
  width: 70%;
  height: 100vh;
  transition: 1s;
  background: white;
  z-index: 1;
  @media(min-width: 500px) {
    display: none;
  }
`;

const BurgerMenu = ({isOpen}) => {
  return (
    <Wrapper isOpen={isOpen}>
      <Sex />
      <Navigation />
      <Auth />
    </Wrapper>
  );
}

BurgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default BurgerMenu;
