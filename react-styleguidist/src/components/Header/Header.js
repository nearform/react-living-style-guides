import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '../../constants';

const StyledHeader = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  text-align: center;
  padding: 40px;
  font-size: large;
  font-family: sans-serif;
`;

class Header extends Component {
  render() {
    return <StyledHeader {...this.props} />;
  }
}

Header.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string
};

Header.defaultProps = {
  backgroundColor: colors.iceBlue,
  color: colors.white
};

export default Header;
