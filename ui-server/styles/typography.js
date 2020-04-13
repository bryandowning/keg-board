import { css } from 'styled-components';

import { rem, vw } from './helpers';

// Heading Styles

// H1: 64 @ 1920
export function typeHeadingH1() {
  return css`
    font-size: calc(${rem(40)} + ${vw(24)});
    line-height: 1.25;
  `;
}

// H2: 48 @ 1920
export function typeHeadingH2() {
  return css`
    font-size: calc(${rem(36)} + ${vw(12)});
    line-height: 1;
  `;
}

// H3: 40 @ 1920
export function typeHeadingH3() {
  return css`
    font-size: calc(${rem(28)} + ${vw(12)});
    line-height: 1.2;
  `;
}

// H4: 32 @ 1920
export function typeHeadingH4() {
  return css`
    font-size: calc(${rem(20)} + ${vw(12)});
    line-height: 1.25;
  `;
}

// Body Styles

// Primary: 16 @ 1920
export function typeBodyPrimary() {
  return css`
    font-size: calc(${rem(14)} + ${vw(2)});
    line-height: 1.5;
  `;
}
