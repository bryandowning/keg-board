import styled from 'styled-components';

import BeerTap from './BeerTap';
import BeerColor from './BeerColor';
import BeerTitle from './BeerTitle';
import BeerNotes from './BeerNotes';
import BeerStats from './BeerStats';

export default styled.div`
  display: grid;
  grid-template-areas: 'tap color title stats';
  grid-template-rows: auto;
  grid-template-columns: auto auto 1fr auto;
  max-width: 1440px;
  padding: 0.5em;
  margin: 0 auto;
  box-shadow: 0 1px 1px #ebebeb, 0 2px 3px #f7f7f7;
  opacity: ${({ isActive, isEmpty }) => (!isActive || isEmpty ? 0.35 : 1)};

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
