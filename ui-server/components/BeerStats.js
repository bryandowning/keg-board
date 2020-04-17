import styled from 'styled-components';

import BeerStat from './BeerStat';

import { typeSizeBodyXS } from '../styles/typography';

export default styled.div`
  ${typeSizeBodyXS}
  ${({ theme }) => theme.fontStackMono || null};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  height: 6em;

  ${BeerStat} {
    width: calc(10ch + 1.83333em);
    margin-bottom: 0.5em;

    &:last-child {
      margin-top: 0.5em;
      margin-bottom: auto;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: flex-start;
    height: auto;
    margin-top: 1em;

    ${BeerStat} {
      margin-bottom: 0;

      &:last-child {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 1.5em;
      }
    }
  }

  @media (min-width: 800px) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    width: calc(20ch + 7.6666666667em);
    height: 5.333334em;
    margin-top: 0;

    ${BeerStat} {
      margin-left: 2em;

      &:last-child {
        margin-top: 0.5em;
        margin-bottom: auto;
        margin-left: 0;
      }
    }
  }
`;
