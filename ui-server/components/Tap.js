import styled from 'styled-components';
import { typeHeadingH4 } from '../styles/typography';

export default styled.pre`
  ${typeHeadingH4()}
  grid-area: tap;
  margin: 0 0.5em 0 0;
  text-align: right;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3ch;
    height: 3ch;
    color: ${({ colors }) => colors[0]};
    background-color: ${({ colors }) => colors[1]};
    background-image: url('/images/beer-swatch.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-blend-mode: overlay;
    border-radius: 50%;
  }
`;
