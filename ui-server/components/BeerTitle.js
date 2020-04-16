import styled from 'styled-components';
import { typeBodyPrimary, typeBodyLead } from '../styles/typography';

export default styled.div`
  grid-area: title;

  h2 {
    ${typeBodyLead()}
    margin: 0;
    font-weight: 600;
    ${({ isActive, theme }) => (!isActive ? `color: ${theme.inactiveRowTextColor};` : null)};
  }

  h3 {
    ${typeBodyPrimary()}
    margin: 0;
    font-weight: normal;
  }

  ${({ theme }) => theme.beerTitleOverrides || null};
`;
