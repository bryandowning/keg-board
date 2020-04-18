import { css } from 'styled-components';

// Montserrat
export default css`
  /* montserrat-100 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 100;
    src: local('Montserrat Thin'), local('Montserrat-Thin'),
      url('/fonts/Montserrat/montserrat-v14-latin-100.woff2') format('woff2'),
      url('/fonts/Montserrat/montserrat-v14-latin-100.woff') format('woff');
  }

  /* montserrat-100italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 100;
    src: local('Montserrat Thin Italic'), local('Montserrat-ThinItalic'),
      url('/fonts/Montserrat/montserrat-v14-latin-100italic.woff2') format('woff2'),
      url('/fonts/Montserrat/montserrat-v14-latin-100italic.woff') format('woff');
  }

  /* montserrat-200 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 200;
    src: local('Montserrat ExtraLight'), local('Montserrat-ExtraLight'),
      url('/fonts/Montserrat/montserrat-v14-latin-200.woff2') format('woff2'),
      url('/fonts/Montserrat/montserrat-v14-latin-200.woff') format('woff');
  }

  /* montserrat-300 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    src: local('Montserrat Light'), local('Montserrat-Light'),
      url('/fonts/Montserrat/montserrat-v14-latin-300.woff2') format('woff2'),
      url('/fonts/Montserrat/montserrat-v14-latin-300.woff') format('woff');
  }

  /* montserrat-200italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 200;
    src: local('Montserrat ExtraLight Italic'), local('Montserrat-ExtraLightItalic'),
      url('/fonts/Montserrat/montserrat-v14-latin-200italic.woff2') format('woff2'),
      url('/fonts/Montserrat/montserrat-v14-latin-200italic.woff') format('woff');
  }

  /* montserrat-300italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 300;
    src: local('Montserrat Light Italic'), local('Montserrat-LightItalic'),
      url('/fonts/Montserrat/montserrat-v14-latin-300italic.woff2') format('woff2'),
      url('/fonts/Montserrat/montserrat-v14-latin-300italic.woff') format('woff');
  }

  /* montserrat-regular - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat Regular'), local('Montserrat-Regular'),
      url('/fonts/Montserrat/montserrat-v14-latin-regular.woff2') format('woff2'),
      url('/fonts/Montserrat/montserrat-v14-latin-regular.woff') format('woff');
  }

  /* montserrat-italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 400;
    src: local('Montserrat Italic'), local('Montserrat-Italic'),
      url('/fonts/Montserrat/montserrat-v14-latin-italic.woff2') format('woff2'),
      url('/fonts/Montserrat/montserrat-v14-latin-italic.woff') format('woff');
  }

  /* montserrat-500 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: local('Montserrat Medium'), local('Montserrat-Medium'),
      url('/fonts/Montserrat/montserrat-v14-latin-500.woff2') format('woff2'),
      url('/fonts/Montserrat/montserrat-v14-latin-500.woff') format('woff');
  }

  /* montserrat-500italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 500;
    src: local('Montserrat Medium Italic'), local('Montserrat-MediumItalic'),
      url('/fonts/Montserrat/montserrat-v14-latin-500italic.woff2') format('woff2'),
      url('/fonts/Montserrat/montserrat-v14-latin-500italic.woff') format('woff');
  }

  /* montserrat-600 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
      url('/fonts/Montserrat/montserrat-v14-latin-600.woff2') format('woff2'),
      url('/fonts/Montserrat/montserrat-v14-latin-600.woff') format('woff');
  }

  /* montserrat-700 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local('Montserrat Bold'), local('Montserrat-Bold'),
      url('/fonts/Montserrat/montserrat-v14-latin-700.woff2') format('woff2'),
      url('/fonts/Montserrat/montserrat-v14-latin-700.woff') format('woff');
  }

  /* montserrat-600italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 600;
    src: local('Montserrat SemiBold Italic'), local('Montserrat-SemiBoldItalic'),
      url('/fonts/Montserrat/montserrat-v14-latin-600italic.woff2') format('woff2'),
      url('/fonts/Montserrat/montserrat-v14-latin-600italic.woff') format('woff');
  }

  /* montserrat-800 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    src: local('Montserrat ExtraBold'), local('Montserrat-ExtraBold'),
      url('/fonts/Montserrat/montserrat-v14-latin-800.woff2') format('woff2'),
      url('/fonts/Montserrat/montserrat-v14-latin-800.woff') format('woff');
  }

  /* montserrat-700italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 700;
    src: local('Montserrat Bold Italic'), local('Montserrat-BoldItalic'),
      url('/fonts/Montserrat/montserrat-v14-latin-700italic.woff2') format('woff2'),
      url('/fonts/Montserrat/montserrat-v14-latin-700italic.woff') format('woff');
  }

  /* montserrat-800italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 800;
    src: local('Montserrat ExtraBold Italic'), local('Montserrat-ExtraBoldItalic'),
      url('/fonts/Montserrat/montserrat-v14-latin-800italic.woff2') format('woff2'),
      url('/fonts/Montserrat/montserrat-v14-latin-800italic.woff') format('woff');
  }

  /* montserrat-900 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    src: local('Montserrat Black'), local('Montserrat-Black'),
      url('/fonts/Montserrat/montserrat-v14-latin-900.woff2') format('woff2'),
      url('/fonts/Montserrat/montserrat-v14-latin-900.woff') format('woff');
  }

  /* montserrat-900italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 900;
    src: local('Montserrat Black Italic'), local('Montserrat-BlackItalic'),
      url('/fonts/Montserrat/montserrat-v14-latin-900italic.woff2') format('woff2'),
      url('/fonts/Montserrat/montserrat-v14-latin-900italic.woff') format('woff');
  }
`;
