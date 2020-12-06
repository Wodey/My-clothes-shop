import React from 'react';
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
  flex-direction: column;
  gap: .5rem;
`;

const MobileLanguages = ({getter=0, setter}) => {
  return (
    <Wrapper>
      {
        langs.map((i, index) => <Icon
          img={i.img}
          title={i.title}
          active={getter === index}
          cb={() => setter(index)}
        />)
      }
    </Wrapper>
  )
};

MobileLanguages.propTypes = {
  setter: PropTypes.func.isRequired,
  getter: PropTypes.func.isRequired,
};

export default MobileLanguages;
