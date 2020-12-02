import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  font-size: 1rem;
  color: ${props => props.active && props.theme.color_active};
  display: flex;
  justify-content: space-between;
`;
const Link = styled.a``;
const Arrow = styled.img`
  width: 1rem;
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
