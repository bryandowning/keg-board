import styled from 'styled-components';

import BeerStat from './BeerStat';

import { typeSizeBodyXS } from '../styles/typography';

export default styled.div`
  ${typeSizeBodyXS}
  ${({ theme }) => theme.fontStackMono || null};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-end;
  justify-content: flex-start;
  width: calc(10ch + 3.8333333334em);
  height: 5.333334em;

  ${BeerStat} {
    width: calc(10ch + 1.83333em);
    margin-bottom: 0.5em;
    margin-left: 2em;

    &:last-child {
      margin-top: 0.5em;
      margin-bottom: auto;
    }
  }

  @media (min-width: 600px) {
    justify-content: space-between;
    width: calc(20ch + 7.6666666667em);

    ${BeerStat} {
      margin-bottom: 0;
    }
  }
`;
