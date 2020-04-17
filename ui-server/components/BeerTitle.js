import styled from 'styled-components';
import { typeSizeBodyS, typeSizeBodyM } from '../styles/typography';

export default styled.div`
  h2 {
    ${typeSizeBodyM}
    margin: 0;
    font-weight: 500;
    line-height: ${18 / 16};
    text-transform: uppercase;
    letter-spacing: 1px;
    ${({ isActive, theme }) => (!isActive ? `color: ${theme.inactiveRowTextColor};` : null)};
  }

  h3 {
    ${typeSizeBodyS}
    margin: 0;
    font-weight: normal;
    line-height: 1;
  }

  ${({ theme }) => theme.beerTitleOverrides || null};
`;
