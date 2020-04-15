/* eslint-disable react/prop-types */
import { ThemeProvider } from 'styled-components';

import config from '../data/config';

import GlobalStyles from '../styles/global';
import themes from '../styles/themes';

export default function App({ Component, pageProps }) {
  const { theme } = config;
  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
}
