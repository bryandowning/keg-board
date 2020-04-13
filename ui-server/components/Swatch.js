import PropTypes from 'prop-types';
import styled from 'styled-components';

import { black, white } from '../styles/colors';

const SwatchItem = styled.li`
  display: inline-block;
  padding: 0;
  margin: 1rem;
  list-style-type: none;

  > div {
    width: 10vw;
    height: 10vw;
    margin: 0 auto;
    background-color: ${({ colorValue }) => colorValue};
    border: 2px solid ${white};
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px ${black};
  }

  > p {
    text-align: center;
  }
`;

Swatch.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
};

export default function Swatch({ name, ...rest }) {
  return (
    <SwatchItem {...rest}>
      <div />
      <p>{name}</p>
    </SwatchItem>
  );
}
