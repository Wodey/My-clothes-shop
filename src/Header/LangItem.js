import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Hide from "../Utils/Hide";

const Wrapper = styled.div`
  display: flex;

`;
const Image = styled.img`
  width: 1.5rem;
`;
const Body = styled.span`
  padding: 50% 5px;
  font-size: .8rem;
`;

const LangItem = ({img, body, hide=false, cb}) => {
  return (
    <Wrapper onClick={cb}>
      <Image src={img} />
      <Hide toggle={hide}>
        <Body>
          {body}
        </Body>
      </Hide>
    </Wrapper>
  );
};

LangItem.propTypes = {
  img: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  hide: PropTypes.bool,
  cb: PropTypes.func
};

export default LangItem;
