import Header from '../components/Header';
import BeerRow from '../components/BeerRow';
import BeerTap from '../components/BeerTap';
import BeerTitle from '../components/BeerTitle';
import BeerStats from '../components/BeerStats';
import BeerStat from '../components/BeerStat';
import BeerNotes from '../components/BeerNotes';

import beers from '../data/beers';
import { calcABV, calcBalance, calcCalories, getBeerColorPair } from '../utils/beer';

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
            <BeerTitle isActive={isActive}>
              <h2>{isActive ? beername : 'EMPTY'}</h2>
              {isActive && <h3>{style}</h3>}
            </BeerTitle>

            {isActive && (
              <BeerStats>
                <BeerStat featured>
                  <dt>Alcohol</dt>
                  <dd>{calcABV(og, fg)}% ABV</dd>
                </BeerStat>

                <BeerStat featured>
                  <dt>Bitterness</dt>
                  <dd>{ibu} IBU</dd>
                </BeerStat>

                <BeerStat>
                  <dt>Calories</dt>
                  <dd>{calcCalories(og, fg)} kCal</dd>
                </BeerStat>

                <BeerStat>
                  <dt>Remaining</dt>
                  <dd>{((remainAmount / startAmount) * 100).toFixed(2)} %</dd>
                </BeerStat>

                <BeerStat>
                  <dt>Color</dt>
                  <dd>{srm} SRM</dd>
                </BeerStat>

                <BeerStat double>
                  <dt>Original/Final Gravity</dt>
                  <dd>{og.toFixed(3)} OG</dd>
                  <dd>{fg.toFixed(3)} FG</dd>
                </BeerStat>

                <BeerStat>
                  <dt>Balance</dt>
                  <dd>{calcBalance(og, ibu)} BU:GU</dd>
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
