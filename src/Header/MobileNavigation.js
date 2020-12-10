import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import Sex from './Sex';
import Navigation from "./Navigation";
import MobileLogin from './MoblieLogin';
import MobileLanguages from "./MobileLanguagesSmart";

const Wrapper = styled.div`
  width: 80%;
  height: 100vh;
  position: fixed;
  top: 0;
  overflow: scroll;
  left: -100%;
  background: white;
  z-index: 2;
  padding: 15px 5%;
  transition: 1s;
  ${props => props.isOpen && css`
      left: 0;
    `};
`;

const Title = styled.div`
  font-size: 1.1rem;
  text-transform: uppercase;
  padding: 15px 0;
`;

const MobileNavigation = ({isOpen}) => {
  const [sex, setSex] = useState(false);

  return (
    <Wrapper isOpen={isOpen}>
      <Sex gender={sex} cb={setSex} />
      <Title>Навигация</Title>
      <Navigation />
      <Title>
      Личный кабинет
      </Title>
      <MobileLogin />
      <Title>
        Язык
      </Title>
      <MobileLanguages />
    </Wrapper>
  )
};

MobileNavigation.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default MobileNavigation;
