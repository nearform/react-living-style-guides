import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '../../constants';

const Button = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  padding: 0.9em 4em;
  border: 0;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  transition: 0.2s opacity;
  appearance: none;

  &:focus,
  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string
};

Button.defaultProps = {
  backgroundColor: colors.iceBlue,
  color: colors.white
};

export default Button;
