import styled from 'styled-components';

import { typeBodySupplemental } from '../styles/typography';
import { grayDark } from '../styles/colors';

export default styled.p`
  ${typeBodySupplemental()}
  display: none;
  grid-area: notes;
  margin: 0.5em 0 0;
  font-style: italic;
  color: ${grayDark};

  @media (min-width: 600px) {
    display: block;
  }

  ${({ theme }) => theme.beerNotesOverrides || null};
`;
