import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Wrapper = styled.div``;

const SubNavigationMenu = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

export default SubNavigationMenu;
