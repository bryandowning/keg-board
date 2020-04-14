import styled from 'styled-components';
import { typeBodyPrimary, typeBodyLead } from '../styles/typography';

export default styled.div`
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
