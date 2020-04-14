import styled from 'styled-components';

import { vw } from '../styles/helpers';

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${vw(200)};
  min-height: 75px;
  background-image: url('/images/headers/beer.jpg');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;

  h1 {
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
    background-color: rgba(255, 230, 153, 0.2);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Jeremy&rsquo;s Beers</h1>
    </StyledHeader>
  );
};

export default Header;
