import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSVG = styled.svg`
  position: relative;
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center center;
  fill: black;
`;

SVG.propTypes = {
  children: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  preserveAspectRatio: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SVG.defaultProps = {
  preserveAspectRatio: 'none',
};

export default function SVG({ children, height, viewBox, width, preserveAspectRatio }) {
  return (
    <StyledSVG
      height={height}
      preserveAspectRatio={preserveAspectRatio}
      width={width}
      viewBox={viewBox}
    >
      {children}
    </StyledSVG>
  );
}
