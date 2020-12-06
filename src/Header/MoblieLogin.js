import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: initial;
`;

const MobileLogin = () => {
  return (
    <Wrapper>
      <Button>Войти</Button>
      <Button reverse>Зарегистрироваться</Button>
    </Wrapper>
  )
};

export default MobileLogin;
