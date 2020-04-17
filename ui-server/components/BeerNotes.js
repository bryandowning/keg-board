import styled from 'styled-components';

import { typeSizeBodyXS } from '../styles/typography';
import { em } from '../styles/helpers';
import { grayDark } from '../styles/colors';

export default styled.p`
  ${typeSizeBodyXS}
  max-width: ${em(340, 12)};
  margin: ${em(8, 12)} 0 0;
  font-style: italic;
  color: ${grayDark};

  ${({ theme }) => theme.beerNotesOverrides || null};
`;
