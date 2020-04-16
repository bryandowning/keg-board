import { css } from 'styled-components';

// Kalam
export default css`
  /* kalam-300 - latin */
  @font-face {
    font-family: 'Kalam';
    font-style: normal;
    font-weight: 300;
    src: local('Kalam Light'), local('Kalam-Light'),
      url('/fonts/Kalam/kalam-v10-latin-300.woff2') format('woff2'),
      url('/fonts/Kalam/kalam-v10-latin-300.woff') format('woff');
  }
  /* kalam-regular - latin */
  @font-face {
    font-family: 'Kalam';
    font-style: normal;
    font-weight: 400;
    src: local('Kalam'), local('Kalam-Regular'),
      url('/fonts/Kalam/kalam-v10-latin-regular.woff2') format('woff2'),
      url('/fonts/Kalam/kalam-v10-latin-regular.woff') format('woff');
  }
  /* kalam-700 - latin */
  @font-face {
    font-family: 'Kalam';
    font-style: normal;
    font-weight: 700;
    src: local('Kalam Bold'), local('Kalam-Bold'),
      url('/fonts/Kalam/kalam-v10-latin-700.woff2') format('woff2'),
      url('/fonts/Kalam/kalam-v10-latin-700.woff') format('woff');
  }
`;
