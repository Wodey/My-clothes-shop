import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
`;
const Image = styled.img``;
const Title = styled.span`
  color: ${props => props.active && props.theme.color_active};
`;

const Icon = ({img, title, cb, active=false, lite=false}) => {
  return (
    <Wrapper onClick={cb}>
      <Image src={`icons/${img}`} alt={img}/>
      {!lite && <Title active={active}>{title}</Title>}}
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
