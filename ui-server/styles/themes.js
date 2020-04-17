import { css } from 'styled-components';
import { black, chalkboard, white, grayMedium, grayDark } from './colors';

export default {
  modern: {
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
    linkColor: '#0076ad',
    linkColorHover: 'black',
    iconColorBoom: '#d66707',
    iconColorHop: '#13900c',
    iconColorFlame: '#bf0000',
    iconColorScale: '#751175',
    iconColorGrains: '#abad4b',
    bodyOverrides: css`
      background-color: #fcfcfc;
    `,
    headerOverrides: css`
      background-color: #f7f7f7;
      box-shadow: 0 1px 1px #ebebeb, 0 2px 3px #f7f7f7;
    `,
    beerRowOverrides: css`
      background-color: ${white};
      box-shadow: inset 0 -2px 3px #f7f7f7;
    `,
  },
  neon: {
    background: black,
    foreground: white,
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
    linkColor: '#00aeff',
    linkColorHover: '#ff2fb4',
    iconColorBoom: '#ff902f',
    iconColorHop: '#0eff00',
    iconColorFlame: '#ff2323',
    iconColorScale: '#ff39ff',
    iconColorGrains: '#fbff29',
    beerTapGaugeOverrides: css`
      &:after {
        background-color: #00699a;
      }
    `,
    beerTitleOverrides: css`
      h2 {
        color: #ff2fb4;
      }

      h3 {
        color: #ff85d3;
      }
    `,
    beerNotesOverrides: css`
      font-style: normal;
      color: #ffdef3;
    `,
  },
  chalk: {
    background: chalkboard,
    foreground: '#f2f2f2',
    fontStackPrimary: css`
      font-family: 'Kalam', system-ui, /* macOS 10.11-10.12 */ -apple-system,
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
    linkColor: '#81d7ff',
    linkColorHover: '#ff96d9',
    iconColorBoom: '#f4b781',
    iconColorHop: '#7aaf77',
    iconColorFlame: '#c75f5f',
    iconColorScale: '#c372c3',
    iconColorGrains: '#dee081',
    bodyOverrides: css`
      background-image: url('/images/background-chalk.jpg');
    `,
    beerTapGaugeOverrides: css`
      &:after {
        background-color: ${grayDark};
      }
    `,
    beerTitleOverrides: css`
      font-weight: 700;
    `,
    beerNotesOverrides: css`
      font-style: normal;
      color: ${grayMedium};
    `,
  },
};
