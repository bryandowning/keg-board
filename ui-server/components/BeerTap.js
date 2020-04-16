import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconKeg from '../components/SVG/IconKeg';

import { typeSizeBodyXS, typeSizeBodyXL } from '../styles/typography';
import { grayLight } from '../styles/colors';
import { vw } from '../styles/helpers';

export default styled(BeerTap)`
  position: relative;

  > div {
    ${({ theme }) => theme.fontStackMono || null};
    position: absolute;
    left: 0;
    width: 100%;
    line-height: 1;
    text-align: center;
  }
`;

const TapNumber = styled.div`
  ${typeSizeBodyXL}
  top: 45%;
  font-weight: 900;
  transform: translateY(-0.25em);
`;

const TapLevel = styled.div`
  ${typeSizeBodyXS}
  bottom: 0.25em;
  font-weight: 500;
`;

const TapGauge = styled.aside`
  position: absolute;
  top: 29%;
  right: 17%;
  bottom: 3%;
  left: 16%;

  &:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    height: ${({ levelPercentage }) => levelPercentage};
    content: '';
    background-color: ${grayLight};
  }
`;

BeerTap.propTypes = {
  className: PropTypes.string,
  level: PropTypes.number,
  number: PropTypes.number,
};

function BeerTap({ className, number, level }) {
  const levelPercentage = `${Math.round(level)}%`;
  return (
    <div className={className}>
      <TapGauge levelPercentage={levelPercentage} />
      <IconKeg width={vw(64)} />
      <TapNumber>{number}</TapNumber>
      <TapLevel>{level ? levelPercentage : 'EMPTY'}</TapLevel>
    </div>
  );
}
