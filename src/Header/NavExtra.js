import React from 'react';
import styled,{css} from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: none;
  transform: translateX(100%);
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
      transition: 1s;
  height: 100%;
  ${props => props.isOpen && css`
    display: flex;
    transform: translateX(0);
    transition: 1s;
    `}
`;

const Back = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 1rem;
  transform: rotate(180deg);
`;
const BackButton = styled.span`
  font-size: 1rem;
  padding: 0 10px;
  text-transform: uppercase;
  color: ${props => props.theme.color_active};
`;

const NavExtra = ({children,isOpen, back}) => {
  console.log(isOpen)
  return (
    <Wrapper isOpen={isOpen}>
      <Back>
        <Img src="icons/arrow.svg" />
        <BackButton onClick={back}>Назад</BackButton>
      </Back>
      <>
      {
        children
      }
      </>
    </Wrapper>
  )
};

NavExtra.propTypes = {
  children: PropTypes.array.isRequired,
  isOpen: PropTypes.bool,
  back: PropTypes.func
};

export default NavExtra;
