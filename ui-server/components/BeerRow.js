import styled from 'styled-components';

import BeerTap from './BeerTap';
import BeerColor from './BeerColor';
import BeerTitle from './BeerTitle';
import BeerNotes from './BeerNotes';
import BeerStats from './BeerStats';

import { grayLight } from '../styles/colors';

export default styled.div`
  display: grid;
  grid-template-areas: 'tap color title stats';
  grid-template-rows: auto;
  grid-template-columns: auto auto 1fr auto;
  max-width: 1440px;
  padding: 0.5em;
  margin: 0 auto;
  background-color: ${({ isActive, isEmpty, theme }) =>
    !isActive || isEmpty ? theme.emptyRowBackgroundColor : 'transparent'};
  border-bottom: 1px solid ${grayLight};
  opacity: ${({ isActive }) => (!isActive ? 0.5 : 1)};

  ${BeerTap} {
    grid-area: tap;
  }

  ${BeerColor} {
    grid-area: color;
  }

  ${BeerTitle} {
    grid-area: title;
  }

  ${BeerNotes} {
    grid-area: notes;
  }

  ${BeerStats} {
    grid-area: stats;
  }

  @media (min-width: 600px) {
    grid-template-areas: 'tap color title stats' 'tap color notes stats';
    grid-template-rows: auto auto;
  }

  ${({ theme }) => theme.beerRowOverrides || null};
`;
