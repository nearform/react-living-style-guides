import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '../../constants';

const StyledLoader = styled.div`
  animation: ${({ duration }) => `${loading} ${duration}s infinite linear;`};
  background: ${({ color }) => color};
  background: ${({ color }) => `linear-gradient(to right, ${color} 10%, rgba(255, 255, 255, 0) 42%);`};
  border-radius: 50%;
  font-size: ${({ size }) => `${size}px`};
  height: 11em;
  margin: 50px auto;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  width: 11em;
  &:before {
    background: ${({ color }) => color};
    border-radius: 100% 0 0 0;
    content: '';
    height: 50%;
    left: 0;
    position: absolute;
    top: 0;
    width: 50%;
  }
  &:after {
    background: ${({ background }) => background};
    border-radius: 50%;
    bottom: 0;
    content: '';
    height: 65%;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 65%;
  }
`;

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

class Loader extends Component {
  render() {
    return <StyledLoader {...this.props} />;
  }
}

Loader.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  duration: PropTypes.number,
  size: PropTypes.number,
};

Loader.defaultProps = {
  background: colors.white,
  color: colors.whisperGrey,
  duration: 1.4,
  size: 6
};

export default Loader;
