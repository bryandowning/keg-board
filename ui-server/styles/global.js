import { createGlobalStyle } from 'styled-components';
import sanitize from '!!raw-loader!sanitize.css/sanitize.css';
import typography from '!!raw-loader!sanitize.css/typography.css';
import forms from '!!raw-loader!sanitize.css/forms.css';

export default createGlobalStyle`
  ${sanitize}
  ${typography}
  ${forms}
`;
