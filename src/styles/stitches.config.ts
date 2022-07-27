import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      green: '#0BB07B',
      blue: '#4070F4',
      yellow: '#FFAD0D',
      red: '#F03D3D',

      white: "#FFFFFF",
      black: "#0A2156",

      gray100: '#0B1F4D',
      gray90: '#24365E',
      gray80: '#3C4C70',
      gray70: '#556282',
      gray60: '#6D7994',
      gray50: '#858FA6',
      gray40: '#9EA5B8',
      gray30: '#B6BCC9',
      gray20: '#CED2DB',
      gray10: '#E7E9ED',
    },
    fonts: {
      circularStd: "'CircularStd', sans-serif",
    },
    fontWeights: {
      normal: '500',
      medium: '600',
      bold: '700',
    },
    fontSizes: {
      header1: '40px',
      header2: '24px',
      header3: '22px',

      paragraph1: '20px',
      paragraph2: '16px',
      paragraph3: '14px',
      paragraph4: '12px',
    },
    lineHeights: {
      header1: '45px',
      header2: '30px',
      header3: '28px',

      paragraph1: '26px',
      paragraph2: '22px',
      paragraph3: '18px',
      paragraph4: '16px',
    },
    space: {
      "spacing-xxs": "10px",
      "spacing-xs": "20px",
      "spacing-s": "30px",
      "spacing-m": "60px",
      "spacing-l": "80px",
      "spacing-xl": "120px",
      "spacing-xxl": "200px",
      "container-inline-padding": "60px",
    },
    sizes: {
      full: "100%",
      "container-width": "1380px",
    },
    shadows: {
      "shadow-s": "0px 2px 4px rgba(11, 31, 77, 0.08)",
      "shadow-m": "0px 4px 8px rgba(11, 31, 77, 0.1)",
      "shadow-l": "0px 8px 16px rgba(11, 31, 77, 0.12)",
      "shadow-xl": "0px 12px 24px rgba(11, 31, 77, 0.14)",
      "shadow-xxl": "0px 16px 32px rgba(11, 31, 77, 0.16)",
    },
  },
});