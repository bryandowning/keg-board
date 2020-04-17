import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconKeg from '../components/SVG/IconKeg';

import { typeSizeBodyXS, typeSizeBodyXL } from '../styles/typography';
import { grayLight } from '../styles/colors';
import { vw } from '../styles/helpers';

const BeerTapFrame = styled.div`
  position: relative;
  display: inline-block;

  svg {
    width: calc(62px + ${vw(2)});
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
  display: ${({ isActive }) => (!isActive ? 'none' : 'block')};
  padding: ${({ isEmpty }) => (isEmpty ? '0.25em 0' : null)};
  font-weight: 500;
  color: ${({ isEmpty }) => (isEmpty ? 'white' : null)};
  background-color: ${({ isEmpty }) => (isEmpty ? '#bf0000' : null)};
  opacity: ${({ isEmpty }) => (isEmpty ? 1 : 0.7)};
  transform: ${({ isEmpty }) => (isEmpty ? 'rotate(-10deg) translateY(-60%)' : null)};
`;

const TapGauge = styled.aside`
  position: absolute;
  top: 29%;
  right: 17%;
  bottom: 3%;
  left: 16%;
  display: ${({ isActive }) => (!isActive ? 'none' : 'block')};

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

  ${({ theme }) => theme.beerTapGaugeOverrides || null};
`;

export default styled(BeerTap)`
  ${TapNumber},
  ${TapLevel} {
    ${({ theme }) => theme.fontStackMono || null};
    position: absolute;
    left: 0;
    width: 100%;
    line-height: 1;
    text-align: center;
  }
`;

BeerTap.propTypes = {
  className: PropTypes.string,
  isActive: PropTypes.bool,
  level: PropTypes.number,
  number: PropTypes.number,
};

function BeerTap({ className, isActive, number, level }) {
  const levelPercentage = `${Math.round(level)}%`;
  return (
    <div className={className}>
      <BeerTapFrame>
        <TapGauge levelPercentage={levelPercentage} isActive={isActive} />
        <IconKeg />
        <TapNumber>{number}</TapNumber>
        <TapLevel isEmpty={!level} isActive={isActive}>
          {level ? levelPercentage : 'EMPTY'}
        </TapLevel>
      </BeerTapFrame>
    </div>
  );
}
