/* eslint-disable import/no-unresolved */
import { createGlobalStyle } from 'styled-components';
import sanitize from '!!raw-loader!sanitize.css/sanitize.css';
import typography from '!!raw-loader!sanitize.css/typography.css';
import forms from '!!raw-loader!sanitize.css/forms.css';

import {
  typeHeadingH1,
  typeHeadingH2,
  typeHeadingH3,
  typeHeadingH4,
  typeBodyPrimary,
} from './typography';

export default createGlobalStyle`
  ${sanitize}
  ${typography}
  ${forms}

  body {
    ${typeBodyPrimary()}
    color: ${({ theme }) => theme.foreground};
    background-color: ${({ theme }) => theme.background};
  }

  /* HEADINGS */
  h1 {
    ${typeHeadingH1}
  }

  h2 {
    ${typeHeadingH2}
  }

  h3 {
    ${typeHeadingH3}
  }

  h4 {
    ${typeHeadingH4}
  }

  /* LISTS */
  ul {
    padding: 0;
    margin: 1em 0;
  }
`;
