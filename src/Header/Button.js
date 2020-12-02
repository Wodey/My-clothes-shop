import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div``;
const Body = styled.button`
  padding: 10px 15px;
  width: 100%;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #000;
  background: black;
  color: ${props => !props.reverse && "white"};
  background:${props => props.reverse && "white"};
  outline: none;

`;

const Button = ({children, reverse, cb}) => {
  return (
    <Wrapper onClick={cb}>
      <Body reverse={reverse}>
        {children}
      </Body>
    </Wrapper>
  )
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  cb: PropTypes.func
};

export default Button;
