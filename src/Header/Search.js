import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1.3rem;
  @media(min-width: 1024px) {
    width: auto;
  }
`;
const Icon = styled.img`
  width: 100%;
  max-width: 100%;
  @media(min-width: 1024px) {
    display: none;
  }
`;
const InputWrapper = styled.div`
  display: none;
  @media(min-width: 1024px) {
    display: flex;
    background: white;
    border: 1px solid #ccc;
    padding: 8px ;
    gap: 5px;
    cursor: pointer;
  }
`;
const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1rem;
`;
const Enter = styled.img`
  width: 1rem;
  cursor: pointer;
`;

const Search = () => {
  return (
    <Wrapper>
      <Icon src="./icons/loupe.svg"/>

      <InputWrapper>
        <Input />
        <Enter src="icons/loupe.svg"/>
      </InputWrapper>
    </Wrapper>
  );
};

export default Search;
