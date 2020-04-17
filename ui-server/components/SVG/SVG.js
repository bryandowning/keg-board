import styled from 'styled-components';

export default styled.svg.attrs(({ preserveAspectRatio }) => ({
  preserveAspectRatio: preserveAspectRatio || 'none',
}))`
  position: relative;
  display: inline-block;
  line-height: 1;
  color: ${({ color, theme }) => color || theme.iconColor || null};
  vertical-align: middle;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center center;
  fill: black;
`;
