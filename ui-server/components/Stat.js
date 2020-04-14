import styled from 'styled-components';

import { typeLabel, typeStat } from '../styles/typography';
import { grayLight, grayMedium } from '../styles/colors';

export default styled.div`
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
