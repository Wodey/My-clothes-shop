import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import Sex from './Sex';
import Navigation from "./Navigation";
import MobileLogin from './MoblieLogin';
import Spoiler from "./Spoiler";
import LanguagesSmart from "./LanguagesSmart";

const languages = [
  {
    title: "Русский",
    val: "RU",
  },
  {
    title: "English",
    val: "ENG"
  }
];

const DumbLanguage = <Spoiler items={languages} title="Язык" />;
const Languages = <LanguagesSmart Component={DumbLanguage} />;

const Wrapper = styled.div`
  width: 80%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: -100%;
  background: white;
  z-index: 1;
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
      <Languages />
    </Wrapper>
  )
};

MobileNavigation.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default MobileNavigation;
