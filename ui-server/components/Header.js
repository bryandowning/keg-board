import styled from 'styled-components';

import { vw } from '../styles/helpers';
import { typeHeadingH3 } from '../styles/typography';

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${vw(56)};
  min-height: 48px;
  background-image: url('/images/headers/beer.jpg');
  background-repeat: no-repeat;
  background-position: center 85%;
  background-size: cover;

  h1 {
    ${typeHeadingH3()}
    position: relative;
    z-index: 1;
    margin: 0;
    color: #470606;
  }

  &:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    content: '';
    background-color: rgba(255, 230, 153, 0.4);
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
