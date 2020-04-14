import styled from 'styled-components';

import Header from '../components/Header';

import {
  typeHeadingH1,
  typeHeadingH4,
  typeBodyPrimary,
  typeBodySupplemental,
  typeBodyLead,
  typeLabel,
  typeStat,
} from '../styles/typography';
import { grayLight, grayMedium, grayDark } from '../styles/colors';

import beers from '../data/beers';
import { calcABV, calcBalance, calcCalories, getBeerColorPair } from '../utils/beer';

const BeerDetails = styled.div`
  ${typeHeadingH1()}
  display: grid;
  grid-template-areas: 'tap title stats';
  grid-template-rows: auto;
  grid-template-columns: auto 3fr 1fr;
  align-items: center;
  max-width: 1440px;
  padding: 0.25em 0.25em;
  margin: 0 auto;
  border-bottom: 1px solid ${grayLight};

  @media (min-width: 600px) {
    grid-template-areas: 'tap title stats' '. notes notes';
    grid-template-rows: 1fr auto;
    grid-template-columns: auto 1fr 1.2fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: auto 1fr 2fr;
  }
`;

const Tap = styled.pre`
  ${typeHeadingH4()}
  grid-area: tap;
  margin: 0 0.5em 0 0;
  text-align: right;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3ch;
    height: 3ch;
    color: ${({ colors }) => colors[0]};
    background-color: ${({ colors }) => colors[1]};
    background-image: url('/images/beer-swatch.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-blend-mode: overlay;
    border-radius: 50%;
  }
`;

const Beer = styled.div`
  grid-area: title;

  h2 {
    ${typeBodyLead()}
    margin: 0;
    font-weight: 600;
  }

  h3 {
    ${typeBodyPrimary()}
    margin: 0;
    font-weight: normal;
  }
`;

const Stats = styled.dl`
  ${typeBodyPrimary()}
  grid-area: stats;
  margin: 0;
`;

const Stat = styled.div`
  display: ${({ featured }) => (featured ? 'block' : 'none')};
  text-align: right;
  white-space: nowrap;

  dt {
    ${typeLabel()}
    display: none;
    margin-right: 0.5em;
  }

  dd {
    ${typeStat()}
    display: inline-block;
    padding: 0.1em 0.5em 0.15em;
    margin: 0;
    font-weight: normal;
    vertical-align: middle;
    background-color: ${grayLight};
    border: 1px solid ${grayMedium};
    border-radius: 0.5em;
  }

  @media (min-width: 600px) {
    display: inline-block;
    width: 25%;
  }

  @media (min-width: 1024px) {
    dt {
      display: inline-block;
    }
  }
`;

const Notes = styled.p`
  ${typeBodySupplemental()}
  display: none;
  grid-area: notes;
  margin: 0.5em 0 0;
  font-style: italic;
  color: ${grayDark};

  @media (min-width: 600px) {
    display: block;
  }
`;

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
        }) => (
          <BeerDetails key={id}>
            <Tap colors={getBeerColorPair(srm)}>
              <span>{tapNumber}</span>
            </Tap>
            <Beer>
              <h2>{beername}</h2>
              <h3>{style}</h3>
            </Beer>
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
                <dt>Gravity</dt>
                <dd>{calcBalance(og, ibu)} BU:GU</dd>
              </Stat>

              <Stat>
                <dt>Balance</dt>
                <dd>{og.toFixed(3)} OG</dd>
              </Stat>

              <Stat>
                <dt>Poured</dt>
                <dd>{((startAmount - remainAmount) * 128).toFixed()} oz</dd>
              </Stat>

              <Stat>
                <dt>Remaining</dt>
                <dd>{(remainAmount * 128).toFixed()} oz</dd>
              </Stat>
            </Stats>
            {notes && <Notes>{notes}</Notes>}
          </BeerDetails>
        )
      )}
    </div>
  );
}
