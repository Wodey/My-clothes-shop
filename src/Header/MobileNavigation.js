import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import Sex from './Sex';

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

const MobileNavigation = ({isOpen}) => {
  const [sex, setSex] = useState(false);

  return (
    <Wrapper isOpen={isOpen}>
      <Sex gender={sex} cb={setSex} />
    </Wrapper>
  )
};

MobileNavigation.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default MobileNavigation;
