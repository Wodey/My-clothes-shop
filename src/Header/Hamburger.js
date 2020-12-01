import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1.5rem;
  height: 1rem;
  opacity: 0.7;
  position: relative;
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

const Hamburger = () => {
  return (
    <Wrapper>
      <Line />
    </Wrapper>
  )
};

export default Hamburger;
