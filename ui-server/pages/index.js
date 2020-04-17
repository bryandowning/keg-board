import Header from '../components/Header';
import BeerRow from '../components/BeerRow';
import BeerTap from '../components/BeerTap';
import BeerColor from '../components/BeerColor';
import BeerTitle from '../components/BeerTitle';
import BeerStats from '../components/BeerStats';
import BeerStat from '../components/BeerStat';
import BeerNotes from '../components/BeerNotes';

import beers from '../data/beers';
import { calcABV, calcBalance, calcCalories } from '../utils/beer';

export default function Index() {
  return (
    <div>
      <Header />

      {beers.map(
        ({
          beername,
          fg,
          ibu,
          id,
          notes,
          og,
          remainAmount,
          srm,
          startAmount,
          style,
          tapNumber,
          isEmpty,
          isActive,
        }) => (
          <BeerRow key={id} isEmpty={isEmpty} isActive={isActive}>
            <BeerTap number={tapNumber} level={(remainAmount / startAmount) * 100} />
            <BeerColor srm={srm} />
            <BeerTitle isActive={isActive}>
              <h2>{isActive ? beername : 'EMPTY'}</h2>
              {isActive && <h3>{style}</h3>}
            </BeerTitle>

            {isActive && (
              <BeerStats>
                <BeerStat featured icon="Boom">
                  {calcABV(og, fg)}% ABV
                </BeerStat>

                <BeerStat featured icon="Hop">
                  {ibu} IBU
                </BeerStat>

                <BeerStat icon="Flame">{calcCalories(og, fg)} kCal</BeerStat>

                <BeerStat icon="Scale">{calcBalance(og, ibu)} BU:GU</BeerStat>

                <BeerStat icon="Grains">
                  {og.toFixed(3)} OG
                  <br />
                  {fg.toFixed(3)} FG
                </BeerStat>
              </BeerStats>
            )}
            {notes && isActive && <BeerNotes>{notes}</BeerNotes>}
          </BeerRow>
        )
      )}
    </div>
  );
}
