import React from 'react';
import styled,{css} from 'styled-components';
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
  }

`;
const Link = styled.a``;
const Arrow = styled.img`
  width: 1rem;
  transition: .5s;
  @media(min-width: 1024px) {
    display: none;
  }
  ${props => props.open && css`
    transform: rotate(90deg);
    transition: .5s;
    filter: invert(26%) sepia(98%) saturate(6351%) hue-rotate(355deg) brightness(95%) contrast(120%);
    `}
`;

const Item = ({children, active, open, to, lite=false, cb}) => {
  return (
    <Wrapper active={active} onClick={cb} >
      <Link to={to}>
        {children}
      </Link>
      <>
      {!lite && <Arrow src="icons/arrow.svg" open={open}/>}
      </>
    </Wrapper>
  )
};

Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  to: PropTypes.string,
  active: PropTypes.bool,
  lite: PropTypes.bool,
  cb: PropTypes.func,
  open: PropTypes.bool
};

export default Item;
