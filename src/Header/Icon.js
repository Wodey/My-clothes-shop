import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: ${props => props.size};
`;
const Image = styled.img`
  width: 100%;
  max-width: 100%;
`;

const Icon = ({img, size}) => {
  return (
    <Wrapper size={size} >
      <Image src={img} />
    </Wrapper>
  )
};

Icon.propTypes = {
  img: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default Icon;
