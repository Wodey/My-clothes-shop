import React from 'react';
import styled,{css} from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  transform: translateY(-50%);
  flex-direction: column;
  padding: 5px 0;
  height: 0;
  display: flex;
  opacity: 0;
  overflow: hidden;
  transition: 1s;
  gap: .5rem;
  @media(min-width: 1024px) {
    position: absolute;
    z-index: 1;
    background: white;
    opacity: 1;
    padding: 10px;
    top: 100%;
    left: 0;
    display: none;
  }
  ${props => props.open && css`
      transform: translateY(0);
      transition: 1s;
      height: auto;
      opacity: .8;
      @media(min-width: 1024px) {
        display: flex;
      }
    `}
`;

const SubTub = ({children, open}) => {
  return (
    <Wrapper open={open} onClick={(e) => e.stopPropagation()}>
      {
        children
      }
    </Wrapper>
  )
};

SubTub.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool
};

export default SubTub;
