import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from "./Icon";

const Wrapper = styled.div``;
const Title = styled.div``;
const Header = styled.div``;
const Arrow = styled.img``;
const Current = styled.img``;
const Body = styled.div``;

const Spoiler = ({items, getter, setter, title}) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        <Current src={`icons/${items[getter].val}.svg`} alt={items[getter].val()} />
        <Arrow src="icons/arrow.svg" alt="arrow.svg"/>
      </Header>
      <Body>
        {
          items.map(i => <Icon
              active={getter === i.val}
              cb={() => setter(i.val)}
              img={i.val}
              title={i.title}
            />)
        }
      </Body>
    </Wrapper>
  )
};

Spoiler.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  getter: PropTypes.number.isRequired,
  setter: PropTypes.func.isRequired
};

export default Spoiler;
