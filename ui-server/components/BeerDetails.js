import styled from 'styled-components';
import { typeHeadingH1 } from '../styles/typography';
import { grayLight } from '../styles/colors';

export default styled.div`
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
  opacity: ${({ isEmpty }) => (isEmpty ? 0.5 : 1)};

  @media (min-width: 600px) {
    grid-template-areas: 'tap title stats' '. notes notes';
    grid-template-rows: 1fr auto;
    grid-template-columns: auto 1fr 1.2fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: auto 1fr 2fr;
  }
`;
