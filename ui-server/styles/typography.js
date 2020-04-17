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

// Body Type
// =============================================================================

// 10/12 @ 800
export const typeSizeBodyXXS = css`
  font-size: calc(${rem(8)} + ${vw(2)});
  line-height: ${12 / 10};
`;

// 12/14 @ 800
export const typeSizeBodyXS = css`
  font-size: calc(${rem(10)} + ${vw(2)});
  line-height: ${14 / 12};
`;

// 14/16 @ 800
export const typeSizeBodyS = css`
  font-size: calc(${rem(12)} + ${vw(2)});
  line-height: ${16 / 14};
`;

// 16/24 @ 800
export const typeSizeBodyM = css`
  font-size: calc(${rem(14)} + ${vw(2)});
  line-height: ${24 / 16};
`;

// 18/24 @ 800
export const typeSizeBodyL = css`
  font-size: calc(${rem(16)} + ${vw(2)});
  line-height: ${24 / 18};
`;

// 20/24 @ 800
export const typeSizeBodyXL = css`
  font-size: calc(${rem(18)} + ${vw(2)});
  line-height: ${24 / 20};
`;

// 24/28 @ 800
export const typeSizeBodyXXL = css`
  font-size: calc(${rem(22)} + ${vw(2)});
  line-height: ${28 / 24};
`;
