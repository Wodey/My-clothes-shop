import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
`;
const Image = styled.img`
  width: 1.2rem;
  opacity: ${props => props.active && 0.5};
`;
const Title = styled.span`
  color: ${props => props.active && props.theme.color_active};
  font-size: 1rem;
  padding: 0 15px;
`;

const Icon = ({img, title, cb, active=false, lite=false}) => {
  console.log(img)
  return (
    <Wrapper onClick={cb}>
      <Image src={`icons/${img}`} active={active} alt={img}/>
      {!lite && <Title active={active}>{title}</Title>}
    </Wrapper>
  );
};

Icon.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lite: PropTypes.bool,
  cb: PropTypes.func,
  active: PropTypes.bool
};

export default Icon;
