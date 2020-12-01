import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  padding: 15px 10%;
  border-bottom: 1px solid black;
`;
const Link = styled.a`
  font-size: 1rem;
  color: black;
`;

const NavLink = ({ children }) => {
  return (
    <Wrapper>
      <Link href={`/${children}`}>
        {children}
      </Link>
    </Wrapper>
  )
};

NavLink.propTypes = {
  children: PropTypes.string.isRequired
};

export default NavLink;
