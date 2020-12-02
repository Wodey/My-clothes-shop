import React from 'react';
import styled,{css} from 'styled-components';
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  &:before {
    content: "";
    width: 50%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: .5s;
    background: black;
    ${props => props.gender && css`
        left: 50%;
      `}
  }
`;
const Item = styled.div`
  font-size: 1rem;
  padding: 10px 15px;
`;

const Sex = ({gender, cb}) => {
  return (
    <Wrapper gender={gender}>
      <Item onClick={() => cb(false)}>Дле нее</Item>
      <Item onClick={() => cb(true)}>Для него</Item>
    </Wrapper>
  );
};

Sex.propTypes = {
  gender: PropTypes.bool.isRequired,
  cb: PropTypes.func.isRequired
};

export default Sex;
