import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: 1.5rem;
  height: 1rem;
  opacity: 0.7;
  position: relative;
  z-index: 5;
  &:before {
    content: "";
    background: black;
    width: 100%;
    height: 2px;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  &:after {
    content: "";
    background: black;
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
  @media(min-width: 500px) {
    display: none;
  }
`;

const Line = styled.div`
  background: black;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 2px;
`;

const Hamburger = ({cb}) => {
  return (
    <Wrapper onClick={cb}>
      <Line />
    </Wrapper>
  )
};

Hamburger.propTypes = {
  cb: PropTypes.func
};

export default Hamburger;
