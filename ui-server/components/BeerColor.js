import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconPint from './SVG/IconPint';

import { getBeerColorPair } from '../utils/beer';

import { typeSizeBodyXXS, typeSizeBodyXS } from '../styles/typography';
import { vw } from '../styles/helpers';

export default styled(BeerColor)`
  display: block;
`;

const BeerColorFrame = styled.div`
  position: relative;
  display: inline-block;
`;

const BeerColorLabel = styled.div`
  ${({ theme }) => theme.fontStackMono || null};
  ${typeSizeBodyXS}
  position: absolute;
  top: 26%;
  left: 0;
  width: 100%;
  font-weight: 900;
  color: ${({ color }) => color};
  text-align: center;

  span {
    ${typeSizeBodyXXS}
    font-weight: 500;
    letter-spacing: 0.5px;
  }
`;

BeerColor.propTypes = {
  className: PropTypes.string,
  srm: PropTypes.number,
};

function BeerColor({ className, srm }) {
  const [textColor, beerColor] = getBeerColorPair(srm);
  return (
    <div className={className}>
      <BeerColorFrame>
        <IconPint beerColor={beerColor} width={vw(64)} />
        <BeerColorLabel color={textColor}>
          {srm}
          <br />
          <span>SRM</span>
        </BeerColorLabel>
      </BeerColorFrame>
    </div>
  );
}
