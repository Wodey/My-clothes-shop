import React from 'react';
import styled,{css} from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  transition: 1s;
  background: black;
  opacity: 0.3;
  z-index: ${props => props.zIndex || 'auto' };
  position: fixed;
  top: 0;
  right: 0;
  ${props => !props.on && css`
      display: none;
      transition: 1s;
    `};
`;

const Dark = ({on,zIndex}) => {
  return (
    <Wrapper on={on} zIndex={zIndex}>
    </Wrapper>
  );
};

Dark.propTypes = {
  on: PropTypes.bool.isRequired,
  zIndex: PropTypes.number
}

export default Dark;
