import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: 1.5rem;
`;
const Image = styled.img`
  width: 100%;
  max-width: 100%;
`;
const Link = styled.a``;

const IconRef = ({icon, link}) => {
  return (
    <Wrapper>
      <Link>
        <Image src={`icons/${icon}`} />
      </Link>
    </Wrapper>
  )
};

IconRef.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default IconRef;
