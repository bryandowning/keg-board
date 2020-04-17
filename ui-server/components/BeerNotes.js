import styled from 'styled-components';

import { typeSizeBodyXS } from '../styles/typography';
import { em } from '../styles/helpers';
import { grayDark } from '../styles/colors';

export default styled.p`
  ${typeSizeBodyXS}
  display: none;
  margin: ${em(8, 12)} 0 0;
  font-style: italic;
  color: ${grayDark};

  @media (min-width: 600px) {
    display: block;
  }

  ${({ theme }) => theme.beerNotesOverrides || null};
`;
