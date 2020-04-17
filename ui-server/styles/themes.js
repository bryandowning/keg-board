import { css } from 'styled-components';
import { black, chalkboard, white, grayMedium, grayLight, grayDark } from './colors';

export default {
  dark: {
    background: black,
    foreground: white,
  },
  light: {
    background: white,
    foreground: '#222',
    fontStackPrimary: css`
      font-family: 'Montserrat', system-ui, /* macOS 10.11-10.12 */ -apple-system,
        /* Windows 6+ */ 'Segoe UI', /* Android 4+ */ 'Roboto', /* Ubuntu 10.10+ */ 'Ubuntu',
        /* Gnome 3+ */ 'Cantarell', /* KDE Plasma 5+ */ 'Noto Sans', /* fallback */ sans-serif,
        /* macOS emoji */ 'Apple Color Emoji', /* Windows emoji */ 'Segoe UI Emoji',
        /* Windows emoji */ 'Segoe UI Symbol', /* Linux emoji */ 'Noto Color Emoji';
    `,
    fontStackMono: css`
      font-family: 'JetBrains Mono', /* macOS 10.10+ */ 'Menlo', /* Windows 6+ */ 'Consolas',
        /* Android 4+ */ 'Roboto Mono', /* Ubuntu 10.10+ */ 'Ubuntu Monospace',
        /* KDE Plasma 5+ */ 'Noto Mono', /* KDE Plasma 4+ */ 'Oxygen Mono',
        /* Linux/OpenOffice fallback */ 'Liberation Mono', /* fallback */ monospace,
        /* macOS emoji */ 'Apple Color Emoji', /* Windows emoji */ 'Segoe UI Emoji',
        /* Windows emoji */ 'Segoe UI Symbol', /* Linux emoji */ 'Noto Color Emoji';
    `,
    emptyRowBackgroundColor: grayLight,
    inactiveRowTextColor: grayDark,
    iconColorBoom: '#d67b07',
    iconColorHop: '#13900c',
    iconColorFlame: '#bf0000',
    iconColorScale: '#751175',
    iconColorGrains: '#b9bd03',
  },
  chalk: {
    background: chalkboard,
    foreground: white,
    fontStackPrimary: 'Kalam',
    emptyRowBackgroundColor: '#111',
    inactiveRowTextColor: grayMedium,
    bodyOverrides: css`
      background-image: url('/images/background-chalk.jpg');
    `,
    headerOverrides: css`
      background: none;

      h1 {
        color: ${white};
      }

      &:after {
        display: none;
      }
    `,
    beerRowOverrides: css`
      border-bottom-color: ${black};
    `,
    beerTitleOverrides: css`
      font-weight: 700;
    `,
    beerStatOverrides: css`
      dt {
        color: ${grayMedium};
      }

      dd {
        padding-bottom: 0;
        background-color: black;
        border: 0;
      }
    `,
    beerNotesOverrides: css`
      font-style: normal;
      color: ${grayMedium};
    `,
  },
};
