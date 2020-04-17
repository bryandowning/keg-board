import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import BeerTap from './BeerTap';
import BeerColor from './BeerColor';
import BeerTitle from './BeerTitle';
import BeerNotes from './BeerNotes';
import BeerStats from './BeerStats';
import BeerStat from './BeerStat';

import { vw } from '../styles/helpers';

const emptyStyles = css`
  /* stylelint-disable no-duplicate-selectors, selector-type-no-unknown */
  ${BeerColor},
  ${BeerTitle},
  ${BeerNotes},
  ${BeerStats} {
    opacity: 0.35;
  }
  /* stylelint-enable no-duplicate-selectors, selector-type-no-unknown */
`;

const inactiveStyles = css`
  @media (min-width: 0) {
    grid-template-areas: 'tap title';
    grid-template-rows: auto auto;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-align: center;

    ${BeerTap},
    ${BeerTitle} {
      opacity: 0.6;
    }

    ${BeerTitle} {
      margin-left: 0;
    }
  }
`;

export default styled(BeerRow)`
  display: grid;
  grid-template-areas: 'title title title' 'notes notes notes' 'tap color stats';
  grid-template-rows: auto auto auto;
  grid-template-columns: auto auto 1fr;
  max-width: calc(300px + ${vw(75, 375)});
  padding: 1em 0.5em;
  margin: 0 auto;
  box-shadow: inset 0 -2px 3px #f7f7f7;

  ${BeerTap} {
    grid-area: tap;
  }

  ${BeerColor} {
    grid-area: color;
  }

  ${BeerTitle} {
    grid-area: title;
    margin-left: 0.5em;
  }

  ${BeerNotes} {
    grid-area: notes;
    margin-bottom: 1.5em;
    margin-left: 0.75em;
  }

  ${BeerStats} {
    grid-area: stats;
  }

  @media (min-width: 600px) {
    grid-template-areas: 'tap color title' 'tap color notes' 'stats stats stats';
    grid-template-rows: auto auto auto;
    grid-template-columns: auto auto 1fr;
    max-width: calc(420px + ${vw(100, 600)});

    ${BeerNotes} {
      margin-bottom: 0;
    }
  }

  @media (min-width: 800px) {
    grid-template-areas: 'tap color title stats' 'tap color notes stats';
    grid-template-rows: auto 1fr;
    grid-template-columns: auto auto 1fr auto;
    max-width: calc(700px + ${vw(100)});
  }

  @media (min-width: 1280px) {
    padding-right: 1.5em;
  }

  @media (max-height: 480px) {
    padding: 0.5em;
  }

  ${({ isEmpty }) => (isEmpty ? emptyStyles : null)};
  ${({ isActive }) => (!isActive ? inactiveStyles : null)};
  ${({ theme }) => theme.beerRowOverrides || null};
  ${({ theme, isEmpty }) => (isEmpty ? theme.beerRowEmptyOverrides || null : null)};
  ${({ theme, isActive }) => (!isActive ? theme.beerRowInactiveOverrides || null : null)};
`;

BeerRow.propTypes = {
  abv: PropTypes.string,
  balance: PropTypes.string,
  beerStyle: PropTypes.string,
  calories: PropTypes.string,
  className: PropTypes.string,
  fg: PropTypes.number,
  ibu: PropTypes.number,
  isActive: PropTypes.bool,
  isEmpty: PropTypes.bool,
  level: PropTypes.number,
  name: PropTypes.string,
  notes: PropTypes.string,
  og: PropTypes.number,
  srm: PropTypes.number,
  tapNumber: PropTypes.number,
};

function BeerRow({
  className,
  tapNumber,
  level,
  srm,
  name,
  beerStyle,
  notes,
  abv,
  ibu,
  og,
  fg,
  isActive,
  calories,
  balance,
}) {
  return (
    <div className={className}>
      <BeerTap number={tapNumber} level={level} isActive={isActive} />
      {isActive && <BeerColor srm={srm} />}
      <BeerTitle isActive={isActive}>
        <h2>{isActive ? name : '[ disconnected ]'}</h2>
        {isActive && <h3>{beerStyle}</h3>}
      </BeerTitle>

      {isActive && (
        <BeerStats>
          <BeerStat icon="Boom">{abv}% ABV</BeerStat>
          <BeerStat icon="Hop">{ibu} IBU</BeerStat>
          <BeerStat icon="Flame">{calories} kCal</BeerStat>
          <BeerStat icon="Scale">{balance} BU:GU</BeerStat>
          <BeerStat icon="Grains">
            {og.toFixed(3)} OG
            <br />
            {fg.toFixed(3)} FG
          </BeerStat>
        </BeerStats>
      )}
      {notes && isActive && <BeerNotes>{notes}</BeerNotes>}
    </div>
  );
}
