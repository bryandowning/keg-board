import styled from 'styled-components';

import { typeHeadingH4, typeStat } from '../styles/typography';
import { grayLight, grayMedium } from '../styles/colors';

export default styled.pre`
  position: relative;
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
    color: ${({ colors, isActive }) => (isActive ? colors[0] : grayLight)};
    background-color: ${({ colors, isActive }) => (isActive ? colors[1] : grayMedium)};
    background-image: ${({ isActive }) => (isActive ? 'url("/images/beer-swatch.jpg")' : 'none')};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-blend-mode: overlay;
    border-radius: 50%;
  }

  p {
    ${typeStat()}
    margin-top: 0.5em;
    margin-bottom: 0;
    text-align: center;
  }
`;
