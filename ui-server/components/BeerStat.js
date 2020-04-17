import { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

import IconBoom from './SVG/IconBoom';
import IconFlame from './SVG/IconFlame';
import IconGrains from './SVG/IconGrains';
import IconHop from './SVG/IconHop';
import IconScale from './SVG/IconScale';

import { typeSizeBodyXS } from '../styles/typography';
import { em } from '../styles/helpers';

const iconMapping = {
  Boom: IconBoom,
  Flame: IconFlame,
  Grains: IconGrains,
  Hop: IconHop,
  Scale: IconScale,
};

const StatValue = styled.div`
  display: inline-block;
  margin-left: 0.5em;
  vertical-align: text-top;
`;

export default styled(BeerStat)`
  ${typeSizeBodyXS}
  ${({ theme }) => theme.fontStackMono || null};
  display: ${({ featured }) => (featured ? 'block' : 'none')};
  font-weight: 500;
  line-height: ${em(16, 12)};
  white-space: nowrap;

  @media (min-width: 600px) {
    display: block;
  }

  ${({ theme }) => theme.beerStatOverrides || null};
`;

BeerStat.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  featured: PropTypes.bool,
  icon: PropTypes.oneOf(Object.keys(iconMapping)),
};

function BeerStat({ className, icon, children }) {
  const Icon = iconMapping[icon];
  const theme = useContext(ThemeContext);
  const iconColor = theme[`iconColor${icon}`] || null;

  return (
    <div className={className}>
      <Icon width="1.333334em" color={iconColor} />
      <StatValue>{children}</StatValue>
    </div>
  );
}
