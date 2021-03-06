import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '../../constants';

const Input = styled.input`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  border: 0.1em solid ${({ error }) => error ? colors.pomegranate : colors.whisperGrey};
  padding: 0.9em;
  appearance: none;
  border-radius: 6px;
  outline: none;
  transition: border 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 ${({ error }) => error ? `2px ${colors.pomegranate}` : '0 transparent'};
  width: 100%;
  max-width: 200px;

  &::placeholder {
    color: ${colors.whisperGrey};
    opacity: 1;
  }

  &:focus {
    box-shadow: 0 0 2px ${({ error }) => error ? colors.pomegranate : colors.iceBlue};
    border-color: ${({ error }) => error ? colors.pomegranate : colors.iceBlue};
  }
`;

Input.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string
};

Input.defaultProps = {
  backgroundColor: colors.white,
  color: colors.whisperGrey
};

export default Input;
