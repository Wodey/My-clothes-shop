import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  padding: 1rem 0;
`;
const Text = styled.a`
  font-size: 1.2rem;
  color: ${props => props.theme.color};
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.color};
  }
`;

const Link = ({children}) => {
  return (
    <Wrapper>
      <Text>
        {children}
      </Text>
    </Wrapper>
  );
};

Link.propTypes = {
  children: PropTypes.string.isRequired
};

export default Link;
