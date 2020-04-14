/* eslint-disable react/prop-types */
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/global';
import themes from '../styles/themes';

export default function App({ Component, pageProps }) {
  const defaultTheme = 'light';
  return (
    <ThemeProvider theme={themes[defaultTheme]}>
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
}
