import Header from '../components/Header';
import BeerRow from '../components/BeerRow';

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
          <BeerRow
            {...{
              tapNumber,
              srm,
              og,
              fg,
              ibu,
              notes,
              isEmpty,
              isActive,
              key: id,
              name: beername,
              beerStyle: style,
              level: (remainAmount / startAmount) * 100,
              abv: calcABV(og, fg),
              calories: calcCalories(og, fg),
              balance: calcBalance(og, ibu),
            }}
          />
        )
      )}
    </div>
  );
}
