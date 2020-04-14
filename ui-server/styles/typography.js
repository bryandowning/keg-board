import { css } from 'styled-components';

import { rem, vw } from './helpers';

// Heading Styles

// H1: 64 @ 1920
export function typeHeadingH1() {
  return css`
    font-size: calc(${rem(40)} + ${vw(24)});
    font-weight: bold;
    line-height: 1.25;
  `;
}

// H2: 48 @ 1920
export function typeHeadingH2() {
  return css`
    font-size: calc(${rem(36)} + ${vw(12)});
    font-weight: bold;
    line-height: 1;
  `;
}

// H3: 40 @ 1920
export function typeHeadingH3() {
  return css`
    font-size: calc(${rem(28)} + ${vw(12)});
    font-weight: bold;
    line-height: 1.2;
  `;
}

// H4: 32 @ 1920
export function typeHeadingH4() {
  return css`
    font-size: calc(${rem(20)} + ${vw(12)});
    font-weight: bold;
    line-height: 1.25;
  `;
}

// Body Styles

// Lead: 18 @ 1920
export function typeBodyLead() {
  return css`
    font-size: calc(${rem(16)} + ${vw(2)});
    font-weight: normal;
    line-height: 1.33334;
  `;
}

// Primary: 16 @ 1920
export function typeBodyPrimary() {
  return css`
    font-size: calc(${rem(14)} + ${vw(2)});
    font-weight: normal;
    line-height: 1.5;
  `;
}

// Primary: 14 @ 1920
export function typeBodySupplemental() {
  return css`
    font-size: calc(${rem(12)} + ${vw(2)});
    font-weight: normal;
    line-height: 1.14286;
  `;
}

// Label: 12 @ 1920
export function typeStat() {
  return css`
    font-size: calc(${rem(10)} + ${vw(2)});
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 1px;
  `;
}

// Stat: 10 @ 1920
export function typeLabel() {
  return css`
    font-size: calc(${rem(8)} + ${vw(2)});
    font-weight: bold;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 1px;
  `;
}
