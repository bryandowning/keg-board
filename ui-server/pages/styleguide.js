import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import * as colors from '../styles/colors';
import { typeBodyLead, typeLabel, typeStat } from '../styles/typography';

import Swatch from '../components/Swatch';

const StyledGuide = styled.div`
  padding: 0 2em;
`;

const Lead = styled.p`
  ${typeBodyLead()}
`;

const Stat = styled.p`
  ${typeStat()}
`;

const Label = styled.p`
  ${typeLabel()}
`;

function Styleguide() {
  const {
    typeRefs: { h1, h2, h3, h4, lead, primary, stat, label },
    typeSizes: { h1Size, h2Size, h3Size, h4Size, leadSize, primarySize, statSize, labelSize },
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
      <Lead ref={lead}>P, {leadSize} Lead body copy.</Lead>

      <p ref={primary}>P, {primarySize} Primary body copy.</p>

      <h3>Other</h3>
      <Stat ref={stat}>P, {statSize} Stat.</Stat>

      <Label ref={label}>P, {labelSize} Label.</Label>

      <hr />
    </StyledGuide>
  );
}

function useTypeResizer() {
  const h1 = useRef(null);
  const h2 = useRef(null);
  const h3 = useRef(null);
  const h4 = useRef(null);
  const lead = useRef(null);
  const primary = useRef(null);
  const stat = useRef(null);
  const label = useRef(null);

  const [h1Size, setH1Size] = useState(0);
  const [h2Size, setH2Size] = useState(0);
  const [h3Size, setH3Size] = useState(0);
  const [h4Size, setH4Size] = useState(0);
  const [leadSize, setLeadSize] = useState(0);
  const [primarySize, setPrimarySize] = useState(0);
  const [statSize, setStatSize] = useState(0);
  const [labelSize, setLabelSize] = useState(0);

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
    setLeadSize(getFontSize(lead.current));
    setPrimarySize(getFontSize(primary.current));
    setStatSize(getFontSize(stat.current));
    setLabelSize(getFontSize(label.current));
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
      lead,
      primary,
      stat,
      label,
    },
    typeSizes: {
      h1Size,
      h2Size,
      h3Size,
      h4Size,
      leadSize,
      primarySize,
      statSize,
      labelSize,
    },
  };
}

export default Styleguide;
