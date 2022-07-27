import { styled } from "../../../styles/stitches.config";

export const Container = styled("div", {
  borderBottomWidth: 2,
  borderBottomStyle: "solid",
  borderBottomColor: "$gray10",

  ".content": {
    width: "$full",
    maxWidth: "$container-width",

    height: 52,

    marginInline: "auto",
    marginBlock: 24,
    paddingInline: "$container-inline-padding",

    display: "flex",
    justifyContent: "space-between",
  },

  ".content .right-content": {
    display: "flex",
    alignItems: "center",
  },

  ".content .right-content .dolar-price": {
    display: "flex",
    alignItems: "center",
    columnGap: 16,

    span: {
      fontFamily: "$circularStd",
      fontSize: "$paragraph4",
      lineHeight: "$paragraph4",
    },

    a: {
      height: 24,
    },
  },

  ".content .right-content .divider": {
    height: 29,
    width: 1,
    background: "$gray10",
    marginInline: 16,
  },

  ".content .right-content .signin": {
    display: "flex",
    alignItems: "center",
    columnGap: 4,

    fontFamily: "$circularStd",
    fontSize: "$paragraph2",
    fontWeight: "$bold",
  },
});
