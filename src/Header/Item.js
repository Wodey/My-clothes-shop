import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  font-size: 1rem;
  color: ${props => props.active && props.theme.color_active};
  display: flex;
  justify-content: space-between;
  gap: .5rem;
  cursor: pointer;
  @media(min-width: 1024px) {
    gap: .3rem;
    font-size: 0.9rem;
  }

`;
const Link = styled.a``;
const Arrow = styled.img`
  width: 1rem;
  @media(min-width: 1024px) {
    display: none;
  }
`;

const Item = ({children, active, lite=false, cb}) => {
  return (
    <Wrapper active={active} onClick={cb}>
      <Link>
        {children}
      </Link>
      <>
      {!lite && <Arrow src="icons/arrow.svg" />}
      </>
    </Wrapper>
  )
};

Item.propTypes = {
  children: PropTypes.string.isRequired,
  active: PropTypes.bool,
  lite: PropTypes.bool,
  cb: PropTypes.func
};

export default Item;
