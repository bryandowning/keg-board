import PropTypes from 'prop-types';
import styled from 'styled-components';

import BeerTap from './BeerTap';
import BeerColor from './BeerColor';
import BeerTitle from './BeerTitle';
import BeerNotes from './BeerNotes';
import BeerStats from './BeerStats';
import BeerStat from './BeerStat';

export default styled(BeerRow)`
  display: grid;
  grid-template-areas: 'title title title' 'notes notes notes' 'tap color stats';
  grid-template-rows: auto auto auto;
  grid-template-columns: auto auto 1fr;
  max-width: 375px;
  padding: 1em 0.5em;
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
    max-width: 520px;

    ${BeerNotes} {
      margin-bottom: 0;
    }
  }

  @media (min-width: 800px) {
    grid-template-areas: 'tap color title stats' 'tap color notes stats';
    grid-template-rows: auto 1fr;
    grid-template-columns: auto auto 1fr auto;
    max-width: 800px;
  }

  @media (min-width: 1280px) {
    max-width: 1000px;
    padding-right: 1.5em;
  }

  @media (min-width: 2560px) {
    max-width: 1200px;
  }

  @media (max-height: 480px) {
    padding: 0.5em;
  }

  ${({ theme }) => theme.beerRowOverrides || null};
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
      <BeerTap number={tapNumber} level={level} />
      <BeerColor srm={srm} />
      <BeerTitle isActive={isActive}>
        <h2>{isActive ? name : 'EMPTY'}</h2>
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
