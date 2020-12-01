import React from 'react';
import styled from 'styled-components';
import LangItem from "./LangItem";
import Hide from "../Utils/Hide.js";
const Wrapper = styled.div``;


const Languages = () => {
  return (
    <Wrapper>
      <LangItem img="icons/russia.svg" body="RU" hide={window.innerWidth < 500} />
      <Hide toggle={true}>
        <LangItem img="icons/russia.svg" body="Русский" />
        <LangItem img="icons/united-states.svg" body="English" />
      </Hide>
    </Wrapper>
  )
};

export default Languages;
