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
  &:hover > img {
    transform: rotate(270deg);
    transition: .5s;
    filter: invert(28%) sepia(98%) saturate(7356%) hue-rotate(358deg) brightness(94%) contrast(119%);
  }
  @media(min-width: 1024px) {
    gap: .3rem;
  }

`;
const Link = styled.a``;
const Arrow = styled.img`
  width: 1rem;
  @media(min-width: 1024px) {
    transform: rotate(90deg);
  }
`;

const Item = ({children, active}) => {
  return (
    <Wrapper active={active}>
      <Link>
        {children}
      </Link>
      <Arrow src="icons/arrow.svg" />
    </Wrapper>
  )
};

Item.propTypes = {
  children: PropTypes.string.isRequired,
  active: PropTypes.bool
};

export default Item;
