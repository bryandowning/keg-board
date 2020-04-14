import styled from 'styled-components';
import { typeBodyPrimary, typeBodyLead } from '../styles/typography';

import { grayDark } from '../styles/colors';

export default styled.div`
  grid-area: title;

  h2 {
    ${typeBodyLead()}
    margin: 0;
    font-weight: 600;
    ${({ isActive }) => (!isActive ? `color: ${grayDark};` : null)};
  }

  h3 {
    ${typeBodyPrimary()}
    margin: 0;
    font-weight: normal;
  }
`;
