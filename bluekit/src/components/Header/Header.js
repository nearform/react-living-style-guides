import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  text-align: center;
  padding: 40px;
  font-size: large;
  font-family: sans-serif;
  width: 100%;
`;

class Header extends Component {
  render() {
    return <StyledHeader {...this.props} />;
  }
}

Header.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.any
};

Header.defaultProps = {
  backgroundColor: '#3498db',
  color: '#fff'
};

export default Header;
