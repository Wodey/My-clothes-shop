import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import Hide from "../Utils/Hide.js";

const Wrapper = styled.div`
  background: green;
`;
const Icon = styled.img`
  width: 1.5rem;
`;
const InputWrapper = styled.div``;
const Input = styled.input``;

const Search = ({isOpen}) => {
  return (
    <Wrapper>
      <Icon src="icons/loupe.svg" />
      <Hide toggle={isOpen}>
        <InputWrapper>
          <Input />
          <Icon src="icons/close-button.svg" />
        </InputWrapper>
      </Hide>
    </Wrapper>
  )
};

Search.propTypes = {
  isOpen: PropTypes.bool
};

export default Search;
