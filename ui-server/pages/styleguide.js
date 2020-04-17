import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Swatch from '../components/Swatch';

import { beerColors } from '../utils/beer';

import * as colors from '../styles/colors';
import {
  typeSizeBodyXXS,
  typeSizeBodyXS,
  typeSizeBodyS,
  typeSizeBodyM,
  typeSizeBodyL,
  typeSizeBodyXL,
  typeSizeBodyXXL,
} from '../styles/typography';

const StyledGuide = styled.div`
  padding: 0 2em;
`;

const TypeSizeBodyXXS = styled.div`
  ${typeSizeBodyXXS}
  margin-bottom: 1em;
`;
const TypeSizeBodyXS = styled.div`
  ${typeSizeBodyXS}
  margin-bottom: 1em;
`;
const TypeSizeBodyS = styled.div`
  ${typeSizeBodyS}
  margin-bottom: 1em;
`;
const TypeSizeBodyM = styled.div`
  ${typeSizeBodyM}
  margin-bottom: 1em;
`;
const TypeSizeBodyL = styled.div`
  ${typeSizeBodyL}
  margin-bottom: 1em;
`;
const TypeSizeBodyXL = styled.div`
  ${typeSizeBodyXL}
  margin-bottom: 1em;
`;
const TypeSizeBodyXXL = styled.div`
  ${typeSizeBodyXXL}
  margin-bottom: 1em;
`;

function Styleguide() {
  const typeSizes = useTypeSizing();

  // Sort colors alphabetically by name
  const colorsSorted = Object.entries(colors).sort(([nameA], [nameB]) => {
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  return (
    <StyledGuide>
      <h1>Style Guide</h1>
      <h2>Color</h2>

      <h3>Default</h3>

      <ul>
        {colorsSorted.map(([key, value]) => (
          <Swatch key={key} name={key} colorValue={value} />
        ))}
      </ul>

      <h3>Beer Colors</h3>
      <ul>
        {beerColors.map((color, i) => (
          <Swatch key={i + color} name={i} colorValue={color} />
        ))}
      </ul>

      <hr />

      <h2>Typography</h2>

      <h3>Headings</h3>
      <h1 className="typeSizerTarget" data-name="typeHeadingH1">
        H1, {typeSizes.typeHeadingH1}
      </h1>
      <h2 className="typeSizerTarget" data-name="typeHeadingH2">
        H2, {typeSizes.typeHeadingH2}
      </h2>
      <h3 className="typeSizerTarget" data-name="typeHeadingH3">
        H3, {typeSizes.typeHeadingH3}
      </h3>
      <h4 className="typeSizerTarget" data-name="typeHeadingH4">
        H4, {typeSizes.typeHeadingH4}
      </h4>

      <h3>Body Type</h3>

      <TypeSizeBodyXXS className="typeSizerTarget" data-name="typeSizeBodyXXS">
        typeSizeBodyXXS: {typeSizes.typeSizeBodyXXS}
        <br />
        The quick brown fox jumps over the lazy dog.
      </TypeSizeBodyXXS>
      <TypeSizeBodyXS className="typeSizerTarget" data-name="typeSizeBodyXS">
        typeSizeBodyXS: {typeSizes.typeSizeBodyXS}
        <br />
        The quick brown fox jumps over the lazy dog.
      </TypeSizeBodyXS>
      <TypeSizeBodyS className="typeSizerTarget" data-name="typeSizeBodyS">
        typeSizeBodyS: {typeSizes.typeSizeBodyS}
        <br />
        The quick brown fox jumps over the lazy dog.
      </TypeSizeBodyS>
      <TypeSizeBodyM className="typeSizerTarget" data-name="typeSizeBodyM">
        typeSizeBodyM: {typeSizes.typeSizeBodyM}
        <br />
        The quick brown fox jumps over the lazy dog.
      </TypeSizeBodyM>
      <TypeSizeBodyL className="typeSizerTarget" data-name="typeSizeBodyL">
        typeSizeBodyL: {typeSizes.typeSizeBodyL}
        <br />
        The quick brown fox jumps over the lazy dog.
      </TypeSizeBodyL>
      <TypeSizeBodyXL className="typeSizerTarget" data-name="typeSizeBodyXL">
        typeSizeBodyXL: {typeSizes.typeSizeBodyXL}
        <br />
        The quick brown fox jumps over the lazy dog.
      </TypeSizeBodyXL>
      <TypeSizeBodyXXL className="typeSizerTarget" data-name="typeSizeBodyXXL">
        typeSizeBodyXXL: {typeSizes.typeSizeBodyXXL}
        <br />
        The quick brown fox jumps over the lazy dog.
      </TypeSizeBodyXXL>

      <hr />
    </StyledGuide>
  );
}

function useTypeSizing() {
  const [typeSizes, setTypeSizes] = useState({});

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleResize() {
    const typeStyles = document.getElementsByClassName('typeSizerTarget');
    for (const style of typeStyles) {
      setTypeSizes((sizes) => {
        const { name } = style.dataset;
        sizes[name] = getFontSize(style);
        return { ...sizes };
      });
    }
  }

  function getFontSize(element) {
    return parseInt(getComputedStyle(element)['font-size'], 10);
  }

  return typeSizes;
}

export default Styleguide;
