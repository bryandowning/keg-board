import styled from 'styled-components';

import { vw } from '../styles/helpers';
import { typeHeadingH4 } from '../styles/typography';

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${vw(56)};
  min-height: 48px;
  background-color: #f7f7f7;
  box-shadow: 0 1px 1px #ebebeb, 0 2px 3px #f7f7f7;

  h1 {
    ${typeHeadingH4()}
    margin: 0;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 1px;
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
