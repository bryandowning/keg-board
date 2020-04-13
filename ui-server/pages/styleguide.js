import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import * as colors from '../styles/colors';

import Swatch from '../components/Swatch';

const StyledGuide = styled.div`
  padding: 0 2em;
`;

function Styleguide() {
  const {
    typeRefs: { h1, h2, h3, h4, primary },
    typeSizes: { h1Size, h2Size, h3Size, h4Size, primarySize },
  } = useTypeResizer();

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

      <ul>
        {colorsSorted.map(([key, value]) => (
          <Swatch key={key} name={key} colorValue={value} />
        ))}
      </ul>

      <hr />

      <h2>Typography</h2>

      <h3>Headings</h3>
      <h1 ref={h1}>H1, {h1Size}</h1>
      <h2 ref={h2}>H2, {h2Size}</h2>
      <h3 ref={h3}>H3, {h3Size}</h3>
      <h4 ref={h4}>H4, {h4Size}</h4>

      <h3>Body Copy</h3>
      <p ref={primary}>P, {primarySize} Primary body copy.</p>

      <hr />
    </StyledGuide>
  );
}

function useTypeResizer() {
  const h1 = useRef(null);
  const h2 = useRef(null);
  const h3 = useRef(null);
  const h4 = useRef(null);
  const primary = useRef(null);

  const [h1Size, setH1Size] = useState(0);
  const [h2Size, setH2Size] = useState(0);
  const [h3Size, setH3Size] = useState(0);
  const [h4Size, setH4Size] = useState(0);
  const [primarySize, setPrimarySize] = useState(0);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleResize() {
    setH1Size(getFontSize(h1.current));
    setH2Size(getFontSize(h2.current));
    setH3Size(getFontSize(h3.current));
    setH4Size(getFontSize(h4.current));
    setPrimarySize(getFontSize(primary.current));
  }

  function getFontSize(element) {
    return parseInt(getComputedStyle(element)['font-size'], 10);
  }

  return {
    typeRefs: {
      h1,
      h2,
      h3,
      h4,
      primary,
    },
    typeSizes: {
      h1Size,
      h2Size,
      h3Size,
      h4Size,
      primarySize,
    },
  };
}

export default Styleguide;
