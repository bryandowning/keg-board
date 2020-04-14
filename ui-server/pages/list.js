import Header from '../components/Header';
import BeerDetails from '../components/BeerDetails';
import Tap from '../components/Tap';
import Beer from '../components/Beer';
import Stats from '../components/Stats';
import Stat from '../components/Stat';
import Notes from '../components/Notes';

import beers from '../data/beers';
import { calcABV, calcBalance, calcCalories, getBeerColorPair } from '../utils/beer';

export default function List() {
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
          <BeerDetails key={id} isEmpty={isEmpty} isActive={isActive}>
            <Tap colors={getBeerColorPair(srm)}>
              <span>{tapNumber}</span>
            </Tap>
            <Beer>
              <h2>{beername}</h2>
              {isActive && <h3>{style}</h3>}
            </Beer>

            {isActive && (
              <Stats>
                <Stat featured>
                  <dt>Alcohol</dt>
                  <dd>{calcABV(og, fg)}% ABV</dd>
                </Stat>

                <Stat featured>
                  <dt>Bitterness</dt>
                  <dd>{ibu} IBU</dd>
                </Stat>

                <Stat>
                  <dt>Calories</dt>
                  <dd>{calcCalories(og, fg)} kCal</dd>
                </Stat>

                <Stat>
                  <dt>Balance</dt>
                  <dd>{calcBalance(og, ibu)} BU:GU</dd>
                </Stat>

                <Stat>
                  <dd>{og.toFixed(3)} OG</dd>
                </Stat>

                <Stat>
                  <dd>{fg.toFixed(3)} FG</dd>
                </Stat>

                <Stat>
                  <dt>Color</dt>
                  <dd>{srm} SRM</dd>
                </Stat>

                <Stat>
                  <dt>Remaining</dt>
                  <dd>{((remainAmount / startAmount) * 100).toFixed(2)} %</dd>
                </Stat>
              </Stats>
            )}
            {notes && <Notes>{notes}</Notes>}
          </BeerDetails>
        )
      )}
    </div>
  );
}
