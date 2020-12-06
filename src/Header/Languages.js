import React, {useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from './Icon';

const langs = [
  {
    title: "Русский",
    img: "RU.svg"
  },
  {
    title: "English",
    img: "ENG.svg"
  }
];

const Wrapper = styled.div`
  display: flex;
`;
const Head = styled.div`
  display: flex;
  flex-direction: space-between;
  gap: .5rem;
`;
const Body = styled.div`
  display: none;
`;
const Arrow = styled.img`
  width: 1rem;
  transform: rotate(90deg);
`;

const Languages = ({getter, setter}) => {
  const [isOpen, setOpen] = useState(true);
  return (
    <Wrapper>
      <Head>
        <Icon img={langs[getter].img} title={langs[getter.title]} lite/>
        <Arrow src="icons/arrow.svg" alt="arrow.svg" />
      </Head>
      <Body></Body>
    </Wrapper>
  )
};

Languages.propTypes = {
  getter: PropTypes.string.isRequired,
  setter: PropTypes.func.isRequired
};

export default Languages;
