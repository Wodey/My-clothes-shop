import React from 'react';
import styled,{keyframes} from 'styled-components';
import PropTypes from "prop-types";

const ticker = keyframes`
  0% {
    transform: translateX(25%);
  },
  100% {
    transform: translateX(-25%);
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background:black;
  padding: 5px;
  position: relative;
  overflow: hidden;
`;
const Row = styled.div`
    transform: translateX(-80%);
    animation: ${ticker} 50s linear infinite;
    width: 400vw;
    display: flex;
    gap: 2rem;
`;

const Word = styled.span`
  font-size: 1.5rem;
  white-space: nowrap;
  font-weight: bold;
  color: white;
  @media(min-width: 1024px) {
    font-size: 2rem;
  }

`;
const Announce = ({word}) => {
  const words = Array.from(Array(10), () => word);
  return (
    <Wrapper>
      <Row>
        {
          words.map(i => <Word>{i}</Word>)
        }
      </Row>
    </Wrapper>
  )
};

Announce.propTypes = {
  word: PropTypes.string.isRequired
};

export default Announce;
