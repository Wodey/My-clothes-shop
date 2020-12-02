import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1.3rem;
`;
const Icon = styled.img`
  width: 100%;
  max-width: 100%;
`;
const InputWrapper = styled.div`
  display: none;
`;
const Input = styled.input``;
const Close = styled.img``;

const Search = () => {
  return (
    <Wrapper>
      <Icon src="./icons/loupe.svg"/>

      <InputWrapper>
        <Input />
        <Close />
      </InputWrapper>
    </Wrapper>
  );
};

export default Search;
