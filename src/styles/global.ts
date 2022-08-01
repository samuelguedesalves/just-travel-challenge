import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "@font-face": [
    {
      fontFamily: "CircularStd",
      src: "url('/fonts/CircularStd-Book.ttf')",
      fontStyle: "normal",
      fontWeight: "500",
    },
    {
      fontFamily: "CircularStd",
      src: "url('/fonts/CircularStd-Medium.ttf')",
      fontStyle: "normal",
      fontWeight: "600",
    },
    {
      fontFamily: "CircularStd",
      src: "url('/fonts/CircularStd-Bold.ttf')",
      fontStyle: "normal",
      fontWeight: "700",
    },
  ],

  "*": {
    boxSizing: "border-box"
  },

  "html, body": {
    margin: 0,
    padding: 0,
  },

  "h1": {
    fontFamily: "$circularStd",
    fontWeight: "$bold",
    fontSize: "$header1",
    lineHeight: "$header1",
    margin: 0,
  },
  "h2": {
    fontFamily: "$circularStd",
    fontWeight: "$bold",
    fontSize: "$header2",
    lineHeight: "$header2",
    margin: 0,
  },
  "h3": {
    fontFamily: "$circularStd",
    fontWeight: "$medium",
    fontSize: "$header3",
    lineHeight: "$header3",
    margin: 0
  },

  "p": {
    fontFamily: "$circularStd",
    fontWeight: "$normal",
    fontSize: "$paragraph1",
    lineHeight: "$paragraph1",
    margin: 0,
  },

  "button" : {
    cursor: "pointer"
  },

  "a": {
    fontFamily: "$circularStd",
    fontSize: "$paragraph1",
    lineHeight: "$paragraph1",
    textDecoration: "none",
    color: '$blue',
  },

  ".ant-picker-dropdown": {
    fontFamily: "$circularStd",
  }
});