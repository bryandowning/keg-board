import styled from 'styled-components';

import { vw } from '../styles/helpers';
import { typeHeadingH4 } from '../styles/typography';

const StyledHeader = styled.header`
  ${typeHeadingH4()}
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.75em;
  min-height: 48px;

  h1 {
    ${typeHeadingH4()}
    margin: 0;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  @media (max-height: 480px) {
    margin-bottom: 0.75rem;
  }

  ${({ theme }) => theme.headerOverrides || null};
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Jeremy&rsquo;s Beers</h1>
    </StyledHeader>
  );
};

export default Header;
